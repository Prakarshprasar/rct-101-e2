import { Button, ButtonGroup, Select } from "@chakra-ui/react";
import React from "react";

const Pagination = ({getData,page,limit,product}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;

  return (
    <ButtonGroup >
      <Button data-cy="pagination-first-button" disabled={page<=1} onClick={()=>{getData(limit,1)}}>First</Button>
      <Button data-cy="pagination-previous-button" disabled={page<=1} onClick={()=>{getData(limit,page-1)}}>Previous</Button>
      <Select data-cy="pagination-limit-select" onChange={(e)=>{getData(Number(e.target.value),page)}}>
        <option data-cy="pagination-limit-3" value={3}>3</option>
        <option data-cy="pagination-limit-6" value={6}>6</option>
        <option data-cy="pagination-limit-9" value={9}>9</option>
      </Select>
      <Button data-cy="pagination-next-button" disabled={page>=product.length} onClick={()=>{getData(limit,page+1)}}>Next</Button>
      <Button data-cy="pagination-last-button" disabled={page>=product.length} onClick={()=>{getData(limit,product.length)}} >Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
