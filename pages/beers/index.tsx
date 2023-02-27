import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { RenderBeers } from '../../components/RenderBeers';
import { styles } from './styles';

const Home = () => (
  <Box>
    <Typography
      sx={styles.titleContainer}
    >
      Beers
    </Typography>
    <RenderBeers />
  </Box>
);

export default Home;
