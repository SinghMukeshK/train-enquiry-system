import React from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SearchBar = ({ trains, getTrains, setTrain }) => {
    console.log(setTrain)
    return (
        <div>
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                onChange={(event, newValue) => setTrain(newValue)}
                options={trains.map(option => option.name)}
                renderInput={params => (
                    <TextField {...params} onChange={(event, selectedValue) => getTrains(event, selectedValue)} label="Train Name or Number" margin="dense" variant="outlined" fullWidth />
                )}
            />
        </div>
    )
}
export default SearchBar;