//////////////////
import React, { useState, useEffect } from "react";
import axios from "axios"
import '../stylesheets/styles.css'
const regeneratorRuntime = require("regenerator-runtime");
// import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


export default function AllFoods() {
  const classes = useStyles();

  // state
  useEffect(() => {
    fetchFoods();
  }, []);

  const [datas, setDatas] = useState([]);

  // get data from back end
  const fetchFoods = async () => {
    const data = await axios.get('http://localhost:3000/foods');
    const datas = data
    // console.log(datas)
    // console.log('DATA DATA DATA DATA', datas.data)
    // console.log(datas.data[0]._id)
    setDatas(datas.data)
  }

  const deleteFoods = (data, allData) => {
    // console.log('initial data', data)
    // console.log('allData', allData)
    // event.preventDefault();
    axios.delete('http://localhost:3000/foods/' + data._id)
      .then(res => {
        axios.get('http://localhost:3000/foods')
          .then((response) => {
            console.log(response.data)
            setDatas(response.data)
          });
        // console.log(data)
        // window.location = '/allFoods'
        // history.push('/allFoods')
        // res.redirect('/allFoods')
      })
      .catch(error => console.log(error))
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Favorite Foods
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Favorite Foods
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              To all the amazing places I've been and food I've ate!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {datas.map((data) => (
              <Grid item key={data} xs={12} sm={6} md={4}>
                <Card className={classes.data}>                     {/*changed class to data*/}
                  <CardMedia
                    className={classes.cardMedia}
                    image={data.image} //data.image
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      <ul>
                        <li>{data.dishName}</li>
                        {/* <li>{data.image}</li> */}
                        <li>{data.restaurant}</li>
                        <li>{data.rating}</li>
                        <li>{data.category}</li>
                        <li>{data.location}</li>
                      </ul>
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {console.log('this is ALL THE OBJECTS ->>>>>>>>>>>>>>', datas)}
                    <Button size="small" color="primary" onClick={() => deleteFoods(data, datas)}>
                      Delete
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}