import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import './style.css';

const User = ({ id, avatar, username, comments }) => {
    return (
      <>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={username} src={avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={username}
            secondary={
              <React.Fragment>
                {comments}
              </React.Fragment>
            }
            />
        </ListItem>
      </>
    );
};

export default User;