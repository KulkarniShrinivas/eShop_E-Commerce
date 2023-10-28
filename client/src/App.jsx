import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//in the place of div add data provider 
//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import Detailview from './components/details/DetailView';
import Cart from './components/cart/Cart';

import {Box} from '@mui/material'

//Route is used for url based component
//Routes is used wrap the content as we need in home because it will change but not in header it will be constant

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DataProvider>
        <BrowserRouter>
            <Header />
            <Box style={{marginTop: 62}}>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/product/:id' element={<Detailview /> } />
                  <Route path= '/cart' element={<Cart />} />
            </Routes>
            </Box>
        </BrowserRouter>
        
      </DataProvider>
      
    </>
  )
}

export default App
