"use client";
import { Card, CardContent, Typography, Divider } from "@mui/material";
import styles from "./page.module.css"
import StyledInput from "@/components/input/StyledInput";
import StyledButton from "@/components/button/StyledButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";


export default function Auth() {
    return (
            <html lang="en">
                <body>
                    <Card style={{backgroundColor: "#1a1a1a", color: "#fff", borderRadius: 15}} sx={{ width: 350 }}>
                        <CardContent style={{display: "flex", gap: 20, flexDirection: "column", alignItems: "center"}}>
                            <div style={{display: "flex", gap: 10, flexDirection: "column", alignItems: "center"}}>
                                <Typography variant="h4" style={{fontSize: 32}}>Авторизация</Typography>
                                <Divider style={{width: "100%", backgroundColor: "#303030"}}/>
                                <Typography variant="h6" style={{fontSize: 16}}>Введите данные</Typography>
                            </div>
                            <StyledInput label="Email" variant="outlined" style={{width: "100%"}}/>
                            <StyledInput label="Пароль" variant="outlined" type="password" style={{width: "100%"}}/>
                            <StyledButton variant="outlined" style={{width: "100%"}}>Войти</StyledButton>
                            <div style={{display: "flex", gap: 10, flexDirection: "row", alignItems: "center"}}>
                                <FormControlLabel control={<Checkbox defaultChecked color="success"/>} label="Запомнить меня" />
                                <Typography className={styles.link} variant="h7"><Link href="/forgot-password">Забыли пароль?</Link></Typography>
                            </div>
                        </CardContent>
                    </Card>
                </body>
            </html>
    );
}