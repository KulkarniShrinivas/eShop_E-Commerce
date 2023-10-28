import { Typography, Box, Table, TableBody, TableRow, TableCell,  styled } from "@mui/material";

import { LocalOffer as Badge } from '@mui/icons-material';


const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`;

const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: green;
    font-size: 15px;
`;

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }
`




const ProductDetail = ({ product }) => {//flifcart

    const fassured = 'https://i.postimg.cc/NFnYS9Zx/istockphoto-1367070716-612x612-removebg-preview-1.png';
    
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';



    const data = new Date(new Date().getTime()+(5*24*60*60*1000));



    return (
        <>
            <Typography>{ product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize:14}}>
                 8 Rtings & 1 Reviews
                  <Box component="span"><img src={fassured} style={{width: 32, marginLeft:20}} /></Box>
            </Typography>
            <Typography>
                    <Box component="span" style={{ fontSize: 28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component= "span" style={{ color: '#388E3C'}}>{product.price.discount}</Box>
            </Typography>

            <Typography>Best offers </Typography>
            <SmallText>
                <Typography><StyledBadge />Get extra 200% off upto ₹50 on 1 item(s) T&C</Typography>
                <Typography><StyledBadge />Get extra 13% off (price inclusive of discount) T&C</Typography>
                <Typography><StyledBadge />Sign up for Flipkart Pay Later and get Flifcart Gift Card worth ₹100*know more </Typography>
                <Typography><StyledBadge />Buy 2 items save 5%; buy 3 or more save 10% T&c</Typography>
                <Typography><StyledBadge />5% Cashback on Flipkart Axis Bank Card</Typography>
                <Typography><StyledBadge />No Cost EMI on Bajaj Finserv EMI card on cart value above ₹2999 T&C</Typography>
            </SmallText>

            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787'}}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by{data.toDateString()} | ₹40</TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell style={{ color: '#878787'}}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell style={{ color: '#878787'}}>Seller</TableCell>
                        <TableCell>
                            <Box component="span" style={{ color: '#2874f0'}}>SuperComNet</Box>
                            <Typography>14 Days Return Policy </Typography>
                            <Typography> GST invoice available </Typography>
                        </TableCell>
                    </ColumnText>


                    <ColumnText>
                        <TableCell>
                        <img src={adURL} style={{ width: 300 }}/>

                        </TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell style={{ color: '#878787'}}>Description</TableCell>
                        <TableCell>{ product.description }</TableCell>
                    </ColumnText>


                </TableBody>
            </Table>

        </>
    )
}

export default ProductDetail;

//View more starting from ₹{product.price.cost}