import React, { useEffect } from "react";
import MaskGroup from "../../assests/MaskGroup.png";
import v12 from "../../assests/yellow-silver.png";
import v18 from "../../assests/v18.png";
import Vector from "../../assests/Vector@2x.png";
import Polygon from "../../assests/Polygon.png";
import m1 from "../../assests/m1.png";
import bgImage from "../../assests/p.png";
import topImage from "../../assests/smallItem.png";
import t1 from "../../assests/t1.png";
import t2 from "../../assests/t2.png";
import t3 from "../../assests/t3.png";
import listen from "../../assests/t2Image.png";
import Speech from "speak-tts";
import bg from "../../assests/bg.png";
import { FaVolumeUp } from "react-icons/fa";
import Iframe from "react-iframe";

import {
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Center,
  Image,
  useMediaQuery,
  HStack,
  Box,
} from "@chakra-ui/react";
import style from "./style";
import { client } from "../../client";
const TalkingAboutBible = () => {
  const [show, setShow] = React.useState(false);
  const [mobileShow, setMobileShow] = React.useState(false);

  const [articles, setArticles] = React.useState([]);
  const article_url = "";

  useEffect(() => {
    client
      .getEntries()
      .then((respose) => {
        console.log("respose", respose.items[0].fields);
        setArticles(respose.items[0].fields);
      })
      .catch((error) => console.log("error", error));
  });

  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [say, setSay] = React.useState(
    "The purpose of this free space is for people of all religions to listen to the Bible in their language, and by sharing or donating it, they collaborate with millions of people who, even if they wanted to read it, cannot. We appreciate the prayers and support of the listeners. On this site you will find information about how to contribute to our mission and help send Talking Bibles to the illiterate and disabled around the world! Mark S. Hoekstra, President"
  );
  const speech = new Speech();
  speech
    .init({
      lang: "en-us",
    })
    .then((data) => {
      // The "data" object contains the list of available voices and the voice synthesis params
      console.log("Speech is ready, voices are available", data);
    })
    .catch((e) => {
      console.error("An error occured while initializing : ", e);
    });

  const handleClick = () => {
    speech
      .speak({
        text: say,
      })
      .then(() => {
        console.log("Success !");
      })
      .catch((e) => {
        console.error("An error occurred :", e);
      });
  };
  return (
    <Flex
      px={10}
      id={"blog"}
      style={{
        height: isMobile ? "40vh" : "",
        //  w: "100%",
        // overflowY:isMobile?'scroll':'none',
        // minWidth: window.innerWidth,
        flexDirection: "column",
        backgroundColor: "rgb(222,216,225)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // backgroundImage: `url(${bg})`,
      }}
      width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
    >
      <Center>
        <Image w={!isMobile ?'130px':''} marginTop={isMobile ? -45 : -75} src={isMobile ? listen : v12} />
      </Center>
      {!isMobile ? (
        <Flex py={24}>
          <Flex flexDirection={"column"} flex={0.3}>
            <Flex
              style={{
                marginTop: isMobile ? 3 : 10,
                marginBottom: isMobile ? 3 : 10,
              }}
            >
              <FaVolumeUp
                cursor={"pointer"}
                color={"white"}
                size={isMobile ? 25 : 40}
                onMouseEnter={() => handleClick("700 + languages")}
              />
            </Flex>
            <Heading
              style={{
                fontStyle: "normal",
              }}
              fontSize={"32px"}
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
              }}
            >
              WHY A<br /> TALKING
              <br /> BIBLE?
            </Heading>
            <Text
              style={{
                fontFamily: "Roboto",
                // fontWeight:'bold'
              }}
              fontSize={isMobile ? "10px" : "24px"}
              marginTop={10}
            >
              By our estimation, there are <br />
              over 1 billion people in the
              <br /> world who cannot read the <br />
              Bible in their heart language.
              <br />
              These are the men, women <br /> and children who need
              <br /> the spoken Word.
            </Text>
          </Flex>
          <Flex
            flex={0.7}
            onClick={() => setShow(true)}
            style={{
              backgroundColor: "red",
              height: "500px",
              boxShadow: "dark-lg",
              backgroundPosition: "center",
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              justifyContent: "flex-end",
            }}
            boxShadow={"dark-lg"}
          >
            {show ? (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/vGRnWCaSktg"
                allowfullscreen
              ></iframe>
            ) : null}
            {/* <Flex flex={1}>
            <Flex
              flex={0.7}
              backgroundColor={'green'}
              flexDirection={"column"}
            >
              <Flex
                marginLeft={20}
                marginTop={5}
                justifyContent={"space-between"}
                flex={1}
                height={"154px"}
              >
                <Box height={"154px"} ml={-5} width={"0px"}></Box>

                <Box
                  style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  backgroundImage={`url(${t1})`}
                  height={"154px"}
                  width={"154px"}
                ></Box>
                <Box
                  style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  backgroundImage={`url(${t2})`}
                  height={"154px"}
                  width={"154px"}
                ></Box>
                <Box
                  style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  backgroundImage={`url(${t3})`}
                  height={"154px"}
                  width={"154px"}
                ></Box>
              </Flex>

              <Flex marginTop={5} flex={1} height={"154px"}>
                <Box
                  style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  backgroundImage={`url(${t1})`}
                  height={"154px"}
                  width={"154px"}
                ></Box>
                <Box width={"20px"}></Box>
                <Box
                  ml={30}
                  style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  backgroundImage={`url(${t2})`}
                  height={"154px"}
                  width={"154px"}
                ></Box>
                <Box
                  ml={30}
                  style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  backgroundImage={`url(${Vector})`}
                  height={"154px"}
                  width={"154px"}
                >
                  <Center
                    alignItems={"center"}
                    justifyContent={"center"}
                    height={"154px"}
                    width={"154px"}
                  >
                    <Image
                      alignSelf={"center"}
                      height={"40px"}
                      width={"40px"}
                      src={Polygon}
                    />
                  </Center>
                </Box>
              </Flex>

              <Flex
                marginLeft={20}
                marginTop={5}
                flex={1}
                justifyContent={"space-between"}
                height={"120px"}
              >
                <Box height={"120px"} ml={-35} width={"0px"}></Box>
                <Box
                  style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  backgroundImage={`url(${t1})`}
                  height={"120px"}
                  width={"120px"}
                >
                  {" "}
                </Box>
                <Box
                  style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  backgroundImage={`url(${t2})`}
                  height={"120px"}
                  width={"120px"}
                ></Box>

                <Box height={"120px"} width={"120px"}></Box>
              </Flex>
            </Flex>

            <Flex
              flex={0.3}
              justifyContent={"end"}
              py={10}
              pr={10}
              alignItems={"end"}
            >
              <Text
                style={{
                  color: isMobile ? "#2E2727" : "#888888",

                  fontSize: "40px",
                }}
              >
                WITH
                <br /> TALKING
                <br /> BIBLES
                <Heading fontSize={"48px"}>
                  LIVES
                  <br /> ARE
                  <br /> CHANGED
                </Heading>
              </Text>
            </Flex>
          </Flex> */}

            {/* </SimpleGrid> */}
            {/* <Flex
              flex={0.3}
              justifyContent={"end"}
              py={10}
              pr={10}
              alignItems={"end"}
            >
              <Text
                style={{
                  color: isMobile ? "#2E2727" : "#888888",

                  fontSize: "40px",
                }}
              >
                WITH
                <br /> TALKING
                <br /> BIBLES
                <Heading fontSize={"48px"}>
                  LIVES
                  <br /> ARE
                  <br /> CHANGED
                </Heading>
              </Text>
            </Flex> */}
          </Flex>
        </Flex>
      ) : (
        <SimpleGrid py={10} columns={2}>
          <Flex flexDirection={"column"}>
            <Heading
              style={{
                fontStyle: "normal",
              }}
              fontSize={isMobile ? "12px" : "32px"}
              fontWeight={"bold"}
            >
              WHY A<br /> TALKING
              <br /> BIBLE?
            </Heading>
            <Text
              overflowY={"scroll"}
              h={"60px"}
              w={"100%"}
              backgroundColor
              fontSize={isMobile ? "10px" : "24px"}
              marginTop={isMobile ? "" : 10}
            >
              By our estimation, there are <br />
              over 1 billion people in the
              <br /> world who cannot read the <br />
              Bible in their heart language.
              <br />
              These are the men, women <br /> and children who need
              <br /> the spoken Word.
            </Text>
          </Flex>
          <Flex
            style={{
              //  w: "100%",
              // overflowY:isMobile?'scroll':'none',
              // minWidth: window.innerWidth,
              flexDirection: "column",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${bgImage})`,
            }}
            height={"20vh"}
            w={"100%"}
            onClick={()=>setMobileShow(true)}

          >
            {mobileShow ?
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/vGRnWCaSktg"
              allowfullscreen
            ></iframe>
:null}
          </Flex>
          {/* <Image
            height={"20vh"}
            w={"100%"}
            objectFit={"contain"}
            src={bgImage}
          ></Image> */}
        </SimpleGrid>
      )}
    </Flex>
  );
};

export default TalkingAboutBible;
