import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info";

class Catalog extends React.Component {
  state = {
    isLoading: true,
    games: [],
    error: null,
  };

  getFetchGames() {
    this.setState(
      {
        loading: true,
      },
      () => {
        fetch("http://localhost:8000/games")
          .then((res) => res.json())
          .then((result) =>
            this.setState({
              loading: false,
              games: result,
            })
          )
          .catch(console.log);
      }
    );
  }
  componentDidMount() {
    this.getFetchGames();
  }
  addToCart(game) {
    fetch("http://localhost:8000/games/" + game.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: game.id,
        title: game.title,
        photoPath: game.photoPath,
        author: game.author,
        description: game.description,
        price: game.price,
        rate: game.rate,
        new: game.new,
        info: game.info,
        cart: true,
      }),
    })
      .then((response) => response.json())
      .then((game) => {
        this.setState({
          cart: true,
        });
      });
    window.location.reload();
  }
  render() {
    const { games } = this.state;
    return (
      <motion.div
        className='Home'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <React.Fragment>
          <Grid container spacing={4} className='homeContent'>
            {games.map((game) => {
              const { id, title, photoPath, price, cart } = game;
              return (
                <Grid item xs={3}>
                  <Card key={id} className='cardItem'>
                    <CardMedia
                      component='img'
                      height='140'
                      image={photoPath}
                      alt='ItemPhoto'
                      sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant='h5' component='div'>
                        {title}
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <Button
                        className='button'
                        {...((cart && { disabled: true }) || {
                          disabled: false,
                        })}
                        variant='contained'
                        size='small'
                        onClick={() => {
                          this.addToCart(game);
                        }}
                      >
                        <ShoppingCartIcon />
                      </Button>
                      <h2>Cena: {price}€</h2>
                      <Link
                        to={`/games/${game.id}`}
                        className='cardButton'
                        variant='contained'
                        size='small'
                      >
                        <Button variant='contained' size='small'>
                          <InfoIcon />
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}{" "}
          </Grid>
        </React.Fragment>
      </motion.div>
    );
  }
}
export default Catalog;
