//add menu using mui dashboard 

import { useState } from "react";
import { Box, Typography, Menu, MenuItem, styled } from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


//css

const Component = styled(Menu) `
    margin-top: 5px;
`;

const Logout = styled(Typography)`
font-size: 14px;
margin-left: 20px;
`

const Profile = ({ account, setAccount }) => {
    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const handleClose = () => {
        setOpen(false);
    }
     //logout functionality is in setAccount 

    const logoutUser = () => {
        setAccount('');


    }

    return (
        <>
            <Box onClick={handleClick}><Typography style={{ marginTop: 2, cursor: 'pointer' }}>{account}</Typography></Box>
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                
                <MenuItem onClick={() => { handleClose(); logoutUser(); }}>
                    <PowerSettingsNewIcon color="primary" fontSize="small"/>
                    <Logout >Logout</Logout >
                </MenuItem>
            </Component>
        </>
    );
}

export default Profile;

//we need button also for logout will use material icons
/* <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem> */