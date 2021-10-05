import React from "react";
import { Grid } from "@material-ui/core"
import './style.css';
import CardVoiture from "../../Components/CardVoiture";

const Main = () => {
    return (
        <>
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <CardVoiture />
            </Grid>
            <Grid item xs={4}>
                <CardVoiture />
            </Grid>
            <Grid item xs={4}>
                <CardVoiture />
            </Grid>
        </Grid>
        </>
    );
}

export default Main;