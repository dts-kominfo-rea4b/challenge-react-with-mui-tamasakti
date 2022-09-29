import { useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import Contact from './components/Contact';
import contactsJSON from './data/contacts.json';
import {Container, Grid, Divider, List, ListItem, ListItemAvatar, Avatar, ListItemText, Button} from '@mui/material'

const App = () => {
  const [contacts, setContacts] = useState(contactsJSON);
  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  }
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  return (
    <div className="App">
      <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={6}>
          <ContactForm addContact={addContact} />
          </Grid>
        <Grid item xs={6}>
          {contacts.map((contact, index) => (
            <Contact data={contact} key={index}/>
          ))}
        </Grid>
      </Grid>
      </Container>
     </div>    
     
     
  );
};

export default App;
