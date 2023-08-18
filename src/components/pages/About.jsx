import { Box, Stack, Paper, Button } from '@mui/material';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const About = () => (
  <Container>
    <Stack direction="column" alignItems="center" p={2} gap={3}>
      <Typography variant="h4" component="h2">
      アプリケーションの紹介
      </Typography>
      <Typography variant="subtitle1" component="h3">
      アプリケーションを紹介します
      </Typography>
      <Box>
        This App is Powered by Me
      </Box>
    </Stack>
  </Container>
);
