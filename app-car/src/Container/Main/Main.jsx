import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core"
import './style.css';
import CardVoiture from "../../Components/CardVoiture";
import { voitures } from "../../Lib/voitures"
import CarItem from "../../Components/Dialogs/CarItem";
import { Link } from 'react-router-dom';


const Main = () => {

    const [voiture, setVoiture] = useState({
        id: "",
        image: "",
        title: "",
        description: "",
        price: ""
    });

    const [open, setOpen] = React.useState(false);

    const handleClose = (value) => {
        setOpen(false);
    };

    const onClickVoiture = (id, image, title, description, price ) => {
        setVoiture({ id, image, title, description, price });
        setOpen(true);
    };

    const onClickLogout = () => {
        localStorage.setItem("status", "");
        window.location.reload(false);
    }

    return (
        <>
            <header>
                <div className="nav">
                    <div className="title-nav">MES VOITURES</div>
                    <div className="login-nav">
                        {!!localStorage.getItem("status") ? 
                            <>
                                Lasany <Button onClick={onClickLogout}>Déconnexion</Button>
                            </>
                        :
                            <>
                                <Button component={Link} to="/login">Connexion</Button> <Button component={Link} to="/signup">Inscription</Button>
                            </>
                        }
                    </div>
                </div>
                <div className="parag">
                    <div className="title-parag">BIENVENUE</div>
                    <div className="desc-parag">" Quand une opportunité se présente, considérez-la comme unique, saisissez-la et agissez. " <br /> <span style={{ color: "#b3b3b3" }}>- Mofaddel Abderrahim </span> </div>
                </div>
            </header>
            <div style={{ width: "70%", margin: "auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "20px 0 10px 0" }}>
                    <div style={{ textTransform: "uppercase", fontWeight: "bold", position: "relative", top: "20px" }}>Liste des voitures disponibles</div>
                    <div>
                        <form noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Chercher une voiture" />
                        </form>
                    </div>
                </div>
                <Grid container spacing={3} direction="row" justify="center" alignItems="center" style={{ padding: "20px 0" }}>
                    {voitures?.map((voiture, index) => {
                        return (
                            <Grid key={index} item xs={3}>
                                <CardVoiture 
                                    key={voiture.id}
                                    image={voiture.image}
                                    title={voiture.title}
                                    description={voiture.description}
                                    onClick={() => {
                                        onClickVoiture(voiture.id, voiture.image, voiture.title, voiture.description, voiture.price);
                                    }}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
            <CarItem 
                id={voiture.id}
                image={voiture.image}
                title={voiture.title}
                description={voiture.description}
                open={open}
                price={voiture.price}
                handleClose={handleClose}
            />
        </>
    );
}

export default Main;