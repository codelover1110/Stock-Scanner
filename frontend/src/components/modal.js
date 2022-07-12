import * as React from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#f7f7f7b8",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};

const BasicModal = ({
  openModal,
  setOpenModal,
  modalContent,
  screenList,
  setScreenList,
  saveScreenList
}) => {
  const [screenValue, setScreenValue] = React.useState();

  const handleSave = () => {
    const sendData = { title:screenValue };
    saveScreenList(sendData).then((res) => {
      res && setScreenList([...screenList, res]);
      setOpenModal(false);
      setScreenValue();
    })
  }

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h3">
          {`Create ${modalContent.title}`}
        </Typography>
        <Box bgcolor="white" p={2}>
          <Typography
            id="modal-modal-title"
            sx={{ fontSize: 14 }}
          >{`Name ${modalContent.title} (up to 50 characters)`}</Typography>
          <TextField
            placeholder="Pleae enter a name"
            sx={{ width: "100%" }}
            margin="normal"
            value={screenValue}
            onChange={(e) => setScreenValue(e.target.value)}
          />
          <Typography id="modal-modal-title" sx={{ fontSize: 12 }}>
            Tip: You may change the name at any time
          </Typography>
        </Box>
        <Box display="flex" p={2} justifyContent="space-around">
          <Button
            size="small"
            style={{
              textTransform: "capitalize",
              border: "1px solid",
              height: 25,
            }}
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </Button>
          <Button
            size="small"
            style={{
              textTransform: "capitalize",
              border: "1px solid",
              height: 25,
            }}
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default BasicModal;
