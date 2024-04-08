import {Button,Container,Stack,styled,Box} from "@mui/material"
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box>
      <Navbar></Navbar>
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
    </Box>

  );
}

export default App;
