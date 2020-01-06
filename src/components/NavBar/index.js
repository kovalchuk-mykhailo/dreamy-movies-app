import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom';

const styles = {
  link: {
    color: "white",
    textDecoration: "none",
  }
}

function NavBar({ text }) {

  return (
    <div>
      <AppBar position="static">
        <Toolbar >
          <Typography variant="h5" >
            <Link to="/" style={styles.link} >
              {text}
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div >
  )
}
export default NavBar;