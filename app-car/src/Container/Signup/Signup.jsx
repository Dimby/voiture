import React from "react";
import { Grid, TextField, Button } from "@material-ui/core"
import ArrowBack from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './style.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}));

const Signup = () => {
  const classes = useStyles();
  return (
    <>
      <div className="container" style={{ backgroundColor: "#efefef" }}>
        <div style={{ padding: "20px 0px" }}>
          <Button component={Link} to="/"> <ArrowBack fontSize="small" /> &nbsp; Retour à la page d'acceuil</Button>
        </div>
        <div></div>
      </div>
      <div className="container" style={{ height: "80vh", overflow: "hidden", alignItems: "center" }}>
        <div className="box-login">
          <div style={{ textAlign: "center", paddingBottom: "20px", borderBottom: "2px solid white" }}>INSCRIPTION</div>
          <form className={classes.root} noValidate autoComplete="off" style={{ padding: "20px 0" }}>
              <div>
                <TextField fullWidth id="standard-basic" label="Nom ou pseudo" />
                <TextField fullWidth type="password" id="standard-basic" label="Mot de passe" />
                <TextField fullWidth type="password" id="standard-basic" label="Confirmation" />
              </div>
              <div style={{ textAlign: "center", paddingTop: "20px" }}>
                <Button variant="contained" disableElevation>S'inscrire</Button>
              </div>
              <div style={{ textAlign: "center", paddingTop: "20px" }}>
                Vous avez un compte? <Link to="/login">Connectez-vous ici</Link>
              </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;