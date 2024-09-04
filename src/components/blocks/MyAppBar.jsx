import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import { Box, Stack, Typography, Paper } from '@mui/material';
import { AppBar, Toolbar, InputBase, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export const MyAppBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton component={Link} to={'/'} color="inherit">
          <HomeIcon size="large" />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, ml: 2, display: { sm: 'block' } }}
        >
          XXXXアプリ
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
