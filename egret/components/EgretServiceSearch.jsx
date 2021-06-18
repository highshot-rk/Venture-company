import React, { useState } from "react";
import { List, ListItem, ListItemText, TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const EgretServiceSearch = props => {
  const { options } = props;
  const [value, setValue] = useState('')
  const [search, setSearch] = useState('')

  return (
    <div className="service-search">
      <TextField
        className="input-search"
        placeholder={'Search'}
        variant="outlined"
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <List component="nav" className="service-list">
        {options.filter((f) => f.toLowerCase().includes(search.toLowerCase())).map((item, index) => (
          <ListItem
            key={index}
            button
            selected={item === value}
            onClick={(event) => setValue(item)}
          >
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default EgretServiceSearch;
