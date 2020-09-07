import React, { useState } from 'react'
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FavoriteIcon from '@material-ui/icons/Favorite'

import { GrowRemainingSpace, AccountIcon, DrawerList, SearchWrapper, SearchIconWrapper } from './NavBar.styled'
import { IProps } from './NavBar.typed';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }),
);

export default function NavBar({ setOpen }: IProps) {
  const classes = useStyles();
  const [isDrawerOpen, setDrawer] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return
    }

    setDrawer(open);
  }

  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleDrawer(true)} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            Awesome Player
        </Typography>
          <SearchWrapper>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <InputBase
              placeholder="Search videos..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </SearchWrapper>
          <GrowRemainingSpace />
          <AccountIcon>
            <IconButton edge="end" aria-label="account of current user" onClick={handleOpen} color="inherit">
              <AccountCircle />
            </IconButton>
          </AccountIcon>
        </Toolbar>
      </AppBar>
      <Drawer anchor='left' open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <DrawerList role='presentation' onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            <ListItem button selected>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary='Favorites' />
            </ListItem>
          </List>
        </DrawerList>
      </Drawer>
    </>
  )
}