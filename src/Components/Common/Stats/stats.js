import React, { useEffect, useState, useRef } from "react";
import Speech from "speak-tts";
import voiceIcon from "../../../assests/voice.png";
import backgroundImage from "../../../assests/topb1.jpg";
import MaskGroup from "../../../assests/MaskGroup.png";
import v1 from "../../../assests/v1.png";
import m1 from "../../../assests/m1.png";
import "./style.css";
import BackgroundSlider from "react-background-slider";
import Vector from "../../../assests/Vector@2x.png";
import image2 from "../../../assests/topImage.png";
import { FaVolumeUp } from "react-icons/fa";
import {
  Box,
  Center,
  Text,
  Heading,
  Image,
  Flex,
  Icon,
  SimpleGrid,
  useMediaQuery,
  HStack,
} from "@chakra-ui/react";
import styles from "./styles";
import { animate } from "framer-motion";
const Stats = () => {
  const slidePresentationTime = 3000; // 3s
  const [currentSlide, setCurrentSlide] = useState(0); // set currrent slide index
  let sliderInterval = useRef(); // interval ref

  useEffect(() => {
    sliderInterval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % backgrounds.length); // change current slide to next after 3s
    }, slidePresentationTime);

    return () => {
      clearInterval(sliderInterval);
    };
  });

  const backgrounds = [
    backgroundImage,
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bible-verses-about-halloween-1634594031.jpeg",
    "https://media.istockphoto.com/photos/bible-and-a-smart-phone-with-earphones-and-teacup-picture-id1188462739?k=20&m=1188462739&s=612x612&w=0&h=1hHmOVItS-_LwiVC87qmNMHW_n7d4VCxNAyd-fZLcVM=",
  ];
  const [isMobile] = useMediaQuery("(max-width: 768px)");
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

  const [playing, toggle] = useAudio(
    "https://www.free-stock-music.com/music/jay-someday-family-business.mp3"
  );
  const [say, setSay] = React.useState(
    "These 103 little dots in front of the Bible are a symbol of equal opportunities to everyone.More then one billion people cant read or dont see at all so they can recieve God's words at the time of Bible we need you to make happen"
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
  const renderImage = (index) => {
    return {
      0: m1,
      1: image2,
      2: m1,
    }[index];
  };

  return (
    <>
      <Box
        paddingX={[4, 8, 12, 16, 20]}
        width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
        style={{
          height: "75vh",
          // width: {[1, 1 / 2, 1 / 4]}
          backgroundPosition: "center",
          backgroundSize: "cover",

          backgroundRepeat: "no-repeat",
          backgroundImage: isMobile ? ` url(${backgroundImage})` : null,
        }}
        className={!isMobile ? "root" : "root"}
      >
        {backgrounds.map((image, index) => (
          <img
            id={index}
            key={index}
            className={index === currentSlide ? "image active" : "image"}
            src={image}
            style={{
              zIndex: `-${index + 1}`,
            }}
          />
        ))}

        <Heading
          textAlign={"center"}
          py={10}
          fontSize={{
            base: "12px",
            md: "24px",
            lg: "32px",
            xl: "56px",
            "2xl": "60px",
          }}
          //size={["sm", "md", "lg", "xl"]}
          // size={{
          //   sm: "16",
          //   md: "24",
          //   lg: "32",
          //   xl: "56",
          //   "2xl": "60",
          // }}
          // fontSize={{ sm: "15px", md: "40px", lg: "56px" }}
          // fontSize={isMobile ? 12 : 50}
          color={"white"}
          style={{
            fontFamily: "Roboto",
          }}
        >
          These 103 little dots in front of the Bible are a symbol of equal
          opportunities to everyone.
        </Heading>

        <HStack justify={"center"}>
          <Text
            fontWeight={"semibold"}
            fontSize={{
              base: "8px",
              md: "12px",
              lg: "14px",
              xl: "16px",
              "2xl": "18px",
            }}
            noOfLines={2}
            textAlign={"center"}
            style={{ color: "white", fontFamily: "Roboto" }}
          >
            More then one billion people cant read or dont see at all so they
            can recieve God's words at the time of Bible we need you to make
            happen.
          </Text>
          <Flex marginLeft={10}>
            <Icon
              as={FaVolumeUp}
              onMouseEnter={handleClick}
              // onClick={toggle}
              cursor={"pointer"}
              color={"white"}
              size={50}
              h={10}
              w={10}
            />
          </Flex>
          {/* <Image
            cursor={"pointer"}
            style={{
              width: "52.3px",
              height: "45.38px",
              marginLeft: 10,
            }}
            src={voiceIcon}
          /> */}
        </HStack>
        {/* </Flex> */}
      </Box>
      {/* <Box
        style={{
          height: "30vh",
          minWidth: "350px",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${MaskGroup})`,
        }}
      >
        <Flex justifyContent={"space-between"} width={"100%"} columns={3}>
          <Flex flexDirection={"column"}>
            <Flex
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              backgroundImage={`url(${Vector})`}
              marginTop={-70}
              height={isMobile ? "100px" : "130px"}
              width={isMobile ? "100px" : "130px"}
              paddingX={5}
              paddingY={5}
              marginLeft={20}
            >
              <Center
                style={{
                  height: "100",
                  width: "100",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundRepeat: "no-repeat",
                }}
                backgroundImage={`url(${m1})`}
                flexDirection={"column"}
                margin={2}
              >
                <Center flexDirection={"column"}>
                  <Text
                    textAlign={"center"}
                    fontWeight={"bold"}
                    fontSize={"18px"}
                    color={"white"}
                  >
                    2000 + millions
                  </Text>
                  <Image
                    cursor={"pointer"}
                    color={"black"}
                    style={{ height: "20px", marginLeft: 5 }}
                    height={"50px"}
                    src={voiceIcon}
                  />
                </Center>
              </Center>
            </Flex>
            <Center>
              <Center>
                <Text
                  fontSize={isMobile ? 12 : 15}
                  overflowY={isMobile ? "scroll" : "none"}
                  color={isMobile ? "black" : "white"}
                  height={"10vh"}
                  paddingLeft={20}
                >
                  There are{" "}
                  <span style={{ fontWeight: "bold" }}>
                    more than 350 <br />
                    million people in the world
                  </span>{" "}
                  with
                  <br /> some visual disability. They
                  <br /> need to audible Word of God.
                </Text>
              </Center>
            </Center>
          </Flex>
          <Flex flexDirection={"column"}>
            <Flex
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              backgroundImage={`url(${Vector})`}
              marginTop={-70}
              height={isMobile ? "100px" : "130px"}
              width={isMobile ? "100px" : "130px"}
              paddingX={5}
              paddingY={5}
            >
              <Center
                style={{
                  height: "100",
                  width: "100",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundRepeat: "no-repeat",
                }}
                backgroundImage={`url(${image2})`}
                flexDirection={"column"}
                margin={2}
              >
                <Center flexDirection={"column"}>
                  <Text
                    textAlign={"center"}
                    fontWeight={"bold"}
                    fontSize={"18px"}
                    color={"white"}
                  >
                    2000 + millions
                  </Text>
                  <Image
                    cursor={"pointer"}
                    color={"black"}
                    style={{ height: "20px", marginLeft: 5 }}
                    height={"50px"}
                    src={voiceIcon}
                  />
                </Center>
              </Center>
            </Flex>
            <Center>
              <Text
                fontSize={isMobile ? 12 : 15}
                overflowY={isMobile ? "scroll" : "none"}
                color={isMobile ? "black" : "white"}
                height={"10vh"}
              >
                There are{" "}
                <span style={{ fontWeight: "bold" }}>
                  more than 350 <br />
                  million people in the world
                </span>{" "}
                with
                <br /> some visual disability. They
                <br /> need to audible Word of God.
              </Text>
            </Center>
          </Flex>
          <Flex flexDirection={"column"}>
            <Flex
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              backgroundImage={`url(${Vector})`}
              marginTop={-70}
              height={isMobile ? "100px" : "130px"}
              width={isMobile ? "100px" : "130px"}
              paddingX={5}
              paddingY={5}
              marginRight={20}
            >
              <Center
                style={{
                  height: "100",
                  width: "100",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundRepeat: "no-repeat",
                }}
                backgroundImage={`url(${m1})`}
                flexDirection={"column"}
                margin={2}
              >
                <Center flexDirection={"column"}>
                  <Text
                    textAlign={"center"}
                    fontWeight={"bold"}
                    fontSize={"18px"}
                    color={"white"}
                  >
                    2000 + Languages
                  </Text>
                  <Image
                    cursor={"pointer"}
                    color={"black"}
                    style={{ height: "20px", marginLeft: 5 }}
                    height={"50px"}
                    src={voiceIcon}
                  />
                </Center>
              </Center>
            </Flex>
            <Center>
              <Text
                fontSize={isMobile ? 10 : 15}
                height={"10vh"}
                alignContent={"center"}
                overflowY={"scroll"}
                color={isMobile ? "black" : "white"}
              >
                So that no one misses the <br /> message of the Gospel we
                <br /> provide the
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  Bible in more than
                  <br /> 2,000 languages.
                </span>
              </Text>
            </Center>
          </Flex>
        </Flex>
      </Box> */}
    </>
  );
};

export default Stats;
