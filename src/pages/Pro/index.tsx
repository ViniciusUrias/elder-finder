import Grid from '@material-ui/core/Grid';
import ProCard from 'components/ProCard';

const FindPro = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Grid container justifyContent='center' spacing={5}>
        {[0, 1, 2, 4, 4, 5].map(value => (
          <Grid key={value} item>
            <ProCard />
          </Grid>
        ))}
      </Grid>
    </Grid>
    <Grid item xs={12} />
  </Grid>
);

export default FindPro;
