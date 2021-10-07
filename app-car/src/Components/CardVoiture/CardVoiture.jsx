import React from 'react';
import './style.css';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core"

const CardVoiture = ({ image, title, description, onClick }) => {
  return (
    <Card onClick={onClick}>
        <CardActionArea>
            <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={image}
            title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  );
}

export default CardVoiture;