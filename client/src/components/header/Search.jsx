import { useState, useEffect } from 'react'; //used to store the values and useEffect used to call api directely 

import {InputBase, Box,List, ListItem, styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


//remove the products from redux 
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';

//with this import when user search sepecific product and click on that he will redirected to that product
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
background-color: #fff;
width: 38%;
border-radius: 6px;
margin-left: 10px;
border: 1px solid #ccc;
display: flex;

`;

const InputSearchbase = styled(InputBase)`
padding-left: 20px;
width: 100%;
font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
color: Blue;
padding: 5px;
 display: flex;
`;

const ListWrapper = styled(List)`
  position: absolute;
  background: #FFFFFF;
  color: #000;
  margin-top: 36px;
`;


const Search = () => {

  //create state
  const [text, setText] = useState('');
  
  const { products } = useSelector(state => state.getProducts);
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(getProducts())
    
  }, [dispatch])

  const getText = (text) => {
    setText(text);
  }



    return (
        <SearchContainer>
              <InputSearchbase
                placeholder='Search for products, brands and more'
                onChange={(e) => getText(e.target.value)}
                //value(text) this will disappear the value that we have entered in searchbox
                value={text}
              />
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              {
                text && 
                <ListWrapper>
                  {
                    products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                      <ListItem>
                        <Link
                          to={`/product/${product.id}`}
                          //when we search and click on that product autometicallly dropdown should disappear usig onClick
                          onClick={() => setText('')}
                          //remove default textunderline
                          style={{ textDecoration: 'none', color: 'inherit'}} 
    
                        >
                           {product.title.longTitle}
                        </Link>
                      </ListItem>
                    ))
                  }
                </ListWrapper>

              }

        </SearchContainer>
     
    );
}

export default Search;
//to display products whenever  user serch willl create list 