import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "next/link";
import Zoom from "@mui/material/Zoom";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import SchoolIcon from "@mui/icons-material/School";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VoiceChatIcon from "@mui/icons-material/VoiceChat";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";

import Image from "next/image";

const menuItems = [
  {
    text: "Home",
    endIcon: <SchoolIcon />,
  },
  {
    text: "Pricing",
    endIcon: <LocalMallIcon />,
  },
  {
    text: "Testimonials",
    endIcon: <ChatBubbleOutlineIcon />,
  },
  {
    text: "Contact",
    endIcon: <VoiceChatIcon />,
  },
];

const ScrollTop = () => {
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const triger = useScrollTrigger();
  return (
    <Zoom in={triger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Zoom>
  );
};

const NavBar = ({ children }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        sx={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,32,121,1) 71%, rgba(0,212,255,1) 100%)",
          float: "right",
        }}
      >
        <Toolbar
          // variant="dense"
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Image
            // loader={myLoader}
            src="/logo.png"
            alt="Code department logo"
            width={150}
            height={35}
          />

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
          >
            {menuItems.map(({ text, endIcon }) => (
              <Link
                key={text}
                href={text === "Home" ? "/" : `/${text.toLocaleLowerCase()}`}
              >
                <Button color="info" endIcon={endIcon} sx={{ margin: "10px" }}>
                  {text}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "flex", sm: "none" },
              }}
            >
              {menuItems.map(({ text, endIcon }) => (
                <Link
                  key={text}
                  href={text === "Home" ? "/" : `/${text.toLocaleLowerCase()}`}
                >
                  <MenuItem
                    key={text}
                    onClick={handleCloseNavMenu}
                    sx={{
                      background:
                        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,32,121,1) 71%, rgba(0,212,255,1) 100%)",
                      color: "info.main",
                    }}
                  >
                    <ListItemIcon sx={{ color: "info.main" }}>
                      {endIcon}
                    </ListItemIcon>
                    <Typography textAlign="center">{text}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Box>{children}</Box>
      <ScrollTop />
    </React.Fragment>
  );
};

export default NavBar;
