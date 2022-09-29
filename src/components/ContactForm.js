// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { useState } from "react";
import { Button, Card, TextField, Box } from "@mui/material";  
const ContactForm = ({addContact}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = useState({
        name: '',
        phone: '',
        email: '',
        photo: ''
    });
    return (
        <>
        <Card variant="outlined">
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "50%"} }}
          noValidate
          autoComplete="off" >

          <TextField required id="name" label="Name" variant="standard" value={newContact.name}
            onChange={(e) => setNewContact({ ...newContact, name: e.target.value }) } />
          <TextField required id="phone" label="Phone" variant="standard" value={newContact.phone}
            onChange={(e) => setNewContact({ ...newContact, phone: e.target.value }) } />
          <TextField required id="email" label="Email" variant="standard" value={newContact.email}
            onChange={(e) => setNewContact({ ...newContact, email: e.target.value }) } />
          <TextField required id="photo" label="Photo URL" variant="standard" value={newContact.photo}
            onChange={(e) => setNewContact({ ...newContact, photo: e.target.value }) } />
          <Button variant="text" onClick={() => { 
            addContact(newContact);
            setNewContact({ name: "", phone: "", email: "", photo: "" });
            }} > ADD NEW </Button>
        </Box>
      </Card>
         </>
    );
}

export default ContactForm;