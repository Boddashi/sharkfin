'use client';

import { m } from 'framer-motion';
import IconButton from '@mui/material/IconButton';
import { useColorScheme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';

import { Iconify } from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
import { varTap, varHover, transitionTap } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function DarkModeButton({ sx, ...other }) {
  const settings = useSettingsContext();
  const { mode, setMode } = useColorScheme();

  const handleToggle = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    settings.setState({ colorScheme: newMode });
  };

  return (
    <IconButton
      component={m.button}
      whileTap={varTap(0.96)}
      whileHover={varHover(1.04)}
      transition={transitionTap()}
      aria-label="Dark mode toggle"
      onClick={handleToggle}
      sx={[{ p: 0, width: 40, height: 40 }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Tooltip title="Toggle dark mode">
        <Iconify 
          icon={settings.state.colorScheme === 'dark' ? 'ph:sun-bold' : 'ph:moon-bold'} 
          width={24} 
        />
      </Tooltip>
    </IconButton>
  );
} 