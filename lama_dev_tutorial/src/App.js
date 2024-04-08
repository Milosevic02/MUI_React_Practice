import {Button} from "@mui/material"
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';

function App() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button startIcon={<AddHomeWorkIcon/>} variant="contained">Contained</Button>
      <Button variant="contained" sx = {{
          backgroundColor:"skyblue",
          color :"#888",
          margin:5,
          "&:hover":{
            backgroundColor:"lightblue"
          }
      }}>My Unique Button</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}

export default App;
