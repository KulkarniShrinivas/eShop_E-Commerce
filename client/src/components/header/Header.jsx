import React from "react";
import { useState } from "react";

import {AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, ListItem, styled } from '@mui/material';

import {Menu} from '@mui/icons-material';

//components
import Search from "./Search";
import CustomButton from "./CustomButton";

import { Link } from "react-router-dom";


const StyledHeader = styled(AppBar)`
background: #0F1111;
// color: black;
height: 60px;
 `;

 //image Box lined with Link
 const Component = styled(Link)`
 margin-left: 12%;
 line-height: 0;
 text-decoration: none;
 color: inherit;
 &:hover {
   
    transform: scale(1.1);
}
`;

const SubHeading = styled(Typography)`
font-size:10px;
font-style: italic;
`;

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft:4

})

const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
    color: 'white',
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));



const Header = () => {
    const logoURL = 'https://i.postimg.cc/9MBcFQ7X/eshop1-removebg-preview.png';
    // const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    //will create state so that we can guess if drawer is opened or closed 
    const [open, setOpen] = useState(false);


    //true false for medium screeen 3 dots display function
    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <listItem button>
                    <CustomButton />
                </listItem>
            </List>
        </Box>
    );
      //here I will edit the button in customButton.jsx
      


    //  <MenuButton color:"inherit"> for white bar this is 3 dot when we go for medium screen and 3 dots appear and drop down implemented using handleclose
    //Drwaer uses prop like ip prop for this will create 1 state  using const[open, setOpen]
    return(
        
            <StyledHeader>
                <Toolbar style={{ minHeight: 55}}>
                    
                <MenuButton onClick={handleOpen}>
                         <Menu />
                    </MenuButton>
            
                
                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                    <Component to="/">
                        <img src={logoURL} alt="logo" style={{ width: 100}}/>

                    <Box style={{ display: "flex"}}>
                        <SubHeading>Explore &nbsp;
                            <Box component="span" style={{color: "#FFe500"}}>More</Box>
                        </SubHeading>
                        {/* <PlusImage src={subURL} alt="sub-logo" /> */}
                    </Box>

                    </Component>

                    <Search />
                    <CustomButtonWrapper>
                        <CustomButton />
                    </CustomButtonWrapper>
                  

                </Toolbar>
            </StyledHeader>
       
    )
}

export default Header;