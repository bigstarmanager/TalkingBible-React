import theme from "../../Config/color";
const style = {
  mainContainer: {
    paddingY: 0,
    marginTop: 3,
    width: "100%",
    // background: "#539194",
    color: theme.customColors.common[100],
  },
  subMenuFlex: {
    paddingX: 16,
    paddingY: 1,
  },
  subTabMenu: {
    noOfLines: 1,
    fontSize: "md",
    width: "150px",
    marginLeft: 2,
    fontWeight: "semibold",
  },
  mainFlex: {
    flex: 1,
    as: "nav",
    height: "100vh",
    flexDirection: "row",
  },
  innerContainer: {
    flex: 2,
    // paddingY: 6,
    marginTop: 1,
    backgroundColor: "#629093",
  },
  tabsContainer: {
    paddingY: 4,
    marginTop: 3,
    width: "100%",
    background: "#539194",
    color: theme.customColors.common[100],
  },
  bottomFlex: {
    flex: 8,
    padding: 2,
    backgroundColor: "#f6f6fa",
  },
  rightreservedlabel: {
    opacity: 10,
    fontSize: "lg",
    color: "rgba(255, 255, 255, 0.6)",
    color: theme.customColors.common[0],
  },
  tabContainer: {
    paddingX: 8,
    paddingY: 2,
  },
  backgroundColorContianer: {
    marginTop: 1,
  },
  tabText: {
    w: "80px",
    marginLeft: 15,
    fontSize: "lg",
    paddingRight: 3,
    fontWeight: "bold",
  },
  antChainIcon: {
    fontSize: "sm",
    fontSize: "18px",
    marginLeft: "-3",
    fontWeight: "bold",
    color: theme.customColors.common[0],
  },
  iconContainer: {
    width: "110px",
    justifyContent: "flex-end",
  },
  antchainImage: {
    marginX: "5",
    height: "30px",
    objectFit: "fix",
  },
  signOutLabel: {
    paddingY: 1,
    marginLeft: 1,
    fontSize: "lg",
    fontWeight: "bold",
  },
  signoutButton: {
    size: 25,
    marginTop: 1,
  },
  sigoutContainer: {
    marginX: 8,
    marginTop: 6,
    paddingBottom: 50,
    flexDirection: "row",
  },
  pwLabel: {
    fontSize: "md",
    color: theme.customColors.common[0],
  },
  logoutTopContainer: {},
  emptyMidContainer: {
    margin: 4,
    borderTopWidth: 2,
  },
  mdContainer1: {
    marginTop: "5",
  },
  mdContainer2: {
    marginY: 2,
    marginRight: 2,
  },
  // nav: {
  //   padding: 5,
  //   paddingX: 20,
  //   bg: "black",
  //   align: "center",
  //   color: "gray.600",
  //   bg: "rgb(253,259,248)",
  //   justify: "space-between",
  // },

  nav: {
    padding: 5,
    bg: "black",
    align: "center",
    color: "gray.600",
    bg: "rgb(253,259,248)",
    justify: "space-between",
  },
  mobilenav: {
    bg: "black",
    width: "98%",
    align: "center",
    color: "gray.600",
    bg: "rgb(253,259,248)",
    justify: "space-between",
  },
  menuLinks: {
    spacing: 5,
    align: "center",
  },
  searchInput: {
    paddingx: 5,
    borderRadius: 20,
    backgroundColor: theme.customColors.white[100],
  },
  icon: {
    size: 30,
    color: theme.customColors.white[100],
  },
  logoImage: {
    // width: "130px",
    // height: "300px",
  },
  logoContainer: {
    flexDirection: "row",
  },
  switchButtonConatiner: {
    padding: 3,
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoImage: {
    height: "20px",
    width: "20px",
    marginTop: 18,
  },
};
export default style;
