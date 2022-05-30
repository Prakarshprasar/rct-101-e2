import { Button, FormLabel, Input, Modal, ModalBody,  Radio, RadioGroup, Select, useDisclosure } from "@chakra-ui/react";
import React from "react";
import style from "./addproduct.module.css"

const AddProduct = () => {
  // const [form, setform] = useState({

  // })
  // const handleOnChange=(e)=>{

  // }
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()
  const finalRef = React.useRef()

  return (
    < >
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>Add New Product</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        
      >
        <ModalBody pb={6}>
        <FormLabel>Enter Title</FormLabel>
          <Input data-cy="add-product-title" ref={initialRef} placeholder='Enter Title' />
          <FormLabel>Category</FormLabel>
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt" value={"Shirt"}>Shirt</option>
            <option data-cy="add-product-category-pant" value={"Pant"}>Pant</option>
            <option data-cy="add-product-category-jeans" value={"Jeans"}>Jeans</option>
          </Select>
          <FormLabel>Gender</FormLabel>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male" value={"Male"}>Male</Radio>
            <Radio data-cy="add-product-gender-female" value={"Female"}>Female</Radio>
            <Radio data-cy="add-product-gender-unisex" value={"Unisex"}>UniSex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" placeholder="RS.  Price" />
          <Button data-cy="add-product-submit-button" onClick={onClose}>Save</Button>
        </ModalBody>
      </Modal>
    </>
  );



  // const { isOpen, onOpen, onClose } = useDisclosure()

  // const initialRef = React.useRef()
  // const finalRef = React.useRef()

  // return (
  //   <>
  //     <Button onClick={onOpen}>Add New Product</Button>
      

  //     <Modal
  //       initialFocusRef={initialRef}
  //       finalFocusRef={finalRef}
  //       isOpen={isOpen}
  //       onClose={onClose}
  //     >
  //       <ModalOverlay />
  //       <ModalContent>
  //         <ModalHeader>Add New Product</ModalHeader>
  //         <ModalCloseButton />
  //         <ModalBody pb={6}>
  //           <FormControl>
  //             <FormLabel>Title</FormLabel>
  //             <Input ref={initialRef} placeholder='First name' />
  //           </FormControl>

  //           <FormControl mt={4}>
  //             <FormLabel>Category</FormLabel>
  //             <select>
  //               <option value="">Category</option>
  //               <option value="">Shirt</option>
  //               <option value="">Pant</option>
  //               <option value="">Jeans</option>
  //             </select>
  //           </FormControl>
  //         </ModalBody>

  //         <ModalFooter>
  //           <Button colorScheme='blue' mr={3} onClick={updatedata}>
  //             Save
  //           </Button>
  //           <Button onClick={onClose}>Cancel</Button>
  //         </ModalFooter>
  //       </ModalContent>
  //     </Modal>
  //   </>
  // )
};

export default AddProduct;
