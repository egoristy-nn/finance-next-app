"use client";
import React from "react";
import styles from "./header.module.css";
import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import StyledMainInput from "../input/StyledMainInput";
import CustomDrawer from "../drawer/CustomDrawer";

const settings = ['Profile','Logout'];

const Header = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (e) => {
    const setting = e.target.textContent.trim('Logout')
    if(setting === 'Logout') {
        window.location.href = "/login"
    }
    setAnchorElUser(null);
  };

    return (
        <div className={styles.header}>
            <StyledMainInput style={{ width: "20%"}} placeholder="Поиск" />
            <div className="header__right" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <CustomDrawer />
                <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar className={styles.avatar} style={{ width: "45px", height: "45px", transition: "all 0.2s ease-in-out"}}/>
                </IconButton>
                </Tooltip>
                <Menu
                sx={{ mt: '65px'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                    </MenuItem>
                ))}
                </Menu>
                </Box>
            </div>
            
        </div>
    );
}

export default Header;