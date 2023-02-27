import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Pagination from '@mui/material/Pagination';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { GridViewBeers } from '../GridViewBeers/index';
import { ListViewBeers } from '../ListViewBeers';
import { styles } from './styles';
import { Beer } from '../../types';

type View = 'listView' | 'gridView';

type HandleChangeProps = {
  event: ChangeEvent<EventProps>;
  value: number;
};

type EventProps = {
  value?: string;
};

export const RenderBeers = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [view, setView] = useState<View>('gridView');
  const [beers, setBeers] = useState(Array<Beer>);
  const [query, setQuery] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const allBeersUrl = `https://api.punkapi.com/v2/beers?page=${page}&per_page=10`;
  const queryBeersUrl = `https://api.punkapi.com/v2/beers?beer_name=${query}&per_page=10`;

  const getBeerData = (url: string) => {
    axios
      .get(url)
      .then((response) => {
        const beerData = response.data;
        setIsSearch(false);
        setBeers(beerData);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleSearchChange = (event: ChangeEvent<EventProps>) => {
    setQuery(event.target.value);
  };

  const handleChange = (event, value): HandleChangeProps => {
    setPage(value);
    router.push(`beers/?page=${value}`, undefined, { shallow: true });

    return null;
  };

  const handleSubmit = async (event: ChangeEvent<EventProps>) => {
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
    <Box sx={styles.beerPageContainer}>
      <Box>
        <FormControl sx={styles.searchForm} onSubmit={handleSubmit}>
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
          sx={styles.changeViewButton}
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
        <Box sx={styles.gridViewCardsContainer}>
          {view === 'gridView' ? <GridViewBeers beers={beers} /> : null}
        </Box>
        {view === 'listView' ? <ListViewBeers beers={beers} /> : null}
      </Box>

      {!isSearch && (
        <Stack sx={styles.paginationContainer} spacing={2}>
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

      <Snackbar open={!!errorMessage} autoHideDuration={6000}>
        <Alert severity="error">{errorMessage}</Alert>
      </Snackbar>
    </Box>
  );
};
