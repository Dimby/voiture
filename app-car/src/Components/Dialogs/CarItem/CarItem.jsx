import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import List from '@material-ui/core/List'
import { Grid, TextField, Button, Divider } from '@material-ui/core'
import Caddie from '@material-ui/icons/AddShoppingCart'
import User from '../User'
import { userList } from '../../../Lib/users'
import './style.css';

const CarItem = ({ id, image, title, description, price, open, handleClose }) => {
  const [users, setUsers] = useState();
  useEffect(() => {
    const getData = async () => {
      const data = await userList();
      setUsers(data);
    };
    getData();
  }, []);
  
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="md"
        >
        <DialogTitle id="alert-dialog-title">
        {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container>
              <Grid item xs="6">
                <img src={image} style={{ width: "100%" }} alt={title} />
              </Grid>
              <Grid item xs="6" style={{ padding: "0 0 0 40px" }}>
                <div>
                  <h1>{title}</h1>
                  {description}
                </div>
                <div className="price">
                  <span className="text">Price :</span> <br /> {price}
                </div>
                <div style={{ paddingBottom: "10px", textAlign: "right" }}>
                  <Button disabled variant="contained" color="primary"><Caddie fontSize="small"  /> &nbsp; Poursuivre la commande</Button>
                </div>
              </Grid>
            </Grid>
          </DialogContentText>
          <Divider />
          <DialogContentText>
            <h3>COMMENTAIRES</h3>
            <Grid container>
              <Grid item xs="12">
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  {users?.map((user, index) => {
                    return (
                      <User
                        key={index}
                        avatar={user?.name ?? ""}
                        username={user?.name?.substring(0, 2)}
                        comments={user?.body}
                      />
                    );
                  })}
                </List>
                <br />
                <TextField
                  id="outlined-multiline-static"
                  label="Laissez un commentaire"
                  multiline
                  fullWidth
                  rows={3}
                  variant="outlined"
                />
                <p>
                  <Button variant="contained" color="primary">
                    Commenter
                  </Button>
                </p>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
}

export default CarItem;