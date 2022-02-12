export const getRefinedDate = (date) => {
  const splitedDate = date.split('T');
  return splitedDate[0];
};
