import { Box, Center, SimpleGrid, Spacer } from "@chakra-ui/layout";
import { Flex, Text, Image, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import topImage from "../../assests/g4.png";
import bibles from "../../assests/Layer_0_1_.png";
import { footerImage } from "../../Constants/data";
import rectangle from "../../assests/Rectangle.png";

const Footer = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      style={{
        // height:isMobile?'40vh': "35vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor:'#0E89AB',
        // backgroundImage: `url(${rectangle})`,
      }}
      width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
      height={['auto','50vh','35vh']}
    >
      <Flex style={{ padding: !isMobile ? 15 : "" }}>
        <Flex alignItems={"flex-end"} width={"22%"} height={"35vh"}>
          <Flex
            alignSelf={"flex-end"}
            padding={10}
            height={"100%"}
            flexDirection={"column"}
          >
            <Text
              style={{ fontWeight: "400", fontSize: isMobile ? "9px" : "" }}
              fontSize={{ base: '12px', md: '12px', lg: '14px', }}
              // h={"80px"}
              w={"100%"}
              // overflowY={"scroll"}
              color={"white"}
              marginTop={12}
              style={{
                fontFamily: 'Roboto',
                // fontWeight:'bold'
    
              }}
            >
              Talking Bibles International 419
              <br /> East Grand Avenue <br />
              Escondido, CA 92025 USA
            </Text>
            <Flex width={"100%"}>
              {footerImage.map((item, index) => {
                return (
                  <Image
                    h={isMobile ? "19.59px" : ""}
                    w={isMobile ? "19.59px" : "60px"}
                    key={index}
                    src={item}
                    style={{imageRendering:'smooth'}}
                    objectFit={'contain'}
                  ></Image>
                );
              })}
            </Flex>
          </Flex>
        </Flex>
        <Flex justifyContent={"center"} height={"100%"} w={"56%"}>
          <Center flexDirection={"column"}>
            <Flex flexDirection={"column"}>
              <Image
                marginTop={isMobile?-41: -50}
                height={"80px"}
                width={"80px"}
                alignSelf={"center"}
                src={topImage}
                position={"relative"}
              />
              <Text
                textAlign={"center"}
                fontSize={isMobile ? "12px" : ""}
                color={"white"}
                style={{
                  fontFamily: 'Roboto',
                  fontWeight:'600',
      
                }}
              >
                Listen Online Get a <br />
                Talking Bible
                <br /> Contact Us Careers
                <br /> Privacy Policy
              </Text>
            </Flex>
            <Flex
              marginTop={isMobile ? 6 : 0}
              // overflowY={"scroll"}
              alignItems={"flex-end"}
              h={"10vh"}
            >
              <Center>
                {" "}
                <Text
                  color={"white"}
                  w={"100%"}
                  marginTop={isMobile ? 25 : "150px"}
                  // overflowY={"scroll"}
                  fontSize={!isMobile ? "14px" : "8px"}
                  width={isMobile ? "80px" : ""}
                  style={{
                    fontFamily: 'Roboto',
        
                  }}
                >
                  © 2001–2021 Talking Bibles International. Talking Bible® is a
                  registered trademark of Talking Books International, Inc. dba
                  TB2U.
                </Text>
              </Center>
            </Flex>
          </Center>
        </Flex>
        <Flex
          paddingX={10}
          paddingY={5}
          justifyContent={"flex-end"}
          height={"30vh"}
          w={"22%"}
        >
          <Image
            alignSelf={'flex-end'}
            width={isMobile ? "53.22px" : ""}
            height={isMobile ? "80.09px" : "100px"}
            src={bibles}
            marginTop={5}
            objectFit={'contain'}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
