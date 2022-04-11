import { useState } from 'react';
import GoodsList from './GoodsList';
import Search from './Search';
import Container from '@mui/material/Container';
import { goods } from '../data/goods';
import Header from './Header';
import Basket from './Basket';

const App = () => {
    const [order, setOrder] = useState([]);
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState(goods);
    const [open, setOpen] = useState(false);

    const handleChange = (e) => {
        if (!e.target.value) {
            setProducts(goods);
            setSearch('');
            return;
        }

        setSearch(e.target.value);
        setProducts(
            products.filter((good) =>
                good.name.toLowerCase().includes(e.target.value.toLowerCase())
            ))
    };

    const addToOrder = (goodsItem) => {
        let quantity = 1;

        const indexInOrder = order.findIndex(
            (item) => item.id === goodsItem.id
        );

        if (indexInOrder > -1) {
            quantity = order[indexInOrder].quantity + 1;

            setOrder(order.map((item) => {
                    if (item.id !== goodsItem.id) return item;

                    return {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        quantity,
                    };
                }),
            );
        } else {
            setOrder([
                    ...order,
                    {
                        id: goodsItem.id,
                        name: goodsItem.name,
                        price: goodsItem.price,
                        quantity,
                    },
                ],
            );
        }
    };

    const remove = (goodsItem) => {
        setOrder(order.filter((item) => item.id !== goodsItem));
    };

    return (
        <div className='App'>
            <Header 
                handleCart={()=>{setOpen(true)}}
                orderCount = {order.length} 
            />
            <Container sx={{mt: '50px'}}>
                <Search
                    value={search}
                    onChange={handleChange}

                />
                <GoodsList
                    goods={products}
                    setOrder={addToOrder}
                />
            </Container>
            <Basket open={open} close={()=>{setOpen(false)}} order={order} remove={remove}/>
        </div>
    );
}

export default App;
