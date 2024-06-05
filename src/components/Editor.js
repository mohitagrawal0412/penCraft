import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt,faExpandAlt } from '@fortawesome/free-solid-svg-icons';

const CodeEditor = ({ language, displayName, value, onChange }) => {

const [open,setOpen]=useState(true);

  function handleEditorChange(value) {
    onChange(value);
  }

  return (
    <div className={`editor-container ${open?'':'collapsed'}`}>
      <div className="editor-title">
        {displayName}
        <button 
          type='button'
          className='expand-collapse-btn'
        onClick={() => setOpen(prevOpen => !prevOpen)}>
<FontAwesomeIcon icon={open?faCompressAlt:faExpandAlt} />

        </button>
       
      </div>
      <Editor
        height="100%"
        language={language}
        value={value}
        onChange={handleEditorChange}
        className="monaco-editor"
        options={{
          selectOnLineNumbers: true,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
