import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularLoader() {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10rem" }}>
            <CircularProgress />
        </Box>
    );
}
