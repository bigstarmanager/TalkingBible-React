import React,{useState,useEffect} from "react";
import {
  Box,
  Center,
  Text,
  Heading,
  Image,
  Flex,
  SimpleGrid,
  useMediaQuery,
  HStack,
  VStack,
} from "@chakra-ui/react";
import Speech from "speak-tts";
import { FaVolumeUp } from "react-icons/fa";
import newHexa from "../../assests/newHexa.png";
import m1 from "../../assests/m1.png";
import topImage from "../../assests/topImage.png";
import voiceIcon from "../../assests/voice.png";
import men from "../../assests/men.png";

export default function Hexagone() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
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

  const [playing, toggles] = useAudio(
    "https://www.free-stock-music.com/music/jay-someday-family-business.mp3"
  );

  return (
    <Box
      px={10}
      backgroundColor={"rgb(0,128,199)"}
      style={{
        height: isMobile ? "30vh" : "55vh",
      }}
      width={{ base: '100%', sm: '100%', md: '100%' ,lg:'100%'}}
    >
      <SimpleGrid
        alignSelf={"center"}
        columns={[3, 3, 3, 3, 3]}
        spacing={!isMobile ? "200px" :8}
      >
        <Box>
          <Center
            justifyContent={"center"}
            alignItems={"center"}
            style={{
              height: isMobile ? "100px" : "300px",
              marginTop: isMobile ? -50 : -150,
              width: isMobile ? "100px" : "300px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${newHexa})`,
            }}
          >
            <Center
              flexDirection={"column"}
              style={{
                height: isMobile ? "90px" : "284px",
                width: isMobile ? "90px" : "284px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${m1})`,
              }}
            >
              <Flex
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontSize={isMobile ? "20px" : "64px"}
                  color={"white"}
                  style={{
                    marginTop: 25,
                  }}
                >
                  350 +
                </Text>
                <Text
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontSize={isMobile ? "12px" : "18px"}
                  color={"white"}
                  style={{
                    marginTop: isMobile ? "" : -25,
                  }}
                >
                  millions
                </Text>
                <Flex
                  style={{
                    marginTop: isMobile ? 3 : 10,
                  }}
                >
                  <FaVolumeUp
                    cursor={"pointer"}
                    color={"white"}
                    onMouseEnter={()=>handleClick('350 + millions')}
                    size={isMobile ? 25 : 40}
                  />
                </Flex>
               
              </Flex>
            </Center>
          </Center>

          <Box width={['','' ,"300px" ]} mt={5}>
            <Text
              w={isMobile ? "100px" : ""}
              textAlign={"center"}
              color={isMobile ? "black" : "white"}
              fontSize={isMobile ? 10 : 20}
              lineHeight={6}
              style={{
                fontFamily: 'Roboto',

              }}
            >
              There are more then{" "}
              <span
                style={{
                  color: isMobile ? "black" : "white",
                  fontWeight: "bold",
                  fontSize: isMobile ? 10 : 20,
                }}
              >
                350 million people
              </span>{" "}
              in the world with some visual disability. they need to audible
              word of god.
            </Text>
          </Box>
        </Box>
        <Box>
          <Center
            justifyContent={"center"}
            alignItems={"center"}
            style={{
              height: isMobile ? "100px" : "300px",
              marginTop: isMobile ? -50 : -150,
              width: isMobile ? "100px" : "300px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${newHexa})`,
            }}
          >
            <Center
              flexDirection={"column"}
              style={{
                height: isMobile ? "90px" : "284px",
                width: isMobile ? "90px" : "284px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${topImage})`,
              }}
            >
              <Flex
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontSize={isMobile ? "20px" : "64px"}
                  color={"white"}
                  style={{
                    marginTop: 25,
                  }}
                >
                  700+
                </Text>
                <Text
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontSize={isMobile ? "12px" : "18px"}
                  color={"white"}
                  style={{
                    marginTop: isMobile ? "" : -25,
                  }}
                >
                  millions
                </Text>

                <Flex
                  style={{
                    marginTop: isMobile ? 3 : 10,
                  }}
                >
                  <FaVolumeUp
                    cursor={"pointer"}
                    color={"white"}
                    size={isMobile ? 25 : 40}
                    onMouseEnter={()=>handleClick('700 + millions')}

                  />
                </Flex>
              </Flex>
            </Center>
          </Center>

          <Box width={['','' ,"300px" ]}  mt={5}>
            <Text
              w={isMobile ? "100px" : ""}
              textAlign={"center"}
              lineHeight={6}

              color={isMobile ? "black" : "white"}
              fontSize={isMobile ? 10 : 20}
              style={{
                fontFamily: 'Roboto',

              }}
            >
              There are more then{" "}
              <span
                style={{
                  color: isMobile ? "black" : "white",
                  fontWeight: "bold",
                  fontSize: isMobile ? 10 : 24,
                  fontFamily:''
                }}
              >
                700 million non-readers
              </span>{" "}
              in the world. they will be never be able to read of Jesus.
            </Text>
          </Box>
        </Box>
        <Box>
          <Center
            justifyContent={"center"}
            alignItems={"center"}
            style={{
              height: isMobile ? "100px" : "300px",
              marginTop: isMobile ? -50 : -150,
              width: isMobile ? "100px" : "300px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${newHexa})`,
            }}
          >
            <Center
              flexDirection={"column"}
              style={{
                height: isMobile ? "90px" : "284px",
                width: isMobile ? "90px" : "284px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${men})`,
              }}
            >
              <Flex
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontSize={isMobile ? "20px" : "64px"}
                  color={"white"}
                  style={{
                    marginTop: 25,
                  }}
                >
                  700+
                </Text>
                <Text
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontSize={isMobile ? "12px" : "18px"}
                  color={"white"}
                  style={{
                    marginTop: isMobile ? "" : -25,
                  }}
                >
                  Languages
                </Text>

                <Flex
                  style={{
                    marginTop: isMobile ? 3 : 10,
                  }}
                >
                  <FaVolumeUp
                    cursor={"pointer"}
                    color={"white"}
                    size={isMobile ? 25 : 40}
                    onMouseEnter={()=>handleClick('700 + languages')}
                  />
                </Flex>
              </Flex>
            </Center>
          </Center>

          <Box width={['','' ,"300px" ]} mt={5}>
            <Text
              w={isMobile ? "100px" : ""}
              textAlign={"center"}
              lineHeight={6}
              color={isMobile ? "black" : "white"}
              fontSize={isMobile ? 10 : 20}
              style={{
                fontFamily: 'Roboto',

              }}
            >
              So that no misses the messase of Gospel we provide{" "}
              <span
                style={{
                  color: isMobile ? "black" : "white",
                  fontWeight: "bold",
                  fontSize: isMobile ? 10 : 24,
                }}
              >
                the bible in more than 2000 languages.
              </span>{" "}
            </Text>
          </Box>
        </Box>

       
      </SimpleGrid>
    </Box>
  );
}
