import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core"
import ArrowBack from '@material-ui/icons/ArrowBack';
import { Link, useHistory } from 'react-router-dom';
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

  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const history = useHistory();

  const onChangePseudo = (e) => {
    setPseudo(e.target.value);
    // localStorage.setItem(pseudo, pseudo);
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    // localStorage.setItem(password, password);
  }
  const onChangeConfirmation = (e) => {
    setConfirmation(e.target.value);
    // localStorage.setItem(password, password);
  }

  const onClickSignup = () => {
    if(!!password.trim() === !!confirmation.trim() && !!pseudo.trim()) {
      localStorage.setItem("pseudo", pseudo);
      localStorage.setItem("password", password);
      console.log(localStorage.getItem(pseudo))
      history.push('/login');
    } else {
      console.log("Errora")
    }
  }

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
          <form onSubmit={onClickSignup} className={classes.root} noValidate autoComplete="off" style={{ padding: "20px 0" }}>
              <div>
                <TextField onChange={onChangePseudo} fullWidth id="standard-basic" label="Nom ou pseudo" />
                <TextField onChange={onChangePassword} fullWidth type="password" id="standard-basic" label="Mot de passe" />
                <TextField onChange={onChangeConfirmation} fullWidth type="password" id="standard-basic" label="Confirmation" />
              </div>
              <div style={{ textAlign: "center", paddingTop: "20px" }}>
                <Button type="submit" variant="contained" disableElevation>S'inscrire</Button>
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