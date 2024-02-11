import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import { AppBar, Box, Toolbar, IconButton, Menu, Container, Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Doctors',
    path: '/doctors',
  },
];

export function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    console.log(event.currentTarget)
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(({ name, path }) => (
                <MenuItem key={name} onClick={handleCloseNavMenu}>
                  <MuiLink component={RouterLink} underline="none" key={name} to={path}>
                    {name}
                  </MuiLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({ name, path }) => (
              <Button key={name} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                <MuiLink component={RouterLink} underline="none" key={name} to={path}>
                  {name}
                </MuiLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
