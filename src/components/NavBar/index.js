import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

function NavBar(props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar >
          <Typography variant="h5" style={{ color: "white" }}>
            {props.text}
          </Typography>
        </Toolbar>
      </AppBar>
    </div >
  )
}
export default NavBar;