import { Roboto } from "next/font/google";
import "../../globals.css";
import Header from "@/components/header/header";
import Sider from "@/components/sider/sider";
import Content from "@/components/content/content";
import { Grid } from "@mui/material";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"]
});

export const metadata = {
  title: "Finance",
  description: "Finance App For Personal Use",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: roboto.style.fontFamily, height: "100vh"}}>
        <Grid container>
          <Grid size={1}>
            <Sider />
          </Grid>
          <Grid size={11}>
            <Header />
            <Content children={children}/>
          </Grid>
        </Grid>
      </body>
    </html>
  );
}