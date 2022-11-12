import React from 'react';
import RecipeContextProvider from './components/context';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage';
import Header from './components/Header'
import Footer  from './components/Footer'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AddNew from './pages/AddNew';




//Material UI:
import { ThemeProvider,  createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import CategoryPage from './pages/CategoryPage';


const color = red[900];


const customTheme =  createTheme({
  //Theme settings:
  palette:{
    primary: {
      main: color,
    },
    secondary: {
      main: '#c62828',
    },

  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RecipeContextProvider> 
  <BrowserRouter>
    <ThemeProvider theme={customTheme}>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/addNew' element={<AddNew/>}/>
          <Route path="/category/:name" element={<CategoryPage/>} />
        </Routes>
      <Footer/>
    </ThemeProvider>
  </BrowserRouter>
 </RecipeContextProvider>
 
);


