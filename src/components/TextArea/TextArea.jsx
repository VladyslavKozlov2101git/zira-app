import React from 'react';
import './style.scss';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function TextArea({
  name,
  onBlur,
  type,
  data,
  className = '',
  onChange,
  required = false,
}) {
  return (
    <div className={'textarea-block ' + className}>
      <Editor
        className={'form-input form-textarea'}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        resize_enabled={false}
        disabled={true}
      />
    </div>
  );
}

export default TextArea;
