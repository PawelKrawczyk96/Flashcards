import { useState } from "react";
import { Button, Menu, MenuItem, Grid, Box } from "@mui/material";
import { IHeader, IMenuItems } from "@interfaces/componentInterfaces";
import { Link } from "react-router";

import "./style.css";

export const Header = ({ menuItems }: IHeader) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenuItems = () => {
    return menuItems.map(({ name, path }: IMenuItems) => {
      return (
        <Link to={path}>
          <MenuItem onClick={handleClose}>{name}</MenuItem>
        </Link>
      );
    });
  };

  const renderMenu = () => {
    return (
      <Grid className="header">
        <Box>LOGO</Box>
        <Box>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Dashboard
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {renderMenuItems()}
          </Menu>
        </Box>
      </Grid>
    );
  };
  return <div>{renderMenu()}</div>;
};

// TODO: helper dla API
// Customhook i useContext jako store
// useReducer
