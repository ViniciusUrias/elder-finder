import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75'
  },
  iconHover: {
    color: '#ff3d47'
  }
})(Rating);

export default function CustomizedRatings() {
  return (
    <div>
      <StyledRating name='customized-color' defaultValue={2} precision={0.5} icon={<FavoriteIcon fontSize='inherit' />} />
    </div>
  );
}
