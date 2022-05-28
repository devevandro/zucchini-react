import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import Toolbar from '@mui/material/Toolbar';
import { DRAWER_WIDTH } from '@/utils/drawerWidth';
import { regions } from '@/utils/regions';
import { AppBar, DrawerHeader, Main } from './styles';
import RadioTable from '../RadioTable';
import PlayerRadio from '../Player';

export default function DrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Rádios FM
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: DRAWER_WIDTH.WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH.WIDTH,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          {regions.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{<FolderIcon />}</ListItemIcon>
                <ListItemText style={{ color: 'red' }} primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <RadioTable rows={rows} />
        <PlayerRadio />
      </Main>
    </Box>
  );
}

const rows = [
  {
    name: 'RBN News',
    city: 'Macapá',
    state: 'AP',
    url: 'http://eu2.fastcast4u.com:3332/;',
    img: 'https://us0-cdn.onlineradiobox.com/img/logo/0/20100.v2.png',
  },
  {
    name: 'Marco Zero',
    city: 'Laranjal do Jari',
    state: 'AP',
    url: 'https://s06.maxcast.com.br:8102/live?id=943875716338',
    img: 'https://fmmarcozerojari.com/imagens/2f08e83beb35ff172e6d76e98be91851.png',
  },
  {
    name: 'Oiapoque FM',
    city: 'Oiapoque',
    state: 'AP',
    url: 'https://player-ssl.kshost.com.br:9664/live',
    img: 'https://www.guiademidia.com.br/imagens/radios/ap/radio-oiapoque-fm.png',
  },
  {
    name: 'FM 102',
    city: 'Macapá',
    state: 'AP',
    url: 'http://servidor21.brlogic.com:7754/live?1615319054948',
    img: 'https://img.radios.com.br/radio/lg/radio27_1611225148.png',
  },
  {
    name: 'Evangélica FM',
    city: 'Santana',
    state: 'AP',
    url: 'https://ssl.srvsh.com.br:23348/stream',
    img: 'https://www.guiademidia.com.br/imagens/radios/ap/web-radio-evangelica-fm.png',
  },
  {
    name: 'Laranjal FM',
    city: 'Laranjal do Jari',
    state: 'AP',
    url: 'http://162.210.196.145:39177/stream?1604786090740',
    img: 'https://img.radios.com.br/radio/lg/radio87431_1586343887.png',
  },
  {
    name: 'Rádio IPAD',
    city: 'Macapá',
    state: 'AP',
    url: 'http://stm11.conectastm.com:6986/stream',
    img: 'http://www.radioipad.com.br/admin/assets/img/logo.png',
  },
  {
    name: 'Web Rádio Verdade',
    city: 'Laranjal do Jari',
    state: 'AP',
    url: 'https://streaming05.zas.media:9105/live',
    img: 'https://www.ministerioverdade.com/wp-content/uploads/sites/9/2019/12/logotipo.png',
  },
  {
    name: '100 Web',
    city: 'Santana',
    state: 'AP',
    url: 'https://player.srvaudio.com.br/player-ssl/11474/;?1604786558625',
    img: 'https://www.guiademidia.com.br/imagens/radios/ap/radio-100-web.png',
  },
  {
    name: 'Desportiva FM',
    city: 'Macapá',
    state: 'AP',
    url: 'http://srv7.ipstm.net:15250/;',
    img: 'https://static.mytuner.mobi/media/tvos_radios/kutknkvgzbdw.jpg',
  },
  {
    name: 'Oiapoque FM',
    city: 'Oiapoque',
    state: 'AP',
    url: 'http://hts05.kshost.com.br:9664/stream?1613097035424',
    img: 'https://img.radios.com.br/radio/lg/radio40932_1565016557.jpg',
  },
  {
    name: 'Mix FM',
    city: 'Macapá',
    state: 'AP',
    url: 'https://shout25.crossradio.com.br:18132/1;?539185.5890079853',
    img: 'http://macapa.radiomixfm.com.br/wp-content/uploads/2017/10/logo-mix-rede-137x99.png',
  },
  {
    name: 'Fronteira FM',
    city: 'Oiapoque',
    state: 'AP',
    url: 'https://s09.maxcast.com.br:8126/live?id=1615319426421',
    img: 'https://www.guiademidia.com.br/imagens/radios/ap/radio-fronteira-fm-oiapoque.png',
  },
  {
    name: 'Onda Livre FM',
    city: 'Santana',
    state: 'AP',
    url: 'http://sv12.hdradios.net:7070/stream',
    img: 'http://www.radioondalivre105.com.br/admin/assets/img/locutores/padrao.png?img=March+9%2C+2021%2C+4%3A54+pm+30',
  },
];
