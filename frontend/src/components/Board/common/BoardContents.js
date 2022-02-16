import React from 'react';

function BoardContents({ item }) {
  return <div dangerouslySetInnerHTML={{ __html: item }}></div>;
}

export default BoardContents;
