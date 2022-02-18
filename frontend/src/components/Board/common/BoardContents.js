import React from 'react';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

function BoardContents({ item }) {
  return <Viewer initialValue={item} />;
}

export default BoardContents;
