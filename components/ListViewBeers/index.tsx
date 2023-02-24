import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from 'next/link';
import styles from './styles';
import { Beer } from '../../types';

type ListViewBeersProps = {
  beers: Array<Beer>
};

export const ListViewBeers = ({ beers }: ListViewBeersProps) => (
  <Box>
    <Table sx={{ maxWidth: 500 }} aria-label="simple table">
      <Box sx={{ ml: 2, mb: 4 }}>
        <TableHead>
          <TableRow sx={{ color: 'white', backgroundColor: 'white' }}>
            <Box>
              <TableCell
                sx={{
                  ...styles.tableCellHeader,
                  fontSize: 45,
                  pr: 6,
                }}
                align="center"
              >
                id
              </TableCell>
              <TableCell
                sx={{
                  ...styles.tableCellHeader,
                  paddingLeft: 7,
                  pr: 10,
                }}
                align="center"
              >
                name
              </TableCell>
              <TableCell
                sx={{
                  ...styles.tableCellHeader,
                  fontSize: 45,
                  paddingLeft: 14,
                  pr: 10,
                }}
                align="center"
              >
                abv
              </TableCell>
              <TableCell
                sx={{
                  ...styles.tableCellHeader,
                  width: 80,
                  paddingLeft: 5,
                  pr: 12,
                }}
                align="center"
              >
                first_brewed
              </TableCell>
              <TableCell
                sx={{
                  ...styles.tableCellHeader,
                  paddingLeft: 0,
                  paddingRight: 2,
                }}
                align="center"
              >
                contributed_by
              </TableCell>
            </Box>
          </TableRow>
        </TableHead>
      </Box>
      <TableBody>
        {beers.map((beer) => (
          <Box key={beer.id} sx={{ ml: 2 }}>
            <TableRow key={beer.name}>
              <Card sx={{
                width: '100%', m: 1.2, ml: 0, borderRadius: 10,
              }}
              >
                <Link href={`/beers/${beer.id}`}>
                  <CardActionArea>
                    <TableCell
                      sx={{
                        ...styles.tableCellItem,
                        fontSize: 15,
                      }}
                      align="center"
                    >
                      {beer.id}
                    </TableCell>
                    <TableCell
                      sx={{
                        ...styles.tableCellItem,
                        width: 283,
                      }}
                      align="center"
                    >
                      {beer.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        ...styles.tableCellItem,
                        width: 240,
                        fontSize: 21,
                      }}
                      align="center"
                    >
                      {beer.abv}
                      %
                    </TableCell>
                    <TableCell
                      sx={{
                        ...styles.tableCellItem,
                        width: 240,
                      }}
                      align="center"
                    >
                      {beer.first_brewed}
                    </TableCell>
                    <TableCell
                      sx={{
                        ...styles.tableCellItem,
                        width: 300,
                        pl: 5,
                      }}
                      align="center"
                    >
                      {beer.contributed_by}
                    </TableCell>
                  </CardActionArea>
                </Link>
              </Card>
            </TableRow>
          </Box>
        ))}
      </TableBody>
    </Table>
  </Box>

);
