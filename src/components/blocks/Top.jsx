import { Box, Stack, Paper, Button } from '@mui/material';
import { Container, Typography } from '@mui/material';

export const Top = () => (
  <Container>
    <Box p={2}>
      <Paper elevation={5} sx={{ width: '100%' }}>
        <Stack direction="column" alignItems="center" p={2} gap={3}>
          <Typography variant="h4" component="h2">
            TOP
          </Typography>
          <Typography variant="subtitle1" component="h3">
            This is Top
          </Typography>
          <Box>Enjoy</Box>
        </Stack>
      </Paper>
    </Box>
  </Container>
);
