import Catalog from '../../features/catalog/Catalog';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './Header';
import { useState } from 'react';
import {Outlet} from 'react-router-dom'


function App() {
const [darkMode,setDarkMode] = useState(true)
const theme = createTheme({
  palette:{
    mode:darkMode ? 'dark' : 'light'
  }
})

function handleThemeChange(){
  setDarkMode(!darkMode)
}
  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        
      <Outlet />
      </Container>
    

      
    </ThemeProvider>
  );
}

export default App;
