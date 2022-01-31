import React,{useState,useEffect} from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Center,
  Text,
  Heading,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaVolumeUp } from "react-icons/fa";

import { aboutUs } from "../../Constants/data";
import voiceIcon from "../../assests/voice.png";
import aboutImage from "../../assests/silver-purple.png";
import mobabou from "../../assests/mobabou.png";
import Speech from "speak-tts";

const About = ({ ref }) => {
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

  const [playing, toggles] = useAudio(
    "https://www.free-stock-music.com/music/jay-someday-family-business.mp3"
  );
  const renderTitle = (index) => {
    return {
      0: (
        <Heading
          paddingTop={7}
          // paddingBottom={7}
          w={isMobile ? "100%" : "400px"}
          fontWeight={"bold"}
          fontFamily={"arial"}
          fontSize={isMobile ? "15px" : "30px"}
          color={"#000000"}
          style={{
            fontFamily: 'Roboto',
            fontWeight:'bold'

          }}
        >
          WHAT {!isMobile ? <br /> : null} WE DO?
        </Heading>
      ),
      1: (
        <Heading
          paddingTop={7}
          // paddingBottom={7}
          w={isMobile ? "100%" : "400px"}
          fontWeight={"bold"}
          fontSize={isMobile ? "15px" : "30px"}
          color={"#000000"}
          style={{
            fontFamily: 'Roboto',
            fontWeight:'bold'

          }}
        >
          HOW
          {!isMobile ? <br /> : null}IT WORKS
        </Heading>
      ),
      2: (
        <Heading
          paddingTop={7}
          //paddingBottom={7}
          w={isMobile ? "100%" : "400px"}
          fontWeight={"bold"}
          fontSize={isMobile ? "15px" : "30px"}
          color={"#000000"}
          style={{
            fontFamily: 'Roboto',
            fontWeight:'bold'

          }}
        >
          31 YEARS
          {!isMobile ? <br /> : null} OF MINISTRY
        </Heading>
      ),
    }[index];
  };

  return (
    <Flex
      id={"aboutus"}
      width={{ base: '100%', sm: '100%', md: '100%' ,lg:'100%'}}
      // minWidth={window.innerWidth}
      backgroundColor={!isMobile ? "#F1DFEB" : "rgb(213,209,218)"}
      flexDirection={"column"}
    >
      <Center marginTop={isMobile ? -50 : -75}>
        <Image w={!isMobile ?'130px':''} src={isMobile ? mobabou : aboutImage} />
      </Center>
      <SimpleGrid
        padding={10}
        columns={[1, 1, 2, 3]}
        // minWidth={"350px"}
        spacing={3}
        marginBottom={10}
        alignItems={isMobile ? "flex-start" : ""}
        justifyContent={"space-between"}
        flexDirection={isMobile ? "column" : "row"}
        overflowY={"scroll"}
        // backgroundColor={"rgb(238,234,235)"}
      >
        {aboutUs.map((item, index) => {
          return (
            <Flex
              alignItems={isMobile ? "center" : ""}
              flexDirection={"column"}
            >
              <Flex
                justifyContent={"flex-end"}
                flexDirection={"column"}
                w={isMobile ? "100%" : "400px"}
                height={"347px"}
                style={{
                  backgroundPosition: "center",
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Flex
                  style={{
                    height: "20px",
                    marginBottom: index === 2 ? 22 : 20,
                    marginLeft: index === 2 ? 12 : 10,
                  }}
                >
                  <FaVolumeUp onMouseEnter={()=>handleClick(`${item.title} Lorem ipsum dolor sit amet, consec laoreet dolore magna ipsum   dolor sit amet, conse laoreet dolore magna aliquam erat erat ipsum dolor sit amet, conse laoreet dolore magna aliquam erat eratvolutpat. Ut wisi enim.aliquam erat erat volutpat. Ut wisi enim.`)} cursor={"pointer"} color={"white"} size={40} />
                </Flex>
              </Flex>

              {renderTitle(index)}
              <Text
                fontWeight={"300"}
                color={"black"}
                marginTop={2}
                w={isMobile ? "100%" : "400px"}
                style={{
                  fontFamily: 'Roboto'
                }}
              >
                Lorem ipsum dolor sit amet, consec laoreet dolore magna ipsum
                dolor sit amet, conse laoreet dolore magna aliquam erat erat
                ipsum dolor sit amet, conse laoreet dolore magna aliquam erat
                eratvolutpat. Ut wisi enim.aliquam erat erat volutpat. Ut wisi
                enim.
                {!isMobile ? (
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      fontFamily: 'Roboto'

                    }}
                  >
                    Read +
                  </span>
                ) : null}
              </Text>
              {isMobile ? (
                <Heading
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "black",
                    paddingTop: 10,
                  }}
                  w={isMobile ? "100%" : "400px"}
                >
                  {" "}
                  Read +
                </Heading>
              ) : null}
            </Flex>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};

export default About;
