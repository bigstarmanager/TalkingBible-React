import logo from "../logo.svg";
import "../App.css";
import React from "react";
import Header from "../Components/Common/Header";
import Stats from "../Components/Common/Stats/stats";
import Invitation from "../Components/Invitation/invitation";
import ListenBible from "../Components/Bible/Listen";
import TalkingBible from "../Components/Bible/TalkingBible";
import Testinomials from "../Components/Bible/Testinomials";
import Information from "../Components/Information/information";
import Africa from "../assests/Africa.png";
import india from "../assests/india.png";
import About from "../Components/About/About";
import rc from "../assests/rc.png";
import div2 from "../assests/bg1.jpg";
import div3 from "../assests/indabg2.png";
import pay from "../assests/pink-blue.png";
import pay2 from "../assests/brown-blue.png";
import Footer from "../Components/Footer/Footer";
import VideoInformation from "../Components/Video/VideoInformation";
import Hexagone from "../Components/Common/Hexagone";
import indiabg from "../assests/indiabg@.jpg";
import africaBg from "../assests/if.png";
import brown from "../assests/brown 2.png";
import polygon from "../assests/polygon 2.png";
import IndiaSection from "../Components/Common/IndiaSection";
import {
  Flex,
  Center,
  Image,
  Text,
  Heading,
  SimpleGrid,
  useMediaQuery,
} from "@chakra-ui/react";
function Home() {
  const ref = React.useRef();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Header ref={ref} />
      <Stats />
      <Hexagone />
      <Invitation
        icon={isMobile ? polygon : pay}
        country={isMobile ? div3 : india}
        name={'india'}
        image={indiabg}
      />{" "}
     
      <ListenBible />
      <TalkingBible />
      <Information />
      <Testinomials />
      <Invitation
        index={2}
        icon={isMobile ? brown : pay2}
        image={div2}
        name={'Africa'}
        country={isMobile ? africaBg : Africa}
      />
      <About ref={ref} />
      <VideoInformation />
      <Footer />
    </>
  );
}

export default Home;
