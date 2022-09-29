// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Button} from '@mui/material'
import Divider from '@mui/material/Divider';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}

const Contact = ({id, data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <List id={`List ${id}`} sx={{width:'100%'}}>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt="Cat Avatar" src={data.photo} />
        </ListItemAvatar>
        <ListItemText primary={`${data.name}`} secondary={`${data.phone} ${data.email}`} />
        </ListItem>
        <Divider variant="fullwidth"/>
    </List>
    );
};

export default Contact;
