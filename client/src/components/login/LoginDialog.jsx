//we need to call this component in CustomButton.jsx because we have Login button 
//changed css 
//PaperProps={{ sx: { maxWidth: 'unset' } }} used in pop login page used to not to scroll width
//use context react hook

import { useState , useContext} from 'react';
import {Dialog, Box, TextField, Button, Typography, styled} from '@mui/material';

import { authenticateSignup, authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';


const Component = styled(Box)`
height: 70vh;
width: 90vh;
`;


//image height so that we cant get scroll bar in signup pop page

const Image = styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
 height: 83%%;
width: 28%;
padding: 45px 35px;
& > p, & > h5 {
    color: #FFFFFF;
    font-weight: 600;
}
`;


const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    overflow: auto;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
text-transform: none;
background: #FB641B;
color: #fff;
height: 48px;
border-radius: 2px;
`;


const RequestOTP = styled(Button)`
text-transform: none;
background: #fff;
color: #2874f0;
height: 48px; 
border-radius: 2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%)
`;


const Text = styled(Typography)`
font-size: 12px;
color: #878787;
`;

const CreateAccount = styled(Typography)`
font-size:14px;
text-align: center;
color: #2874f0;
font-weight: 600;
cursor: pointer; 
`;

//error handleing css

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height:0;
    margin-top: 10px;
    font-weight: 600;
`


//in usestate I will pass default value so I will create below object 
const accountIntitialvalues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your orders, Wishlist and Recommendations'

    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Sign up with your mobile number to get started'
    }


} 

//here will be taking objects of signup state 

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

//for login diloug

const loginInitialValues = {
    username: '',
    password: ''
}


//between signup and login will be having togglebutton
//false ? // we cant cange this manualy so will create state in wrapper  */ 

const LoginDialog = ({open, setOpen}) => {

    const [ account, toggleAccount ] =  useState(accountIntitialvalues.login);

    //store the value that entered by user in signup page using state

    const [signup, setSignup ] = useState(signupInitialValues);


    ///remove values 

    const { setAccount } = useContext(DataContext);

    //This is login diloug to login using username and password and values how we have added for signup above

    const [login, setLogin] = useState(loginInitialValues);

    //create state if user enters wrong username and password and display message as Please enter valid username or password

    const [ error, setError ] = useState(false);

    

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountIntitialvalues.login);
        setError(false);
    }

    const toggleSignup = () => {
        toggleAccount(accountIntitialvalues.signup);
    }

   //store the values using state and signupInitialValues
    const onInputChange = (e) => {
        setSignup({...signup, [e.target.name]: e.target.value });

    }

    //signUp(continue) user using API from services api.jsx using axious we can call authenticate signup here 
    
    const signupUser = async() => {
        let response = await authenticateSignup(signup);
        //asyncronous function
          //if I wont get respone we need to return  
        if(response) return;

        //if we get response then I will call handleclose (this will close dilog and agian it will set it to login dialog)
        handleClose();

        //after this we need to display the name of the user  using state(creating context api)(Header.jsx => context(DataProvider.jsx))

        setAccount(signup.firstname);
      


    }

    // login dilog and set values ..login

    const onValueChange = (e) => {
        setLogin ({ ...login, [e.target.name]: e.target.value });

    }

    //create function when user clicks button he should get logged before this I will create service in api.js and call api and import authenticateLogin function

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        console.log(response);
        if(response.status === 200) {
            handleClose();
            setAccount(response.data.data.firstname);
        } else {
            setError(true);

        }
    }




    
    //PaperProps={{ sx: { maxWidth: 'unset' } }} this will set bydefault width 
    return(
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>

            <Component>
                <Box style={{ display:'flex', height: '100%'}}>

                <Image>
                    <Typography variant="h5">{account.heading}</Typography>
                    <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                </Image>

                
                { 

                    account.view === 'login' ?
             
                <Wrapper>
                    <TextField  variant="standard" onChange={(e) => onValueChange(e)} name='username' label="Enter Username"/>

                    { error && <Error>Please enter valid username or password</Error> }

                    <TextField  variant="standard" onChange={(e) => onValueChange(e)} name='password' label="Enter Password"/>
                    <Text>By continuing, you agree to Flipkart's Terms of use and Privecy Policy </Text>
                    <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                    <Typography style={{ textAlign: 'center'}}>OR</Typography>
                    <RequestOTP>Request OTP</RequestOTP>
                    <CreateAccount onClick={() => toggleSignup()}>New to Flifcart? create an account</CreateAccount>
                </Wrapper>
                :
                //onChange is used to fetch the values that users enterd in the signup field 
                <Wrapper>
                    <TextField  variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label="Enter Firstname"/>
                    <TextField  variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label="Enter Lastname"/>
                    <TextField  variant="standard" onChange={(e) => onInputChange(e)} name='username' label="Enter Username"/>
                    <TextField  variant="standard" onChange={(e) => onInputChange(e)} name='email' label="Enter Email"/>
                    <TextField  variant="standard" onChange={(e) => onInputChange(e)} name='password' label="Enter Password"/>
                    <TextField  variant="standard" onChange={(e) => onInputChange(e)} name='phone' label="Enter Phone"/>
                    
                    <LoginButton onClick={() => signupUser()} >Continue</LoginButton>

                </Wrapper>
                }
                </Box>

            </Component>
           
        </Dialog>
    )
}


export default LoginDialog;