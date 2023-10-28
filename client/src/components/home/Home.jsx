//Fragment is replacement of div because we cant use div we need to wrap the parent element we cant add 2 parent element in return so we can make child using fragment 
//Fragment wont create extra node and is fast <fragment> this is replacement of new tag <> </> in new react version
// import { Fragment } from "react";


//call api from redux action using useeffect hook

import { useEffect } from 'react';


//Components import

import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "../home/slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

import { styled, Box } from '@mui/material'

//from redux call getProducts

import { getProducts } from '../../redux/actions/productActions';

import {useDispatch, useSelector} from 'react-redux';

//Css

const Components = styled(Box)`
padding:  10px;
background: #F2F2F2;
`

const Home = () => {
    //we have removed all the data from redux store and stored in productss

    const { products } = useSelector(state => state.getProducts)
   // const { products } = getProducts; //object restructuring method(imp)
     console.log(products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())

    }, [dispatch])

    
    return (
        <>

            <NavBar />

            <Components>
             <Banner />
             <MidSlide products={products} title="Deal of the Day" timer={true} />
             <MidSection />
             <Slide products={products} title="Discounts for you" timer={false} />
             <Slide products={products} title="Suggesting Items" timer={false} />
             
             <Slide products={products} title="Top Selection" timer={false} />
             <Slide products={products} title="Recommended Items" timer={false} />
             <Slide products={products} title="Trending offers" timer={false} />
             <Slide products={products} title="Season's top picks" timer={false} />
             <Slide products={products} title="Top Deals on Accessories" timer={false} />

            </Components>
        

        </>
        
    )
}

export default Home;

//slide will break as we need to add responisve props from banner.jsx

//adding every components background color and padding in banner using Box 