import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import MenuItem from '@material-ui/core/MenuItem'
import { NavLink } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

class Header extends Component {
  navigate = (path, component) => {
    this.handleDrawerClose()
  }

  handleDrawerOpen = () => {
    this.setState({ drawerIsOpen: true })
  }

  handleDrawerClose = () => {
    this.setState({ drawerIsOpen: false })
  }

  constructor(props) {
    super(props)
    this.classes = props

    this.state = {
      drawerIsOpen: false,
    }
  }

  render() {
    return (
      <div className={this.classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={this.handleDrawerOpen} className={this.classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={this.classes.grow}>
            The Note App
          </Typography>
        </Toolbar>
      </AppBar>

      <ClickAwayListener onClickAway={this.handleDrawerClose}>
        <Drawer
          variant="persistent"
          classes={{paper: this.classes.drawerPaper}}
          open={this.state.drawerIsOpen}
        >
          <div className={this.classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>

          <MenuItem component={NavLink} to="/" onClick={this.handleDrawerClose}>Home</MenuItem>
          <MenuItem component={NavLink} to="/privacy" onClick={this.handleDrawerClose}>Privacy Policy</MenuItem>
          <MenuItem component={NavLink} to="/support" onClick={this.handleDrawerClose}>Support</MenuItem>
        </Drawer>
      </ClickAwayListener>
    </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
