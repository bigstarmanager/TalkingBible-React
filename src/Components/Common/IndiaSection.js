import React from "react";
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
} from "@chakra-ui/react";

import indiabg from "../../assests/indiabg.png";

export default function IndiaSection() {
  return (
    <Box
      paddingX={[4, 8, 12, 16, 20]}
      style={{
        height: "20vh",
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${indiabg})`,
      }}
    ></Box>
  );
}
