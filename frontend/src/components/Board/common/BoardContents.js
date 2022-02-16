import React from 'react';
import { Viewer } from '@toast-ui/react-editor';
function BoardContents({ item }) {
  return <Viewer initialValue={item} />;
}

export default BoardContents;
