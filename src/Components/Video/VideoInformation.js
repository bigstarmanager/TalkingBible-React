import React, { useState, useEffect } from "react";
import voiceIcon from "../../assests/voice.png";
import {
  Flex,
  Text,
  Spacer,
  Image,
  SimpleGrid,
  Heading,
  Center,
  useMediaQuery,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FaVolumeUp } from "react-icons/fa";
import videoBg from "../../assests/videoBg.png";
import video from "../../assests/video.png";
import videopng from "../../assests/seagreen-purple.png";
import layer8 from "../../assests/Layer8.png";
import smallImage from "../../assests/small.png";
import topImage from "../../assests/soil 1.png";
import Speech from "speak-tts";
import Iframe from "react-iframe";
const article_url = "https://player.vimeo.com/video/127875015?portrait=0";
const VideoInformation = () => {
  const [show, setShow] = React.useState(false);
  const [mobileShow, setMobileShow] = React.useState(false);

  const [say, setSay] = React.useState(
    "WATCH GLOBAL FRONTIER MISSIONS VIDEO This video shows where our missionaries and finances are being used in the Christian missions world among unreached pepole groups. The information comes from Gordon Conwell Seminary´s Center for the Study of Global Christianity and the Perspectives on the World Christian Movement course. Check out HERE for more information."
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

  const [playing, toggles] = useAudio(
    "https://www.free-stock-music.com/music/jay-someday-family-business.mp3"
  );
  return (
    <Flex
      paddingX={10}
      style={{ height: isMobile ? "80vh" : "100vh" }}
      width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
      // backgroundImage={`url(${videoBg})`}
      backgroundColor={"rgb(120,180,171)"}
      flexDirection={"column"}
    >
      <Center>
        <Image
        width={!isMobile? '130px':''}
          marginTop={isMobile ? -12 : -20}
          src={isMobile ? topImage : videopng}
        />
      </Center>
      {!isMobile ? (
        <Grid
          h="100vh"
          //templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={16}
          templateRows="1"
        >
          <GridItem rowSpan={1} colSpan={2}>
            <Flex flexDirection={"column"}>
              <Flex mt={[10, 8, 10, 30]}>
                <FaVolumeUp
                  onMouseEnter={() => handleClick()}
                  cursor={"pointer"}
                  color={"white"}
                  size={50}
                />
              </Flex>

              <Heading
                color={"white"}
                mt={[10, 8, 7, 10]}
                fontSize={{ base: "24px", md: "38px", lg: "44px" }}
                fontWeight={"bold"}
              >
                WATCH GLOBAL
              </Heading>

              <Heading
                fontSize={{ base: "12px", md: "38px", lg: "44px" }}
                fontWeight={"bold"}
                color={"white"}
              >
                {" "}
                FRONTIER
              </Heading>
              <Heading
                fontSize={{ base: "12px", md: "38px", lg: "44px" }}
                fontWeight={"bold"}
                color={"white"}
              >
                MISSIONS VIDEO
              </Heading>

              <Text
                mt={10}
                fontSize={{ sm: "12px", base: "10px", md: "15px", lg: "20px" }}
                color={"white"}
                fontWeight={["normal", "semibold", "semibold"]}
                w={["", "", "400px"]}
                style={{
                  fontFamily: "Roboto",
                }}
              >
                This video shows where our missionaries and finances are being
                used in the Christian missions world among unreached pepole
                groups. The information comes from Gordon Conwell Seminary´s
                Center for the Study of Global Christianity and the Perspectives
                on the World Christian Movement course.{" "}
                <span style={{ fontWeight: "bolder" }}>
                  {" "}
                  Check out HERE for more information.
                </span>
              </Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={3}>
            <Center h="90vh">
              <Flex
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                width={"100%"}
                height={"450px"}
                onClick={()=>setShow(true)}
                backgroundImage={`url(${isMobile ? layer8 : video})`}
              >
                {show ? (
                  <Iframe
                    url={article_url}
                    width="100%"
                    height="100%"
                    display="initial"
                    position="relative"
                    allowFullScreen
                  />
                ) : null}
              </Flex>
            </Center>
          </GridItem>
        </Grid>
      ) : (
        <Flex flexDirection={"column"} w={"100%"}>
          <Flex style={{ marginTop: 30 }}>
            <FaVolumeUp
              onClick={toggles}
              cursor={"pointer"}
              color={"white"}
              size={50}
            />
          </Flex>
          <Heading
            style={{
              color: "white",
              paddingTop: 5,
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            WATCH GLOBAL FRONTIER MISSIONS VIDEO
          </Heading>
          <SimpleGrid columns={2}>
            <Text
              fontSize={["9px", "13px", "24px"]}
              color={"white"}
              // overflowY={'scroll'}
              // height={"200px"}
              overflow={"none"}
              fontWeight={["normal", "normal", "bold"]}
            >
              This video shows where our missionaries and finances are being
              used in the Christian missions world among unreached pepole
              groups. The information comes from Gordon Conwell Seminary´s
              Center for the Study of Global Christianity and the Perspectives
              on the World Christian Movement course.
              <span>Check out HERE for more </span>
              information.
            </Text>
            <Flex
              height={"15vh"}
              w={"180px"}
              cursor={'pointer'}
              onClick={()=>setMobileShow(true)}
              backgroundColor={'red'}
              style={{
                flexDirection: "column",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              objectFit={"contain"}
              backgroundImage={`url(${smallImage})`}
            >
            { mobileShow ?  <Iframe
                url={article_url}
                width="100%"
                height="100%"
                display="initial"
                position="relative"
                allowFullScreen
              />
            :null}
            </Flex>
            {/* <Image
              objectFit={"contain"}
              mt={6}
              ml={5}
              height={"15vh"}
              w={"300px"}
              src={smallImage}
            /> */}
          </SimpleGrid>
        </Flex>
      )}
      {/* <SimpleGrid columns={2} width={"100%"}>
        <Flex flexDirection={"column"}>
          <Image
            cursor={"pointer"}
            style={{ marginTop: 30 }}
            height={"50px"}
            width={"50px"}
            src={voiceIcon}
          />
          <Heading color={"white"}>
            WATCH GLOBAL FRONTIER MISSIONS VIDEO
          </Heading>
          <Text
            w={!isMobile ? "50%" : ""}
            fontWeight={!isMobile ? "500" : ""}
            fontSize={isMobile ? "9px" : "20px"}
            color={"white"}
            h={isMobile ? "15vh" : "20vh"}
          >
            This video shows where our missionaries and finances are being used
            in the Christian missions world among unreached pepole groups. The
            information comes from Gordon Conwell Seminary´s Center for the
            Study of Global Christianity and the Perspectives on the World
            Christian Movement course. Check out HERE for more information.
          </Text>
        </Flex>
        <Center mt={20}>
          <Flex
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            width={isMobile ? "80%" : "100%"}
            height={"400px"}
            backgroundImage={`url(${isMobile ? layer8 : video})`}
          ></Flex>
        </Center>
      </SimpleGrid> */}
    </Flex>
  );
};

export default VideoInformation;
