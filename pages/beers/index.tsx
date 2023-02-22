import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import RenderBeers from ".././components/RenderBeers";

const Home = () => (
  <Box sx={{ marginLeft: { md: 31.5, sm: 10, xs: 10 } }}>
    <Typography
      sx={{
        textAlign: 'center',
        fontSize: '90px',
        fontFamily: ' "Brush Script MT", cursive;',
        paddingTop: 10,
      }}
    >
      Beers
    </Typography>
    {/* <RenderBeers /> */}
  </Box>
);

export default Home;
