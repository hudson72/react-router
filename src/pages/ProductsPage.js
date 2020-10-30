import React from 'react';
import {Link} from 'react-router-dom';
import Product from '../components/Product';
import '../styles/ProductsPage.css';

const ProductsPage = ({match}) => {
    return ( 
        <>
        <div className='productPage'>Product's Page</div>
        <Product id={match.params.id}/>
        <Link className='returnToProList' to='/products'>Return to Products List</Link>
        </>
     );
}
 
export default ProductsPage;