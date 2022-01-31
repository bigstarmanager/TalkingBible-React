import React, { useState, useEffect } from "react";
import oc from "../../assests/test.png";
import test2 from "../../assests/silver-green.png";
import { FaVolumeUp } from "react-icons/fa";
import ts from "../../assests/rc4.png";
import voiceIcon from "../../assests/voice.png";
import {
  Flex,
  Center,
  Image,
  Text,
  Heading,
  SimpleGrid,
  useMediaQuery,
} from "@chakra-ui/react";
import Speech from "speak-tts";
const Testinomials = () => {
  const [show, setShow] = useState(false);

  const [say, setSay] = React.useState(
    " TESTIMONIALS Bakuro Somaika from Ethiopia Another brick in the wall Lorem ipsum dolor sit amet,  consectetuer adipiscing elit, sed diam nonummy nibh   euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim."
  );
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
    <Flex flexDirection={"column"}>
      <SimpleGrid
        id={"Testionials"}
        boxShadow={"dark-lg"}
        style={{
          // width: isMobile ? "300" : "100%",
          cursor: "pointer",
          // overflowY: "scroll",
          minHeight: "100%",
          objectFit: "contain",
          backgroundSize: "cover",
          // backgroundSize:'70vh ,100%',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${ts})`,
        }}
        width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
        height={["100vh", "100vh", "100vh"]}
      >
        {/* <Center position={'fixed'} marginTop={isMobile ? -65 : -79}>
        <Image src={isMobile ? oc : test2} />
      // </Center> */}
        <Center>
          <Image
            marginTop={isMobile ? -30 : -6}
            alignSelf={"center"}
            pos="absolute"
            w={!isMobile? '130px':''}
            src={isMobile ? oc : test2}
          />
        </Center>
        <Flex
          paddingTop={[10, 0, 0]}
          position={"relative"}
          height={"100vh"}
          width={"100%"}
        >
          <Flex flex={2}></Flex>
          <Flex paddingRight={10} mt={5} flex={1} flexDirection="column">
            <Flex mt={4}>
              <FaVolumeUp
                onMouseEnter={handleClick}
                cursor={"pointer"}
                color={"white"}
                size={50}
              />
            </Flex>
            <Text
              fontSize={{ base: "15px", md: "30px", lg: "35px" }}
              color={"#000000"}
              mt={4}
              mb={4}
              style={{
                fontFamily: "Roboto",
              }}
            >
              TESTIMONIALS
            </Text>
            <Text
              fontSize={{ base: "15px", md: "30px", lg: "40px" }}
              mt={isMobile ? "" : -4}
              color={"black"}
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
              }}
            >
              Bakuro Somaika
            </Text>
            <Text
              fontSize={{ base: "15px", md: "30px", lg: "40px" }}
              color={"black"}
              py={"1px"}
              mt={isMobile ? "" : -4}
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
              }}
            >
              from Ethiopia
            </Text>
            <Text
              mt={isMobile ? "" : -4}
              fontSize={{ base: "15px", md: "30px", lg: "40px" }}
              color={"black"}
              fontWeight={"bold"}
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
              }}
            >
              Another brick
            </Text>
            <Text
              mt={isMobile ? "" : -4}
              fontSize={{ base: "15px", md: "30px", lg: "40px" }}
              color={"black"}
              fontWeight={"bold"}
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
              }}
            >
              in the wall
            </Text>
            <Text
              fontSize={{ base: "15px", md: "20px", lg: "20px" }}
              color={"black"}
              fontWeight={"medium"}
              style={{
                fontFamily: "Roboto",
              }}
            >
              Lorem ipsum dolor sit amet,
              <br /> consectetuer adipiscing elit, sed diam nonummy nibh
              <br /> euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat.
              <br /> Ut wisi enim.
            </Text>
            <Text
              mt={isMobile ? "" : -4}
              fontSize={{ base: "15px", md: "30px", lg: "40px" }}
              color={"black"}
              fontWeight={"bold"}
              onClick={() => setShow(!show)}
            >
              READ+
            </Text>
          </Flex>
        </Flex>
      </SimpleGrid>
      {show ? (
        <SimpleGrid spacing={10} padding={10} h={[ "200vh",'100vh','50vh']} columns={[1, 1, 3]}>
          {[...Array(3)].map((elementInArray, index) => (
            <Text lineHeight={8} fontSize={25} fontWeight={"bold"}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad{" "}
              {index !== 2 ? (
                <span>
                  {" "}
                  minim veniam, quis nostrud exerci tation ullamcorper suscipit
                  lobortis nisl ut aliquip ex
                </span>
              ) : null}
            </Text>
          ))}
        </SimpleGrid>
      ) : null}
    </Flex>
  );
};
export default Testinomials;
