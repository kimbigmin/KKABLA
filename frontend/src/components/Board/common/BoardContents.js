import React from 'react';

function BoardContents({ item }) {
  return <div dangerouslySetInnerHTML={{ __html: item }} />;
}

export default BoardContents;
