'use client';

import { Roboto } from "next/font/google";
import "../globals.css";
import Header from "@/components/header/header";
import Sider from "@/components/sider/sider";
import Content from "@/components/content/content";
import { Grid } from "@mui/material";
import AuthProvider from "../global-state/auth-provider";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"]
});

const metadata = {
  title: "Finance App",
  description: "Finance App For Personal Use"
};

export default function DashboardLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) router.push("/login");
  }, [router, isAuthenticated]);
  
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body style={{ fontFamily: roboto.style.fontFamily, height: "100vh"}}>
        <AuthProvider isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}>
          <Grid container>
            <Grid size={1}>
              <Sider />
            </Grid>
            <Grid size={11}>
              <Header />
              <Content children={children}/>
            </Grid>
          </Grid>
        </AuthProvider>
      </body>
    </html>
  );
}
