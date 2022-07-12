import * as React from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { IconButton } from "@mui/material";
import { RectangleIcon, ExpandLess, ExpandMore } from "./icons";

const NestedList = ({screenList}) => {
  const [open, setOpen] = React.useState(true);
  const [activeItem, setActiveItem] = React.useState();

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        height: "65vh",
        overflowY: "scroll",
        overflowX: "hidden",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={{ border: "1px solid  hwb(0deg 0% 100% / 14%)" }}
      >
        <IconButton color="secondary" sx={{ mr: 1 }}>
          {open ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
        <ListItemText primary="My Screens" />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {screenList.map((item, ind) => (
          <List
            component="div"
            disablePadding
            sx={{
              border: "1px solid  hwb(0deg 0% 100% / 14%)",
              background: activeItem === item.title ? `#e6af0896` : `null`,
            }}
            onClick={() => setActiveItem(item.title)}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <RectangleIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </List>
        ))}
      </Collapse>
    </List>
  );
};

export default NestedList;
