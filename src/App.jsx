import { Box, Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardList from "./components/CardList";
import Navbar from "./components/Navbar";
import { addJson } from "./store";

const App = () => {
  const dispatch = useDispatch();
  const allJson = useSelector((state) => {
    return state.jsonData;
  });
  // console.log(allJson);
  allJson.map((mov) => {
    console.log(mov);
  });
  const [iconData, setIconData] = useState();
  useEffect(() => {
    (async () => {
      const responseIcon = await axios.get(
        "https://api.npoint.io/4150eacd15ff232a759b"
      );
      // console.log(responseIcon.data.icons);
      setIconData(responseIcon.data.icons);

      /////////--------Fetchng JSON DATA and updating in state----------////////////
      const responseData = await axios.get(
        "https://api.npoint.io/f52d07fffd3aa78c8583"
      );
      dispatch(addJson(responseData.data.data));
    })();
    /////////--------Fetchng JSON DATA and updating in state----------////////////
  }, []);
  return (
    <Container maxWidth="xl">
      <Box>
        <Navbar iconData={iconData} />
        <CardList />
      </Box>
    </Container>
  );
};

export default App;
