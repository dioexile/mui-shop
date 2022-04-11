import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {ShoppingBasket } from '@mui/icons-material';
import Badge from '@mui/material/Badge';

const Header = ({handleCart, orderCount}) => {
  return (
    <AppBar position="static" >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Shop
        </Typography>
        <IconButton color='inherit' onClick={handleCart}>
          <Badge color='secondary' badgeContent={orderCount}>
            <ShoppingBasket/>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header