import {Button,styled} from "@mui/material"
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';

function App() {
  const BlueButton = styled(Button)(({theme})=>({
    backgroundColor:"skyblue",
    color :"#888",
    margin:5,
    "&:hover":{
      backgroundColor:"lightblue"
    },
    "&:disabled":{
      backgroundColor:"red",
      color:"white"
    }
  }))
  return (
    <div>
      <Button variant="text" color="otherColor">Text</Button>
      <Button color="otherColor" startIcon={<AddHomeWorkIcon/>} variant="contained">Contained</Button>
      <Button variant="contained"  sx = {{

      }}>My Unique Button</Button>
      <Button color="otherColor" variant="outlined">Outlined</Button>
      <BlueButton>Prvooo</BlueButton>
      <BlueButton>Drugoo</BlueButton>
    </div>
  );
}

export default App;
