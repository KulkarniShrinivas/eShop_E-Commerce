import { Typography, Box, styled, Button } from "@mui/material";
import { removeFromCart} from  "../../redux/actions/cartAction";
import { useDispatch } from "react-redux";


import { addEllipsis } from "../../utils/common-utils";



import ButtonGroup from "./GroupedButton";

const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    display: flex;
    background: #fff

`;

const LeftComponent = styled(Box)`
    margin: 20px;
    display: flex;
    flex-direction: column;
`;

const SellerText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;

`;  

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color: #000;
    font-weight: 600;

`;


const CartItem = ({ item }) => {

    const fassured = 'https://i.postimg.cc/NFnYS9Zx/istockphoto-1367070716-612x612-removebg-preview-1.png';


    const dispatch = useDispatch();

    const removeItemFromCart= (id) => {
        dispatch(removeFromCart(id));
    }




    return (
    <Component>
        < LeftComponent >
            <img src={item.url} alt="product" style={{ height: 110, width: 110}}/>
            <ButtonGroup />

        </ LeftComponent >

        <Box style={{ margin: 20}}> 
            <Typography>{ addEllipsis(item.title.longTitle)}</Typography>
            <SellerText >Seller:RetailNet
            {/* <Box component="span">
            <img src={fassured} alt="assured" style={{ width: 19, marginLeft: 10, marginTop: 2 }} />
        </Box> */}
        </SellerText>
        <Typography style={{ margin: '20px 0'}}>
            <Box component="span" style={{ fontWeight: 600, fontSize: 18 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{ color: '#878787'}}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
             <Box component= "span" style={{ color: '#388E3C'}}>{item.price.discount}</Box>
        </Typography>

        <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>


        </Box>
    </Component>
    )
}

export default CartItem;