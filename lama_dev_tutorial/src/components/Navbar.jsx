import styled from '@emotion/styled'
import { Pets } from '@mui/icons-material';
import { AppBar, Toolbar, Typography ,Box, InputBase} from '@mui/material'
import {borderRadius} from "@mui/system"
import React from 'react'

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"

});

const Search = styled("div")(({theme}) =>({
    backgroundColor:"white",
    padding:"0 10px",
    width:"40%",
    //borderRadius:theme.shape.borderRadius
}))

const Icons = styled(Box)(({theme}) =>({
    backgroundColor:"white"
}))

const Navbar = () => {
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}> 
                    LAMA DEV
                </Typography>
                <Pets sx={{display:{xs:"block",sm:"none"}}}/>
                <Search><InputBase placeholder='Search...'></InputBase></Search>
                <Icons>Icons</Icons>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar