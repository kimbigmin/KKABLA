import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export const getStars = (starNum) => {
  const stars = [];

  for (let i = 0; i < Math.floor(starNum); i++) {
    stars.push(
      <StarIcon key={'star' + i} sx={{ color: '#fcdd29', fontSize: '1rem' }} key={i}/>,
    );
  }

  if (starNum % 1 >= 0.5) {
    stars.push(<StarHalfIcon sx={{ color: '#fcdd29', fontSize: '1rem' }} key={stars.length}/>);
  }

  while (stars.length !== 5) {
    stars.push(<StarBorderIcon sx={{ color: '#fcdd29', fontSize: '1rem' }} key={stars.length} />);
  }

  return stars;
};
