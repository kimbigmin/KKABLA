const certification = (data) => {
  data = data.toLowerCase();
  let count = 0;

  const word = [
    '수료',
    '교육기관',
    '수여',
    '수료증',
    '증서',
    '과정',
    'completion',
    'cource',
    'programming',
    'education',
    'certification',
    'certificate',
  ];

  for (let i = 0; i < word.length; i++) {
    const regex = new RegExp(word[i]);
    const reulst = data.match(regex) ? data.match(regex).slice(0, 1) : null;
    console.log(reulst);
    if (reulst) {
      count++;
    }
  }
  return count > 3 ? true : false;
};

export default certification;
