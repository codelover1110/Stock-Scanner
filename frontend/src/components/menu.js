import * as React from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { RectangleIcon, CreateNewFolderIcon, ListItemIcon } from "./icons";

const CustomMenu = ({ setOpenModal, setModalContent }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Button
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          style={{
            color: "grey",
            textTransform: "capitalize",
            border: "1px solid",
            height: 25,
          }}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          New Screen
        </Button>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={() => setAnchorEl(null)}
        onClick={() => setAnchorEl(null)}
      >
        <MenuItem
          onClick={() => {
            setOpenModal(true);
            setModalContent({ title: "New Stock Screen", key: "stock" });
          }}
        >
          <ListItemIcon>
            <RectangleIcon fontSize="small" />
          </ListItemIcon>
          New Stock Screen
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOpenModal(true);
            setModalContent({ title: "New Find Screen", key: "find" });
          }}
        >
          <ListItemIcon>
            <RectangleIcon fontSize="small" />
          </ListItemIcon>
          New Find Screen
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <CreateNewFolderIcon fontSize="small" />
          </ListItemIcon>
          New Folder
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default CustomMenu;
