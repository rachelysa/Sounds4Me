import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

export function InputSearch({ addSearch, searchSounds }) {

    const [searchString, setSearchString] = useState('');

    return (
        <Box
            className='input-search'
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={() => { addSearch(searchString); searchSounds(searchString); }}
        >
            <TextField
                id="standard-search"
                label="Search"
                type="search"
                variant="standard"
                size="small"
                value={searchString}
                onChange={(ev) => { setSearchString(ev.target.value) }}
            />
            <Button variant="outlined" onClick={() => { addSearch(searchString); searchSounds(searchString); }}><SearchIcon /></Button>

        </Box>
    );
}
