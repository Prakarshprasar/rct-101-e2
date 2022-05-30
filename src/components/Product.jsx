import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Heading,
  Stack,
  Tag,
  TagLabel,
  Image,
  Text,
} from "@chakra-ui/react";
import style from "./productlist.module.css";

const Product = ({ limit, page, product, updateprod }) => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;

  useEffect(() => {
    const getData = async () => {
      let r = await axios.get(
        `http://localhost:8080/products?_page=${page}&_limit=${limit}`
      );
      updateprod(r.data);
      console.log(product);
    };
    getData();
  }, [page, limit]);

  return (
    <div className={style.grid}>
      {product.map((elem) => (
        <Stack
          data-cy="product"
          textAlign={"center"}
          padding={"20px"}
          key={elem.id}
          className={style.shadow}
        >
          <Image
            data-cy="product-image"
            src={elem.imageSrc}
            className={style.img}
          />
          <div className={style.x}>
            <Text data-cy="product-category">{elem.category}</Text>
            <Tag>
              <TagLabel data-cy="product-gender">{elem.gender}</TagLabel>
            </Tag>
          </div>

          <Heading data-cy="product-title">{elem.title}</Heading>
          <Box data-cy="product-price">Rs {elem.price}/Unit</Box>
        </Stack>
      ))}
    </div>
  );
};

export default Product;
