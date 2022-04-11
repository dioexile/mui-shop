import { Close } from "@mui/icons-material";
import { IconButton, ListItem } from "@mui/material";

const BasketItem = ({remove, id, name, price, quantity}) => {
    return (
        <ListItem>
            {name} {price}руб x{quantity}
            <IconButton
                className='btn btn-primary'
                onClick={() => remove(id)}
            >
            <Close/>
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;