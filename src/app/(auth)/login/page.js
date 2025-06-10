"use client";
import { Card, CardContent, Typography, Divider } from "@mui/material";
import styles from "./page.module.css"
import StyledInput from "@/components/input/StyledInput";
import StyledButton from "@/components/button/StyledButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/navigation';

const validateEmail = (email) =>
  !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function Login() {

    const router = useRouter();
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    
    const handleChange = e => {
        const { name, value } = e.target;
        setValues(prev => ({...prev, [name]: value}));
        
        if (name === 'email') {
            if (!validateEmail(value)) {
                setErrors(prev => ({...prev, email: 'Некорректный email'}));
            } else {
                delete errors.email;
                setErrors({...errors});
            }
        }
    };

    async function handleSubmit (event) {
        event.preventDefault();
        let newErrors = {};

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        const response = fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        
        
        if (!values.email) {
            newErrors.email = 'Необходимо ввести Email';
        } else if (!validateEmail(values.email)) {
            newErrors.email = 'Некорректный email';
        }
        
        if (!values.password) {
            newErrors.password = 'Необходимо ввести пароль';
        }
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                router.push('/');
            }, 2000);
        }
    };

    return (
            <html lang="en">
                <body>
                    <Card style={{backgroundColor: "var(--foreground)", color: "var(--font-color)", borderRadius: 15}} sx={{ width: 350 }}>
                        <CardContent style={{display: "flex", gap: 20, flexDirection: "column", alignItems: "center"}}>
                            <div style={{display: "flex", gap: 20, flexDirection: "column", alignItems: "center"}}>
                                <Typography variant="h4" style={{fontSize: 32}}>Авторизация</Typography>
                                <Divider style={{width: "100%", backgroundColor: "#303030"}}/>
                                <Typography variant="h6" style={{fontSize: 16}}>Введите данные</Typography>
                            </div>
                            <form onSubmit={handleSubmit} style={{display: "flex", gap: 20, flexDirection: "column", alignItems: "center", width: "100%"}}>
                                <StyledInput type="email" label="Email" variant="outlined" style={{width: "100%"}} name="email" value={values.email} onChange={handleChange} required error={errors.email} helperText={errors.email}/>
                                <StyledInput label="Пароль" variant="outlined" type="password" style={{width: "100%"}} name="password" value={values.password} onChange={handleChange} required error={errors.password} helperText={errors.password}/>
                                <StyledButton variant="outlined" style={{width: "100%"}} type="submit">{loading ? <CircularProgress size={24} color="inherit" /> : "Войти"}</StyledButton>
                            </form>
                            <div style={{display: "flex", gap: 10, flexDirection: "row", alignItems: "center"}}>
                                <FormControlLabel control={<Checkbox defaultChecked color="success"/>} label="Запомнить меня" />
                                <Typography className={styles.link} variant="h7"><Link href="/forgot-password">Забыли пароль?</Link></Typography>
                            </div>
                            <Divider style={{width: "100%", backgroundColor: "#303030"}}/>
                            <div style={{display: "flex", gap: 10, flexDirection: "row", alignItems: "center"}}>
                                <Typography variant="h6" style={{fontSize: 16}}>Нет аккаунта?</Typography>
                                <Typography className={styles.link} variant="h7"><Link href="/register">Зарегистрироваться</Link></Typography>
                            </div>
                        </CardContent>
                    </Card>
                </body>
            </html>
    );
}