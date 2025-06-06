'use client';
import { Box, Tooltip, IconButton } from "@mui/material";
import styles from "./sider.module.css";
import HomeIcon from '@mui/icons-material/Home';
import PaymentsIcon from '@mui/icons-material/Payments';
import HistoryIcon from '@mui/icons-material/History';
import { useEffect } from "react";
import React from "react";

const Sider = () => {

    const [homeIsActive, setHomeIsActive] = React.useState(false);
    useEffect(() => {
       if (window.location.pathname === "/") {
        setHomeIsActive(true);
       }
       else {
        setHomeIsActive(false);
       }
    }, [])

    const [transactionsIsActive, setTransactionsIsActive] = React.useState(false);
    useEffect(() => {
       if (window.location.pathname === "/transactions") {
        setTransactionsIsActive(true);
       }
       else {
        setTransactionsIsActive(false);
       }
    }, [])

    const [historyIsActive, setHistoryIsActive] = React.useState(false);
    useEffect(() => {
       if (window.location.pathname === "/history") {
        setHistoryIsActive(true);
       }
       else {
        setHistoryIsActive(false);
       }
    }, [])

    return (
        <div className={styles.sider}>
            <Box style={{ width: "80%", height: "40%", background: "var(--foreground)", borderRadius: "80px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px 0 20px 0", gap: "70px"}} >
                <div className="sider__logo">
                    <Tooltip title="Home">
                        <IconButton onClick={() => {window.location.href = "/"}}>
                           <HomeIcon className={`${styles.sider_button} ${homeIsActive ? styles.sider_button_active : styles.sider_button}`} style={{ width: "40px", height: "40px", transition: "all 0.2s ease-in-out" }}/>
                        </IconButton>
                    </Tooltip>
                </div>
                <div className="sider__logo">
                    <Tooltip title="Transactions">
                        <IconButton onClick={() => {window.location.href = "/transactions"}}>
                           <PaymentsIcon className={`${styles.sider_button} ${transactionsIsActive ? styles.sider_button_active : styles.sider_button}`} style={{ width: "40px", height: "40px", transition: "all 0.2s ease-in-out" }}/>
                        </IconButton>
                    </Tooltip>
                </div>
                <div className="sider__logo">
                    <Tooltip title="History">
                        <IconButton onClick={() => {window.location.href = "/history"}}>
                           <HistoryIcon className={`${styles.sider_button} ${historyIsActive ? styles.sider_button_active : styles.sider_button}`} style={{ width: "40px", height: "40px", transition: "all 0.2s ease-in-out" }}/>
                        </IconButton>
                    </Tooltip>
                </div>
            </Box>
        </div>
    );
}

export default Sider;