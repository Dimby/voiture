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

const Login = () => {
  const classes = useStyles();

  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState("");
  const history = useHistory();

  const onChangePseudo = (e) => {
    setPseudo(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }
  
  const validForm = (e) => {
    console.log(pseudo+" - "+localStorage.getItem('pseudo'))
    if(pseudo === localStorage.getItem("pseudo") && password === localStorage.getItem("password")) {
      console.log("Pseudo ou Mot de passe correct")
      localStorage.setItem("status", true);
      history.push('/');
    } else {
      setValidation("Mot de passe ou pseudo incorrect");
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
      <div className="container" style={{ height: "80vh", overflow: "hidden", alignItems: "center" }}>
        <div className="box-login">
          <div className="title">CONNEXION</div>

          <form onSubmit={validForm} className={classes.root} noValidate autoComplete="off" style={{ padding: "20px 0" }}>
            <div>
              <TextField onChange={onChangePseudo} fullWidth id="standard-basic" label="Nom ou pseudo" />
              <TextField onChange={onChangePassword} fullWidth type="password" id="standard-basic" label="Mot de passe" />
            </div>
            <div style={{ textAlign: "center", paddingTop: "20px" }}>
              <Button type="submit" variant="contained" disableElevation>Connecter</Button>
            </div>
            <div className="box-validation">
              {validation}
            </div>
            <div style={{ textAlign: "center", paddingTop: "20px" }}>
              Vous n'êtes pas encore inscrit? <Link to="/signup">Inscrivez-vous ici</Link>
            </div>
          </form>

        </div>
      </div>
    </>
  );
}

export default Login;