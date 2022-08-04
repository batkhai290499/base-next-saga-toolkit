/* eslint-disable */
import { Delete, Edit } from '@mui/icons-material';
import {
  Button,
  CardActionArea,
  CardActions,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

export interface ICardProps {
  urlImage: string;
  name: string;
  phone: string;
  gender: 'M' | 'F';
  email: string;
  removeFunction: any;
}

const useStylesMain = makeStyles(() => ({
  roundedButton: {
    borderRadius: 30,
    minWidth: 0,
    height: 35,
    width: 35,
  },
}));

export default function Cards(props: Partial<ICardProps>) {
  const { urlImage, name, phone, gender, email, removeFunction } = props;
  const classes = useStylesMain();
  return (
    <Card sx={{ width: 400 }}>
      <CardMedia
        component="img"
        height="140"
        image={urlImage}
        alt="green iguana"
      />
      <Stack spacing={2} direction="row" alignItems="flex-end">
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {phone}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {gender}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="error"
            className={classes.roundedButton}
            onClick={() => removeFunction()}
          >
            <Delete />
          </Button>
          <Link href="/">
            <Button
              variant="contained"
              color="success"
              className={classes.roundedButton}
            >
              <Edit />
            </Button>
          </Link>
        </CardActions>
      </Stack>
    </Card>
  );
}
