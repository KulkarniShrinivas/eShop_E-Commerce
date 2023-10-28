
//from here i will start with responsive using Grid components its MUI component its responsive layouts
//for grid we need to give parent component we need to pass container and for every child element we need to add item

import { imageURL } from '../../constants/data';
import { Grid, styled } from '@mui/material';

// Css
const Wrapper = styled(Grid)`
        margin-top: 10px;
        justify-content: space-between;
`;
//using them we can make responsive for
const Image = styled('img')(({ theme }) => ({ 
    display: 'flex',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 120
    }
}));

const MidSection = () => {

    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    
    return (
        <>
        
            <Wrapper container>
                    { /*<Box style= {{ display: 'flex'}}> */}
                {imageURL.map((img) => (
                    <Grid item key={img} lg={4} md={4} sm={12} xs={12}>
                        <img src={img} alt="image" style={{ width: '100%' }} />
                    </Grid>
                ))}
                {/* </Box> */}
            </Wrapper>
            <Image src={url} alt="covid" />
        </>
    );
};

export default MidSection;















// import { imageURL } from '../../constants/data';
// import { Box, Grid, styled } from '@mui/material';


// //from here i will start with responsive using Grid components its MUI component its responsive layouts
// //for grid we need to give parent component we need to pass container and for every child element we need to add item


// //Css

// const Wrapper = styled(Grid)`
//     margin-top: 10px;
// `

// const MidSection = () => {
//     return (
//         <Wrapper lg={12} sm={12} md={12} xs={12} container >
//         { /*<Box style= {{ display: 'flex'}}> */}
//             {
//                 imageURL.map(img => (
//                     <Grid item lg={4} md={4} sm={12} xs={12} >
//                         <img key={img} src={img} alt="image" style={{width: '100%'}}/>
//                     </Grid>
//                 ))
//             }
//         {/* </Box> */}
//         </Wrapper>
//     );
// }

// export default MidSection;
