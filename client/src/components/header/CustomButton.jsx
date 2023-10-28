import { useState, useContext } from "react";  //react hook where we can store values

import { Badge, Box, Button, Typography, styled } from "@mui/material";

// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ShoppingCart } from '@mui/icons-material';

import { DataContext } from "../../context/DataProvider";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";




//Components
//we need to call this component from LoginDialog because we have Login button here

import LoginDialog from "../login/LoginDialog";
import Profile from "./Profile";



//CSS
//LogiButton near to searchBox margin-right: 60px
const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center', // Vertically align the items
    margin: '0 3% 0 auto',
    '& > *': {
        marginRight: '40px !important', // Applying the style with !important
        fontSize: 16,
        alignItems: 'center',
  
    },
    [theme.breakpoints.down('md')]: {
        marginLeft: 20,
        display: 'block'
    }
}));





const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',

    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));

//#1565c0 for login button

const LoginButton = styled(Button)`
    color: #1565c0;
    background: #FFF;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 6px;
    box-shadow: none;
    font-weight: 600;
    height: 32;
  
    &:hover {
        background: #1565c0; // Change the background color on hover
        color: #FFF; // Change the text color on hover
        transform: scale(1.1);
    }
`;




const CustomButton = () => {

    const [open, setOpen] = useState(false);
    //logout functionality is in setAccount 
    const { account, setAccount  } = useContext(DataContext);

    const { cartItems } = useSelector(state => state.cart);

    const openDialog = () => {
        setOpen(true)
    }

    //in the field of contained we can add Outlined for good UI
    return (
        //login button near to the search box 
        <Wrapper style={{marginRight: 60}}>

            {
                 //logout functionality is in setAccount 
                account ? <Profile account= {account} setAccount = {setAccount }/> : 
                <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton> 

            }
            

           <Typography style={{marginTop: 3, width: 135 }}> Become a Seller</Typography> 
           <Typography style={{marginTop: 3 }}>More</Typography>

           <Container to='/cart'>
            <Badge badgeContent={cartItems?.length} color="secondary">
                 <ShoppingCart />
            </Badge>
             <Typography>Cart</Typography>
           </Container>
           
           <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}

export default CustomButton;

//pass the prop in loginDilog as open 
//to make open value false we need setOpen and we can use that as prop