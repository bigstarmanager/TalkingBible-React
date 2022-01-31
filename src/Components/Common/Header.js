import React from "react";
import {
  Flex,
  Text,
  Spacer,
  Image,
  Icon,
  Center,
  useMediaQuery,
  ScaleFade,
  Collapse,
  Slide,
  SlideFade,
  usePrefersReducedMotion,
  useDisclosure,
} from "@chakra-ui/react";
import "./header.css";

import { motion, useAnimation ,useMotionValue,useTransform} from "framer-motion";
import delay from "delay";

import { Keyframes, config } from "react-spring";
import { useTransition, animated } from "react-spring";
import Speech from "speak-tts";
import { HamburgerIcon } from "@chakra-ui/icons";
import style from "./style";
import { Bu } from "react-bootstrap";
import { navData } from "../../Constants/data";
import thumnail from "../../assests/header.png";
import { Link } from "react-scroll";
import Frame from "../../assests/octa1.png";
const Header = ({ ref }) => {
  const variants = {
    open: {
      scale: 1,
      opacity: 1,
      delay: 1000,
      transition: {
        x: { stiffness: -1000, velocity: -100 },
      },
    },
    closed: {
      scale: -0.2,
      opacity: 0,
      transition: {
        x: { stiffness: -1000 },
      },
    },
  };
  const x = useMotionValue(0)
  const xRange = [-200, -100, 100, 200]
  const opacityRange = [0, 1, 1, 0]
  const opacity = useTransform(x, xRange, opacityRange)
  const menuVariants = {
    open: {
      transition: { staggerChildren: 0.3, delayChildren: 0.4 },
    },
    closed: {
      transition: { staggerChildren: 0.9, staggerDirection: -1 },
    },
  };
  const [isMenu, setIsMenu] = React.useState(true);

  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [show, setShow] = React.useState("none");
  const [open, setOpen] = React.useState("none");
  const { isOpen, onToggle } = useDisclosure();
  const [size, setSize] = React.useState("small");
  const scrollToRef = () => window.scrollTo(0, ref.current.offsetTop);
  const [transform, setTransform] = React.useState(`translateX(-10px)`);
  const [width, setWidth] = React.useState(`0`);
  const controls = useAnimation();

  const transition = useTransition(open, {
    from: {
      opacity: 0,
      transformMain: "translatex(-40px)",
      transformFoot: "translateX(-200px)",
      transformFoot2: "translateX(-800px)",
    },
    enter: {
      opacity: 1,
      transformMain: "translateX(0)",
      transformFoot: "translateX(0px)",
      transformFoot2: "translateX(0px)",
    },
    leave: {
      opacity: 0,
      transformMain: "translateY(40px)",
      transformFoot: "translateX(200px)",
      transformFoot2: "translateX(300px)",
    },
  });

  const _toggleMenu = () => {
    if (open === "block") {
      setOpen("none");
      setWidth("100%");
      setSize("small");
      setIsMenu(!isMenu);
      controls.start((i) => ({
        opacity: 1,
        x: -100,
        transition: { delay: i * 0.3 },
      }));
    } else {
      setOpen("block");
      setSize("large");
      setWidth("100%");
      setIsMenu(!isMenu);
    }
  };

  const _toggleMoileMenu = () => {
    if (show === "block") {
      setShow("none");
      setWidth("100%");
      setIsMenu(!isMenu);
    } else {
      setShow("block");
      setWidth("100%");
      setIsMenu(!isMenu);
    }
  };
  const MenuClassName = () => {
    if (isMenu) {
      return "menu is-active";
    } else {
      return "menu is-non-active";
    }
  };

  return (
    <Flex flexDirection={"column"}>
      <Flex
        // width={isMobile ? "100%" : "100%"}
        // minWidth={window.innerWidth}
        justifyContent={isMobile ? "center" : ""}
        {...style.nav}
        width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
      >
        <Flex
          onClick={() => {
            _toggleMenu();
            onToggle();
          }}
          cursor={"pointer"}
          flexDirection={"row"}
          display={isMobile ? "none" : ""}
        >
          <Flex>
            <Image w={45} h={45} objectFit={"contain"} src={Frame} />
            <Text
              fontSize={["sm", "md", "lg", "xl"]}
              color={"black"}
              className={"li"}
              style={{ fontSize: 16, padding: 12, marginRight: 8 }}
            >
              Menu
            </Text>
          </Flex>
        </Flex>

        <Flex
          initial={false}
          animate={isMenu ? "open" : "closed"}
          variants={menuVariants}
          className={MenuClassName()}
        >
          {navData.map((item, index) => {
            return (
              // <Collapse _dragX={"40px"} in={isOpen} animateOpacity>
              <Flex
                // id="example-collapse-text"
                key={index}
                alignItems={""}
                flexDirection={"column"}
                direction={"row"}
                style={
                  {
                    // transform: translateX(-100rem);
                    // animation: slideIn .5s forwards;
                  }
                }
                display={isMobile ? "none" : open}
              >
                <Link smooth={true} to={item.id}>
                  <Flex cursor={"pointer"}>
                    <motion.li
                       animate={{ x: -100*index }}
                       transition={{ type: "spring", bounce: 0.25,duration:2,delay:5*index }}
                    >
                      <Image
                        h={"25px"}
                        w={"25px"}
                        objectFit={"contain"}
                        src={item.icon}
                      />
                    </motion.li>
                    <motion.li custom={index} animate={{ x: -100*index}}
                      
                       transition={{ type: "spring", bounce: 0.25,duration:2, }}>
                      <Text
                        color={"black"}
                        fontSize={["sm", "md", "lg", "xl"]}
                        style={{
                          fontSize: 14,
                          paddingTop: 3,
                          paddingLeft: 6,
                          marginRight: 8,
                        }}
                        animate={{ x:  -100*index }}
                        transition={{ type: 'spring', damping: 300 }}
                        >
                        {item.title}
                      </Text>
                    </motion.li>
                  </Flex>
                </Link>
              </Flex>
            );
          })}
        </Flex>

        {isMobile ? null : <Spacer></Spacer>}

        <Center marginLeft={10}>
          <Image
            src={thumnail}
            style={{
              marginRight: 10,
              width: isMobile ? "198px" : "200px",
              height: isMobile ? "59px" : "",
            }}
            objectFit={"contain"}
          />
        </Center>
        <Flex left={10} display={isMobile ? "block" : "none"}>
          <HamburgerIcon
            size={50}
            onClick={() => _toggleMoileMenu()}
            color={"black"}
          />
        </Flex>
      </Flex>
      <Flex
        flexDirection={"row"}
        justifyContent={"space-around"}
        {...style.mobilenav}
        bgColor={"rgb(185,186,187)"}
        width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
      >
        <Flex w={"60%"}></Flex>
        <Flex
          width={["100%", "100%", window.innerWidth]}
          flexDirection={"column"}
        >
          <Flex
            onClick={() => {
              _toggleMenu();
              onToggle();
            }}
            cursor={"pointer"}
            display={isMobile ? show : "none"}
          >
            <Flex>
              <Image w={50} h={50} objectFit={"contain"} src={Frame} />
              <Text
                fontSize={["sm", "md", "lg", "xl"]}
                color={"black"}
                style={{ fontSize: 16, padding: 12, marginRight: 8 }}
              >
                Menu
              </Text>
            </Flex>
          </Flex>
          {navData.map((item, index) => {
            return (
              <Flex
                marginTop={2}
                alignItems={"center"}
                // minWidth={window.innerWidth}
                justifyContent={"center"}
                display={isMobile ? show : "none"}
              >
                <Link smooth={true} to={item.id}>
                  <Flex
                    border={"none"}
                    onClick={() => setShow("none")}
                    cursor={"pointer"}
                    alignContent={"center"}
                  >
                    <Center>
                      <Image
                        marginLeft={3}
                        height={"35.7px"}
                        width={"35.6px"}
                        src={item.icon}
                      />
                      <Text
                        color={"black"}
                        style={{ fontSize: 16, paddingLeft: 5 }}
                      >
                        {item.title}
                      </Text>
                    </Center>
                  </Flex>
                </Link>
              </Flex>
            );
          })}
        </Flex>
        <Flex></Flex>
      </Flex>
    </Flex>
  );
};
const styles = {
  transition: {},
};
export default Header;
