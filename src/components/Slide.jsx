import { Box } from '@mui/system'
import { Slider } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    principal: {
      main: '#2F327D',
      
    },
  }
});


const Slide = () => {
  return (
        <ThemeProvider theme={theme}>

    <Box >
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" color = "principal"/>
      </Box>
      </ThemeProvider>
  )
}

export default Slide