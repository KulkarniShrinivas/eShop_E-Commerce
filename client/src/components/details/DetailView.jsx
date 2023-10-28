
//so user clicks on particular product so he need to be redirect to diffrent page by using router
//to do this we need to isntall package npm i react-router-dom

//and add import in App.jsx as import { BrowserRouter } from 'react-router-dom if you want enable rounting in browser router and wrap  the same


//call with help of redux using useeffect

import { useEffect } from "react";

//one more hook is useDispatch to dispatch things
import { useDispatch, useSelector } from "react-redux";
//useSelecto with we can remove values from redux store


//to remove anything from url we use 
 import { useParams } from "react-router-dom";

 import { getProductDetails } from "../../redux/actions/productActions";

 import { Box, Typography, Grid, styled } from "@mui/material";

 import ActionItem from "./ActionItem";
 import ProductDetail from "./ProductDetail";

//css

const Components = styled(Box)`
    background: #F2F2F2;
    margin-top: 55px;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0,
    }
}));


const RightContainer = styled(Grid)`
    margin-top: 50px;
    padding-left: 25px;
    & > p {
        margin-top: 10px;
    }
`;


const DetailView = () => {

    const dispatch = useDispatch();

    //use parma is object so we need to take id
    const {id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);



    useEffect( () => {
        if(product && id !== product.id)
                dispatch(getProductDetails(id))
        //we need make function call as getProductDetails in Redux so I will write this in action 

    }, [dispatch, id, product, loading])

    console.log(product);

    return (
        <Components>
            {
                product && Object.keys(product).length && 
                    <Container container>
                       <Grid item lg={4} md={4} sm={8} xs={12}>
                            <ActionItem product={product}  />

                        </Grid>

                        <RightContainer item lg={8} md={8} sm={8} xs={12}>
                            
                                <ProductDetail product={product} />
                        </ RightContainer>
                    </Container>
            }
        </Components>
    );
}

//&nbsp => space

export default DetailView;


