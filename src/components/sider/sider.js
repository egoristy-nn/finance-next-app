import { Box } from "@mui/material";
import styles from "./sider.module.css";
const Sider = () => {
    return (
        <div className={styles.sider}>
            <Box style={{ width: "80%", height: "80%", background: "#171717", borderRadius: "80px"}} >
            </Box>
        </div>
    );
}

export default Sider;