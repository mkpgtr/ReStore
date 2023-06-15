import Catalog from '../../features/catalog/Catalog';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './Header';
import { useState } from 'react';
import {Outlet} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


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
      <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        
      <Outlet />
      </Container>
    

      
    </ThemeProvider>
  );
}

export default App;
