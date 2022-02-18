export const removeImgTag = (text) => {
  // 이미지 태그 정규식
  const imgTag = /<img(.)+[^p]>/g;
  return text.replace(imgTag, '');
};
