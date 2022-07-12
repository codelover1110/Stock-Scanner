import * as React from "react";
import { Box, IconButton, Button } from "@mui/material";
import { CardItem, NestedList, Menu } from "../../components";
import { ClearIcon, EditIcon } from "../../components/icons";

const ListPage = ({ setOpenModal, setModalContent, screenList }) => {
  return (
    <CardItem>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <IconButton
          style={{
            color: "grey",
            textTransform: "capitalize",
          }}
        >
          <ClearIcon />
        </IconButton>
        <Button
          size="small"
          style={{
            color: "grey",
            textTransform: "capitalize",
            border: "1px solid",
            height: 25,
          }}
          endIcon={<EditIcon />}
        >
          Open Edit
        </Button>
      </Box>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        sx={{ background: "#f7f7f7" }}
        border="1px solid hwb(0deg 0% 100% / 14%)"
        p={2}
      >
        <Menu setOpenModal={setOpenModal} setModalContent={setModalContent} />
        <Button
          size="small"
          style={{
            color: "grey",
            textTransform: "capitalize",
            border: "1px solid",
            height: 25,
          }}
        >
          Browser Screen
        </Button>
      </Box>
      <NestedList screenList={screenList} />
    </CardItem>
  );
};

export default ListPage;
