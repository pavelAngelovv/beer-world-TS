import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import SearchIcon from '@mui/icons-material/Search';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { GridViewBeers } from './GridViewBeers/index';
import { ListViewBeers } from './ListViewBeers';

const myAlert = (props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
);

const Alert = React.forwardRef(myAlert);

export const RenderBeers = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [view, setView] = useState('gridView');
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const allBeersUrl = `https://api.punkapi.com/v2/beers?page=${page}&per_page=10`;
  const queryBeersUrl = `https://api.punkapi.com/v2/beers?beer_name=${query}&per_page=10`;

  const handleClose = (closeEvent, reason) => {
    if (reason === 'clickaway') {
      return null;
    }

    return setOpen(false);
  };

  const getBeerData = (url) => {
    axios
      .get(url)
      .then((response) => {
        const beerData = response.data;
        setIsSearch(false);
        setBeers(beerData);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setOpen(true);
      });
  };

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event, value) => {
    setPage(value);
    router.push(`beers/?page=${value}`, undefined, { shallow: true });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (query === '') {
      router.push('beers', undefined, { shallow: true });

      return getBeerData(allBeersUrl);
    }

    return getBeerData(queryBeersUrl);
  };

  useEffect(() => {
    getBeerData(allBeersUrl);
  }, [allBeersUrl, page]);

  return (
    <Box
      sx={{
        width: {
          lg: '130%',
          md: '100%',
        },
      }}
    >
      <Box>
        <FormControl
          sx={{
            display: 'inline-block',
            pb: 10,
            ml: {
              lg: 5,
              md: 10,
              sm: 10,
              xs: 7,
            },
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            id="input-search"
            size="medium"
            label="Search Beers"
            variant="filled"
            InputProps={{ disableUnderline: true }}
            sx={{ backgroundColor: 'white', borderRadius: 10 }}
            value={query}
            onChange={handleSearchChange}
          />

          <Button onClick={handleSubmit} type="submit">
            <Avatar sx={{ width: 50, height: 50 }}>
              <SearchIcon />
            </Avatar>
          </Button>
        </FormControl>
        <ToggleButtonGroup
          orientation="horizontal"
          exclusive
          sx={{ backgroundColor: 'white', float: 'right', mr: 7 }}
        >
          <ToggleButton
            onClick={() => {
              setView('gridView');
            }}
            value="module"
            aria-label="module"
          >
            <ViewModuleIcon />
          </ToggleButton>
          <ToggleButton
            onClick={() => {
              setView('listView');
            }}
            value="list"
            aria-label="list"
          >
            <ViewListIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <Box
          width="100%"
          sx={{
            pl: {
              lg: 0,
              md: 0,
              sm: 5,
              xs: 5,
            },
            ml: {
              lg: 0,
              md: 25,
              sm: 5,
              xs: 0,
            },
          }}
        >
          {view === 'gridView' ? <GridViewBeers beers={beers} /> : null}
        </Box>
        {view === 'listView' ? <ListViewBeers beers={beers} /> : null}
      </Box>

      {!isSearch && (
        <Stack
          sx={{
            color: '#ffffff',
            flexWrap: 'wrap',
            alignItems: 'center',
            marginTop: '1rem',
            textAlign: 'center',
          }}
          spacing={2}
        >
          <Typography>
            Page:
            {' '}
            {page}
          </Typography>
          <Pagination
            color="primary"
            count={33}
            page={page}
            onChange={handleChange}
            sx={{ button: { color: 'white' } }}
          />
        </Stack>
      )}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};
