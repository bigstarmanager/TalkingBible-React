import React from "react";
import topbarImage from "../assests/topbarImage.png";
import { Heading, Center, Flex, Image, Input,Text,Button } from "@chakra-ui/react";
import storeImage from "../assests/storeImage.png";
import cartIcon from "../assests/cartIcon.png";

const Store = () => {
  const Header = () => {
    return (
      <div
        style={{
          padding: 10,
          paddingX: 10,
          bg: "white",
          width: "98%",
          align: "center",
          color: "gray.600",
          alignItems: "center",
          bg: "rgb(253,259,248)",
          backgroundSize: "cover",
          justify: "space-between",
          justifyContent: "center",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${topbarImage})`,
        }}
      >
        <Center>
          <Heading color={"white"}>Store</Heading>
        </Center>
      </div>
    );
  };
  return (
    <div>
      <Header />
      <Flex width={'100px'} marginTop={20} justifyContent={"center"} w={"100%"}>
        <Center>
          <Image width={'100px'} style={{ width: "700px", height: "630px" }} src={storeImage} />
        </Center>
      </Flex>
      <Flex marginTop={10} flexDirection={"column"} justifyContent={"center"}>
        <Center flexDirection={'row'}>
          <Flex flexDirection={'column'}>
            <Text fontSize={'20px'} w={'100px'}>Variant</Text>
            <Text fontSize={'20px'} w={'100px'}>quantity</Text>
          </Flex>
          <Flex flexDirection={'column'}>
          <Input style={{padding:10,width:'200px'}}></Input>
          <Input marginY={10}  style={{padding:10,width:'100px',backgroundColor:''}}></Input>
          <Button border={'none'} padding={10} color={'white'} borderRadius={'10px'}  bg={'#2D91CC'} width='150px'  style={{}} >Add to cart </Button>
          </Flex>
        </Center>
     
      </Flex>
    </div>
  );
};

export default Store;
