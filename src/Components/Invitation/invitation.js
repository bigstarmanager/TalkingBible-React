import React, { useEffect, useState } from "react";
import divImage from "../../assests/rc.png";
import indiaImage from "../../assests/india.png";
import { FaVolumeUp } from "react-icons/fa";

import voiceIcon from "../../assests/voice.png";
import pay from "../../assests/pay.png";
import {
  Flex,
  Text,
  Heading,
  Image,
  useMediaQuery,
  Center,
  Box,
} from "@chakra-ui/react";
import Speech from "speak-tts";
const Invitation = ({ image, country, icon, index, name }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
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
        text: text,
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

  const [playing, toggle] = useAudio(
    "https://www.free-stock-music.com/music/jay-someday-family-business.mp3"
  );

  return (
    <Box
      width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
      style={{
        height: isMobile ? "20vh" : "40vh",
        // w: "100%",

        // overflowY: "scroll",
        // overflowX: "scroll",
        //  minWidth: isMobile ? window.innerWidth : "340px",
        flexDirection: "column",
        backgroundColor: index ? "rgba(173, 142, 98, 0.7)" : "rgb(191,111,168)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${image})`,
      }}
    >
      <Center>
        <Image w={ !isMobile? name==='india'?'80px' :'130px':''} marginTop={isMobile ? (index ? -45 : -50) :name=== 'india' ?-42: -75} src={icon} />
      </Center>

      <Flex
        style={{
          flexDirection: "row",
          w: "100%",
          // overflowY: "scroll",
          height: "100%",
          padding: isMobile ? 20 : 10,
          justifyContent: "space-around",
        }}
      >
        <Flex justifyContent={isMobile ? "flex-start" : "center"} width={"20%"}>
          <Heading
            fontWeight={"bold"}
            fontSize={isMobile ? "12px" : "30px"}
            paddingTop={isMobile ? 1 : 3}
            color={"white"}
            style={{
              fontFamily: "Roboto",
              fontWeight: "bold",
            }}
          >
            Click <br />
            to <br />
            Join!
          </Heading>
        </Flex>
        <Flex justifyContent={"space-around"} w={"60%"}>
          <>
            <Flex
              justifyContent={"flex-end"}
              width={!isMobile ? "240px" : "110px"}
            >
              <Text
                style={{
                  fontSize: isMobile ? "12px" : "25px",
                  paddingLeft: 2,
                }}
                paddingTop={!isMobile ? 12: "10px"}
                fontSize={12}
                color={"white"}
              >
                Let's help
              </Text>
            </Flex>
            {/* <Image
              height={isMobile ? "50px" : "140px"}
              width={isMobile ? "100px" : ""}
              src={country}
              objectFit={"contain"}
            ></Image> */}
            <Text
              fontWeight={name != "india" ? "bold" : ""}
              color={"white"}
              fontSize={["40px", "40px", name === "india" ? "140px" : "110px"]}
              style={{
                fontFamily: name === "india" ? "Samarkan" : "Bradley",
              }}
            >
              {name}
            </Text>
            <Flex
              justifyContent={"center"}
              width={!isMobile ? "250px" : "100px"}
            >
              <Text
                width={"100%"}
                style={{
                  fontSize: isMobile ? "10px" : "15px",
                  // paddingLeft: 3,
                }}
                paddingTop={!isMobile ? 12 : "10px"}
                fontSize={[10, 12, 25]}
                color={"white"}
                style={{
                  fontFamily: "Roboto",
                }}
              >

                to hear about Jesus
              </Text>
            </Flex>
          </>
        </Flex>
        <Flex
          paddingY={isMobile ? 2 : 10}
          height={"20vh"}
          justifyContent={isMobile ? "flex-end" : "left"}
          w={"20%"}
        >
          {/* <Image
            cursor={"pointer"}
            style={{ height: isMobile?'20px': "30px" }}
            src={voiceIcon}
          /> */}
          <FaVolumeUp
            onMouseEnter={() =>
              handleClick(`lets help ${name}to hear about Jesus `)
            }
            cursor={"pointer"}
            color={"white"}
            size={isMobile?30:  50}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Invitation;
