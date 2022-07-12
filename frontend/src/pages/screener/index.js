import * as React from "react";
import { Grid, Box } from "@mui/material";
import { CardItem, Modal } from "../../components";
import { getScreenList, saveScreenList } from "../../apis/screenlist";
import ListPage from "./list";

const ScreenerPage = () => {
  const [screenList, setScreenList] = React.useState([]);
  const [modalContent, setModalContent] = React.useState({
    title: "",
    created: "",
  });
  const [openModal, setOpenModal] = React.useState(false);

  React.useEffect(() => {
    getScreenList().then((res) => {
      setScreenList(res);
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }} m={1}>
      <Grid container spacing={2}>
        <Grid item xs={3} md={3}>
          <ListPage
            setOpenModal={setOpenModal}
            setModalContent={setModalContent}
            screenList={screenList}
          />
        </Grid>
        <Grid item xs={6}>
          <CardItem>Part2</CardItem>
        </Grid>
        <Grid item xs={3}>
          <CardItem>Part3</CardItem>
        </Grid>
        <Grid item xs={12}>
          <CardItem>Part4</CardItem>
        </Grid>
      </Grid>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalContent={modalContent}
        screenList={screenList}
        setScreenList={setScreenList}
        saveScreenList={saveScreenList}
      />
    </Box>
  );
};

export default ScreenerPage;
