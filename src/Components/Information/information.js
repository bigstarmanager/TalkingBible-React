import {
  SimpleGrid,
  Flex,
  Text,
  Image,
  Center,
  Button,
  Box,
  Input,
  Textarea,
  Heading,
  useMediaQuery,
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Speech from "speak-tts";
import bible2 from "../../assests/bb33.png";
import screenshot2 from "../../assests/sceenshot.png";

import cart from "../../assests/cart.png";
import B2 from "../../assests/seagreen-blue (2).png";
import B1 from "../../assests/purple-yellow (2).png";
import B4 from "../../assests/blue-navy (1).png";
import { storedata } from "../../Constants/data";
import voiceIcon from "../../assests/voice.png";
import bgimage from "../../assests/bgImage.png";
import m1 from "../../assests/mi1.png";
import m12 from "../../assests/m2.png";
import m13 from "../../assests/m3.png";
import newImag from "../../assests/newImag.png";
import { FaVolumeUp } from "react-icons/fa";
const Information = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { open, setOpen } = React.useState();

  const cancelRef = React.useRef();
  const renderImage = (index) => {
    return {
      0: !isMobile ? B4 : m1,
      1: !isMobile ? B2 : m12,
      2: !isMobile ? B1 : m13,
    }[index];
  };

  const renderEmialModelMenu = () => {
    return (
      <>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay backgroundColor={"transparent"} w={"100px"}>
            <AlertDialogContent
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none",
              }}
            >
              <div style={{ justifyContent: "center", alignItems: "center" }}>
                <div
                  style={{
                    borderRadius: 30,
                    backgroundColor: "#1988C9",
                    height: isMobile ? "200px" : "230px",
                    width: isMobile ? "300px" : "380px",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: !isMobile ? 50 : "",
                    boxShadow: "dark-lg",
                    padding: isMobile ? 20 : 40,
                  }}
                >
                  <Center flexDirection={"column"}>
                    <Text
                      style={{
                        fontSize: "20px",
                        fontWeight: "800",
                        color: "white",
                      }}
                    >
                      Enter Your Email - Join Now
                    </Text>
                    <Input
                      style={{
                        textAlign: "center",
                        marginTop: 6,
                        border: "none",
                        borderRadius: 5,
                        padding: 15,
                        width: "70%",
                        backgroundColor: "white",
                      }}
                      placeholder={" your email here"}
                    />
                    <Button
                      onClick={onClose}
                      style={{
                        border: "none",
                        marginTop: 10,
                        padding: 10,
                        backgroundColor: "#212423",
                        borderRadius: 5,
                        color: "white",
                        width: "40%",
                      }}
                    >
                      Join Now
                    </Button>
                  </Center>
                </div>
              </div>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    );
  };

  const renderInput = (_placeholder, textarea) => {
    return (
      <Flex>
        {!textarea ? (
          <Input
            w={"80%"}
            style={{
              padding: 12,
              height: "20px",
              border: "none",
              borderRadius: 5,
              marginTop: 10,
            }}
            placeholder={_placeholder}
          ></Input>
        ) : (
          <Textarea
            w={"80%"}
            style={{
              padding: 12,
              height: "100px",
              border: "none",
              borderRadius: 5,
              marginTop: 10,
            }}
            placeholder={_placeholder}
          />
        )}
      </Flex>
    );
  };

  const renderForm = () => {
    return (
      <>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay w={"100px"}>
            <AlertDialogContent
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <div style={{ justifyContent: "center", alignItems: "center" }}>
                <Box
                  style={{
                    borderRadius: 30,
                    backgroundColor: "transparent",
                    height: "200px",
                    width: "350px",
                    marginTop: !isMobile ? 50 : -50,
                    boxShadow: "dark-lg",
                  }}
                >
                  <Heading style={{ color: "white" }}>
                    DONATE AND HELP US!
                  </Heading>
                  {renderInput("Your Name")}
                  {renderInput("Email")}
                  {renderInput("Phone")}
                  {renderInput("Amount in USD")}
                  {renderInput("Your Comments", "textarea")}
                  <Center>
                    <Button
                      onClick={onClose}
                      style={{
                        border: "none",
                        marginTop: 9,
                        padding: 10,
                        backgroundColor: "#212423",
                        borderRadius: 5,
                        color: "white",
                        paddingX: 20,
                        width: "150px",
                        fontWeight: "700",
                        fontSize: "20px",
                      }}
                    >
                      Donate{" "}
                    </Button>
                  </Center>
                </Box>
              </div>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    );
  };
  const [say, setSay] = React.useState(
    "The purpose of this free space is for people of all religions to listen to the Bible in their language, and by sharing or donating it, they collaborate with millions of people who, even if they wanted to read it, cannot. We appreciate the prayers and support of the listeners. On this site you will find information about how to contribute to our mission and help send Talking Bibles to the illiterate and disabled around the world! Mark S. Hoekstra, President  Mark S. Hoekstra, President"
  );

  const speech = new Speech();
  speech
    .init({
      lang: "en-US",
    })
    .then((data) => {
      // The "data" object contains the list of available voices and the voice synthesis params
      console.log("Speech is ready, voices are available", data);
    })
    .catch((e) => {
      console.error("An error occured while initializing : ", e);
    });

  const handleClick = (text) => {
    speech
      .speak({
        text: text ? text : say,
      })
      .then(() => {
        console.log("Success !");
      })
      .catch((e) => {
        console.error("An error occurred :", e);
      });
  };

  const useAudio = (url) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
      playing ? audio.play() : audio.pause();
    }, [playing]);

    useEffect(() => {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    }, []);

    return [playing, toggle];
  };

  const [playing, toggles] = useAudio(
    "https://www.free-stock-music.com/music/jay-someday-family-business.mp3"
  );

  return (
    <>
      {renderEmialModelMenu()}

      <SimpleGrid
        id={"newsLetter"}
        width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
        minChildWidth={isMobile ? "100%" : ""}
        columns={[1, 2, 3, 3, 3]}
        boxShadow={"dark-lg"}
      >
        {storedata.map((item, index) => {
          return (
            <Flex
              boxShadow={"dark-lg"}
              backgroundColor={item.color}
              height={["62vh", "62vh", "75vh", "75vh"]}
              flexDirection={"column"}
              style={{
                // width: isMobile ? "300" : "100%",
                cursor: "pointer",
                // overflowY: "scroll",

                backgroundSize: "cover",
                // backgroundSize:'70vh ,100%',
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                // backgroundImage: `url(${item.bg})`,
              }}
            >
              <Center>
                <Image
                  marginTop={isMobile ? "-53px" : "-75px"}
                  // width={ isMobile ?'': "160px"}
                  // height={isMobile ?'': "160px"}
                  width={!isMobile ?'130px':''}
                  src={renderImage(index)}
                />
              </Center>

              <Box paddingX={10}>
                <Flex marginBottom={[5, 5, 3, 3]} marginTop={isMobile ? 5 : 10}>
                  <FaVolumeUp
                    onMouseEnter={() => handleClick(item.text)}
                    cursor={"pointer"}
                    color={"white"}
                    size={40}
                  />
                </Flex>

                <Text
                  fontWeight={"bold"}
                  fontSize={["32px", "25px", "20px", "32px"]}
                  color={"white"}
                  style={{
                    fontFamily: "Roboto",
                  }}
                >
                  {item.first}
                  {index === 0 ? (
                    <span style={{ fontWeight: "normal" }}>AND</span>
                  ) : null}
                </Text>
                <Text
                  fontSize={["32px", "25px", "18px", "32px"]}
                  color={"white"}
                  style={{
                    fontFamily: "Roboto",
                  }}
                  fontWeight={index === 2 ? "bold" : ""}
                >
                  {item.sec}
                </Text>
                <Text
                  fontSize={["32px", "25px", "18px", "32px"]}
                  color={"white"}
                  fontWeight={"500"}
                  style={{
                    fontFamily: "Roboto",
                  }}
                >
                  {item.third}
                </Text>
                <Text
                  fontSize={["32px", "25px", "18px", "32px"]}
                  color={"white"}
                  style={{
                    fontFamily: "Roboto",
                  }}
                >
                  {item.fourth}
                </Text>

                <Flex
                  flexDirection="row"
                  color={"white"}
                  alignItems={"center"}
                  //opacity={0.6}
                  borderRadius={4}
                  marginTop={10}
                  paddingX={1}
                  paddingY={2}
                  bg={index === 2 ? "rgb(103,92,66)" : ""}
                >
                  <Text
                    paddingLeft={10}
                    marginRight={5}
                    fontWeight={"medium"}
                    fontSize={[index === 2 ? "12px" : "12px",'15px','20px']}
                  >
                    {" "}
                    {item.help}{" "}
                  </Text>
                  <Flex
                    style={{
                      height: "60px",
                      width: "60px",
                      // margin: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      cursor: "pointer",
                      backgroundRepeat: "no-repeat",
                      backgroundImage: `url(${bgimage})`,
                    }}
                  >
                    <Center  height="60px" width="60px">
                      <Text
                        onClick={onOpen}
                        cursor={"pointer"}
                        fontWeight={"bold"}
                        fontSize={18}
                        // paddingX={4}
                        paddingRight={3}
                        paddingBottom={3}
                        color={"white"}
                      >
                        Go!
                      </Text>
                    </Center>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          );
        })}
      </SimpleGrid>
      {/* <Flex  height={"100vh"}>
        <Flex flexDirection={'column'}  padding={10} backgroundColor={"white"} w={"25%"}>
          <Text fontWeight={"bolder"} fontSize={30}>
            English (KJV) Talking Bible® Battery Talking Bible
          </Text>
          <Text my={5}>
            The English (KJV) Talking Bible® is designed for rugged use by
            non-readers around the world. It has no screen or display, so it is
            perfect for computer novices and the visually impaired.
          </Text>
          <Heading>$ 49.99</Heading>
          <Flex borderRadius={3} marginTop={5} padding={3}  opacity={'0.4'} backgroundColor={'black'} w={'80%'}>

          </Flex>
          <Flex mt={5}>
            <Image src={cart} objectFit={'cover'} >
            </Image>
            <Text paddingLeft={5} alignSelf={'center'}>ADD TO CART</Text>
          </Flex>
        </Flex>
        <Flex  style={{
                    
                      // margin: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      cursor: "pointer",
                      backgroundColor:"rgb(221,214,214)",
                      backgroundRepeat: "no-repeat"
                    }} height={'100%'}  w={'75%'}>
                      <Image objectFit={'contain'} backgroundColor={'rgb(221,214,214)'} h={'80%'} src={bible2} >
                      </Image>
                    </Flex>
      </Flex>
      <Flex style={{
        alignItems: "center",
        backgroundPosition: "center",
        backgroundSize: "cover",
        cursor: "pointer",
        backgroundRepeat: "no-repeat",
        backgroundImage:`url(${screenshot2})`
      }} h={'30vh'}>
       
      </Flex> */}
    </>
  );
};

export default Information;
