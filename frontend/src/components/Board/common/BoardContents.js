import React from 'react';
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
function BoardContents({ item }) {
  return <Viewer initialValue={item} />;
}

export default BoardContents;
