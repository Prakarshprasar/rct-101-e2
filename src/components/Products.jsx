import React,{useState} from "react";
import AddProduct from "./AddProduct.jsx"
import Product from "./Product.jsx"
import Pagination from "./Pagination.jsx"
import { Flex, Grid } from "@chakra-ui/react";
import style from "./products.module.css"

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  const [page, setpage] = useState(1);
  const [limit, setlimit] = useState(3)
  const [product, setproduct] = useState([])
  let updateprod=(product)=>{
    setproduct(product)
  }
  let getData=(limit,page)=>{
    setlimit(limit)
    setpage(page)
  }

  return (
    <Flex>
    <div className={style.main}>
        <AddProduct/>
      <Grid>
        <Product limit={limit} page={page} product={product} updateprod={updateprod}/>
        </Grid>
      <Pagination getData={getData} page={page} limit={limit} product={product}/>
    </div>
      
    </Flex>
  );
};

export default Products;
