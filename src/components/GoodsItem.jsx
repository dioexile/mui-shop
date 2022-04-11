import { Card, CardContent, CardMedia, Grid } from '@mui/material';
import React from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const GoodsItem = (props) => {
    const [open, setOpen] = React.useState(false);

    const { name, price, setOrder, poster } = props;
    const addItem = () => {
        setOrder({
            id: props.id,
            name: props.name,
            price: props.price,
        })
        setOpen(true);
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };


    return (
        <Grid item xs={8} md={5} lg={4} sx={{mb: '50px'}}>
            <Card sx={{ height: '100%' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={poster}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" sx={{fontSize: '18px'}}>{name}</Typography>
                    <Typography variant='body1'>Цена: {price} руб.</Typography>
                </CardContent>
                    <CardActions>
                        <Button size="small" variant='outlined'
                            onClick={addItem}
                        >
                            Buy
                        </Button>
                    </CardActions>
            </Card>
            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    item added
                </Alert>
            </Snackbar>
        </Grid> 
    );
};

export default GoodsItem;