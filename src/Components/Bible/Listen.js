import React, { useEffect, useState } from "react";
import v13 from "../../assests/v13.png";
import listen from "../../assests/l2.png";
import Media from "react-media";
import { FaVolumeUp } from "react-icons/fa";
import vectorImage from "../../assests/black-blue.png";
import HeadPhone from "../../assests/headphone.png";
import ListenIcon from "../../assests/listen.png";
import voiceIcon from "../../assests/voice.png";
import playGon from "../../assests/p2.png";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon,
  HStack,
  Input,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Text,
  Heading,
  Image,
  SimpleGrid,
  Box,
  Center,
  useMediaQuery,
} from "@chakra-ui/react";
import Speech from "speak-tts";

const ListBible = () => {
 

  const [say, setSay] = React.useState(
    "The purpose of this free space is for people of all religions to listen to the Bible in their language, and by sharing or donating it, they collaborate with millions of people who, even if they wanted to read it, cannot. We appreciate the prayers and support of the listeners. On this site you will find information about how to contribute to our mission and help send Talking Bibles to the illiterate and disabled around the world! Mark S. Hoekstra, President"
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
  const [query, setQuery] = useState("");

  const [playing, toggles] = useAudio(
    "https://www.free-stock-music.com/music/jay-someday-family-business.mp3"
  );
  const [bookList, setBookList] = React.useState([
    "Deuteronomy",
    "Joshua",
    "Ruth",
    "1 Chronicles",
  ]);
  const USERS = [
    { id: 1, name: 'Deuteronomy', age: 32 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: '1 Chronicles', age: 40 },
    { id: 4, name: 'Ruth', age: 50 },
    { id: 5, name: 'Joshua', age: 30 },
    
  ];
  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filterPosts = () => {
    return bookList.filter((entry) => {
      return entry.includes(query);
    });
  };

  const displayPosts = () => {
    let filteredData = filterPosts();
    let posts = [];
    if (Array.isArray(filteredData)) {
      posts = filteredData.map((element) => {
        console.log('posts',posts)
        return  <MenuItem  key={"index"}>
        {element}{" "}
      </MenuItem>;
      });
    }
    return (
      <>
        <MenuItem >
          {bookList}
        </MenuItem>{" "}
      </>
    );
  };
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  const renderMenu = () => {
    return (
      <Menu>
        <MenuButton
          color={"white"}
          rightIcon={<Image w={[4, 4, "100%"]} ml={10} src={playGon} />}
          opacity={0.8}
          bg={"rgb(45,59,65)"}
          borderRadius="6px"
          // padding={14}
          py={[5, 5, 7]}
          fontWeight={"bold"}
          fontSize={isMobile ? "8px" : ""}
          // w={"400px"}
          width={["100px", "130px", "400px"]}
          as={Button}
        >
          <Text fontSize={isMobile ? 8 : ""} w={"10px"}>
            {" "}
            Choose a book{" "}
          </Text>
        </MenuButton>
        <MenuList
          width={["100px", "130px", "400px"]}
          overflowY={"scroll"}
          height={"150px"}
          padding={5}
        >
          <Input
            onChange={filter}
            placeholder="Enter search query"
            placeholder={"Search"}
            margin={3}
            borderWidth={1}
            w={"95%"}
            borderWidth={1}
            height={"50px"}
          />
     {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
           <MenuList padding={3}             margin={3}
           >{user.name}</MenuList>
          ))
        ) : (
          <h1>No results found!</h1>
        )}   
      </MenuList>
      </Menu>
    );
  };

  const renderMenu2 = () => {
    return (
      <Menu>
        <MenuButton
          color={"white"}
          rightIcon={<Image w={[4, 4, "100%"]} src={playGon} />}
          opacity={0.9}
          fontSize={isMobile ? "8px" : ""}
          bg={"rgb(45,59,65)"}
          borderRadius="6px"
          // padding={14}
          py={[5, 5, 7]}
          w={isMobile ? "80px" : "150px"}
          as={Button}
        >
          Chapter
        </MenuButton>
        <MenuList
          w={isMobile ? "80px" : "150px"}
          overflowY={"scroll"}
          height={"150px"}
          padding={5}
        >
          <Input
            onChange={filter}
            placeholder="Enter search query"
            placeholder={"Search"}
            boxShadow={"md"}
            margin={3}
            borderWidth={1}
            w={"95%"}
            height={"50px"}
          />
     {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
           <MenuList w={'80%'} padding={2}             margin={3}
           >{user.name}</MenuList>
          ))
        ) : (
          <h1>No results found!</h1>
        )}   
      </MenuList>
      </Menu>
    );
  };

  return (
    <Box
      id={"Listen"}
      px={isMobile ? 5 : 10}
      paddingBlock={[8, 8, 0]}
      height={["auto", "auto", "70vh"]}
      style={{
        // width: "100%",
        flexDirection: "column",
        backgroundColor: "white ",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${HeadPhone})`,
        // overflowY: isMobile ? "scroll" : "none",
      }}
      width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
    >
      <Center height={"100px"}>
        <Image
          src={isMobile ? listen : vectorImage}
          marginTop={[-188, -188, -100]}
          w={!isMobile?'80px':''}
        />
      </Center>

      <SimpleGrid columns={[2, 2, 2]} spacing={!isMobile ? "100px" : ""}>
        <Box>
          <HStack>
            <Text
              fontWeight={"900"}
              fontSize={isMobile ? "10px" : "25px"}
              color={"white"}
              style={{
                fontFamily: "Roboto",
              }}
            >
              LISTEN THE <br /> BIBLE FOR FREE
            </Text>
            <Flex>
              <Flex
                style={{
                  marginTop: isMobile ? 10 : 30,
                  marginLeft: 10,
                }}
              >
                <FaVolumeUp
                  onMouseEnter={() => handleClick(" LISTEN THE BIBLE FOR FREE")}
                  cursor={"pointer"}
                  color={"white"}
                  size={40}
                />
              </Flex>
            </Flex>
          </HStack>

          <HStack w={"100%"} spacing={[2, 2, 3]} marginTop={10}>
            {renderMenu()}
            <Box>{renderMenu2()}</Box>
          </HStack>

          <HStack spacing={3} marginTop={10}>
            {renderMenu()}
            <Flex
              opacity={0.9}
              bg={"rgb(45,59,65)"}
              borderRadius="6px"
              width={isMobile ? 120 : 150}
              py={[5, 3, 4]}
              paddingX={3}
              justifyContent={"space-between"}
              flexDirection={"row"}
              alignItems={"center"}
              borderWidth={4}
              borderColor={"rgb(88,149,181)"}
            >
              <Text fontSize={isMobile ? "8px" : ""} color={"white"}>
                Listen
              </Text>
              <Image
                width={!isMobile ? "28px" : "15px"}
                height={!isMobile ? "28px" : "15px"}
                src={ListenIcon}
              ></Image>
            </Flex>
          </HStack>
        </Box>

        <Box>
          <Flex justifyContent={"end"} alignItems={"end"} marginTop={10}>
            <Text
              color={"white"}
              textAlign={"center"}
              // w={isMobile ? "100%" : "90%"}
              color={"white"}
              lineHeight={isMobile ? "" : "8"}
              style={{
                // fontSize: isMobile ? "8px" : "",
                textAlign: isMobile ? "center" : "",
              }}
              fontSize={{ base: "10px", md: "12px", lg: "18px" }}
              marginLeft={10}
              style={{
                fontFamily: "Roboto",
                fontWeight: "500",
              }}
            >
              The purpose of this free space is for people of all religions to
              listen to the Bible in their language, and by sharing or donating
              it, they collaborate with millions of people who, even if they
              wanted to read it, cannot. We appreciate the prayers and support
              of the listeners. On this site you will find information about how
              to contribute to our mission and help send Talking Bibles to the
              illiterate and disabled around the world! Mark S. Hoekstra,
              President
            </Text>
          </Flex>

          <HStack spacing={10} marginTop={[10, 10, 7]}>
            {!isMobile ? <Flex></Flex> : null}
            <Text
              fontSize={isMobile ? "10px" : ""}
              paddingLeft={20}
              mt={[0, 0, 10]}
              color={"white"}
              fontWeight={"bold"}
            >
              Mark S. Hoekstra, President
            </Text>{" "}
            <Flex style={{ height: "20px", marginLeft: 12, marginTop: -16 }}>
              <FaVolumeUp
                onMouseEnter={() => handleClick(say)}
                cursor={"pointer"}
                color={"white"}
                size={40}
              />
            </Flex>
          </HStack>
        </Box>

        {/* <Flex>
          <Flex
            flexDirection="column"
            marginRight={3}
            w={isMobile ? "80%" : "45%"}
          >
            {renderMenu()}
            <Box marginTop={10}>{renderMenu()}</Box>
          </Flex>
          <Flex flexDirection="column" w={isMobile ? "100%" : "30%"}>
            {renderMenu()}
            <Flex
              opacity={0.9}
              bg={"rgb(45,59,65)"}
              borderRadius="6px"
              paddingX={10}
              marginTop={4}
              height={"48px"}
              marginTop={10}
              color="white"
              cursor={"pointer"}
              justifyContent={"space-between"}
            >
              <Text>Listen</Text>
              <Image
                marginTop={14}
                width={"20px"}
                height={"20px"}
                src={ListenIcon}
              ></Image>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          alignItems={"flex-end"}
          justifyContent={"flex-end"}
          flexDirection={"column"}
        >
          <SimpleGrid flexDirection="row" w={"100%"} columns={2}>
            <Flex w={"70%"}></Flex>
            <Flex flexDirection={"column"}>
              <Text
                overflowY={isMobile ? "scroll" : "none"}
                padding={5}
                color={"white"}
                textAlign={"left"}
                w={isMobile ? "100%" : "90%"}
                paddingLeft={10}
                height={isMobile ? "200px" : ""}
                style={{
                  fontSize: isMobile ? "8px" : "",
                  textAlign: isMobile ? "center" : "",
                }}
              >
                The purpose of this free space is for people of all religions to
                listen to the Bible in their language, and by sharing or
                donating it, they collaborate with millions of people who, even
                if they wanted to read it, cannot. We appreciate the prayers and
                support of the listeners. On this site you will find information
                about how to contribute to our mission and help send Talking
                Bibles to the illiterate and disabled around the world! Mark S.
                Hoekstra, President
              </Text>
              <Flex>
                <Text
                  fontSize={isMobile ? "10px" : ""}
                  paddingLeft={10}
                  color={"white"}
                  fontWeight={"bold"}
                >
                  Mark S. Hoekstra, President
                </Text>{" "}
                <Image
                  cursor={"pointer"}
                  style={{ height: "20px", marginTop: 13, marginLeft: 12 }}
                  height={"50px"}
                  src={voiceIcon}
                />
              </Flex>
            </Flex>
          </SimpleGrid>
        </Flex> */}
      </SimpleGrid>
    </Box>
  );
};

export default ListBible;
