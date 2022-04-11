import { ShoppingBasket } from '@mui/icons-material';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react'
import BasketItem from './BasketItem';

const Basket = (props) => {
  const { open, order = [], remove, close } = props;

  return (
    <Drawer anchor='right' open={open} onClose={close}>
      <List sx={{width:'400px'}}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket/>
          </ListItemIcon>
          <ListItemText primary="Cart"/>
        </ListItem>
        <Divider/>

        {!order.length ? (
          <ListItem>cart is empty</ListItem>
        ) : (
          <>
            {order.map((item) => (
              <BasketItem key ={item.name} remove={remove} {...item}/>
            ))}
            <Divider/>
            <ListItem>
              <Typography sx={{fontWeight: '700'}}>
                Общая стоимость:{' '}
                {order.reduce((acc, item) => {
                    return acc + item.price * item.quantity;
                }, 0)}{' '}
                рублей.
              </Typography>
            </ListItem>
          </>
        )}

      </List>
    </Drawer>
  )
}

export default Basket