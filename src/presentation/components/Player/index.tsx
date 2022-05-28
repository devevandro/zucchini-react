import { Grid } from '@mui/material';
import { Container } from './styles';

export default function PlayerRadio() {
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          teste
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          testes
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          testess
        </Grid>
      </Grid>
    </Container>
  );
}
