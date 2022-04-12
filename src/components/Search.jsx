import TextField from '@mui/material/TextField';

const Search = (props) => {
    const { onChange, value } = props;
    return (

        <TextField id="filled-basic" label="search" variant="filled" sx={{mb: '50px'}} value={value} onChange={onChange}/>
    )
};

export default Search;