import React from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

function CommonEditor({
  placeholder,
  onChangeFn,
  reff,
  initialValue,
  toolbar,
}) {
  return (
    <Editor
      previewStyle="vertical"
      initialEditType="wysiwyg"
      placeholder={placeholder}
      onChange={onChangeFn}
      ref={reff}
      initialValue={initialValue}
      toolbarItems={toolbar}
    />
  );
}

export default CommonEditor;
