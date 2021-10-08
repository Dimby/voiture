import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core"
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
  const [validation, setValidation] = useState("");
  const history = useHistory();

  const onChangePseudo = (e) => {
    setPseudo(e.target.value);
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }
  const onChangeConfirmation = (e) => {
    setConfirmation(e.target.value);
  }

  const onClickSignup = (e) => {
    if(!!pseudo.trim() && !!password.trim() && !!confirmation.trim()) {
      if(password === confirmation) {
        localStorage.setItem("pseudo", pseudo);
        localStorage.setItem("password", password);
        history.push('/login');
      } else {
        setValidation("Le mot de passe n'est pas identique")
      }
    }else {
      setValidation("Les champs ne doivent pas être vide")
    }
    e.preventDefault();
  }

  return (
    <>
      <div className="container" style={{ backgroundColor: "#efefef" }}>
        <div style={{ padding: "20px 0px" }}>
          <Button onClick={() => history.goBack()}> <ArrowBack fontSize="small" /> &nbsp; Retour</Button>
        </div>
        <div></div>
      </div>
      <div className="container box-2">
        <div className="box-login">
          <div className="box-signup">INSCRIPTION</div>
          <form onSubmit={onClickSignup} className={classes.root} noValidate autoComplete="off" style={{ padding: "20px 0" }}>
              <div>
                <TextField onChange={onChangePseudo} fullWidth id="standard-basic" label="Nom ou pseudo" />
                <TextField onChange={onChangePassword} fullWidth type="password" id="standard-basic" label="Mot de passe" />
                <TextField onChange={onChangeConfirmation} fullWidth type="password" id="standard-basic" label="Confirmation" />
              </div>
              <div className="box-submit">
                <Button type="submit" variant="contained" disableElevation>S'inscrire</Button>
              </div>
              <div className="box-validation">
                {validation}
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