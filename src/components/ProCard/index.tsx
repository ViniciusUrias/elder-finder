import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Box, Button } from '@material-ui/core';
import CustomizedRatings from 'components/Rating';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 723
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    avatar: {
      backgroundColor: red[500],
      width: 75,
      height: 75
    }
  })
);

export default function ProCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            M
          </Avatar>
        }
        action={
          <Button aria-label='settings'>
            <MoreVertIcon />
          </Button>
        }
        title='Cuidadora de Idosos Profissional'
        subheader='Santos (São Paulo) 13345-008 Vila Fabril'
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          Desejo trabalhar como cuidadora de idosos, tenho experiência na area e curso de cuidadora e atualmente estou cursando o curso tecnico de
          enfermagem, tenho muita paciencia com os idosos e sou muito atenciosa
        </Typography>
      </CardContent>
      <Box component='div' paddingLeft={2} display='flex'>
        <PhoneEnabledIcon style={{ color: 'green' }} />
        <Typography style={{ marginLeft: 2 }}>Telefone Validado</Typography>
      </Box>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <Typography>Com 29 trabalhos realizados</Typography>
        <div style={{ flexGrow: 1 }} />

        <CustomizedRatings />
        <Typography style={{ marginLeft: 5 }}>7 Avaliações</Typography>
      </CardActions>
    </Card>
  );
}
