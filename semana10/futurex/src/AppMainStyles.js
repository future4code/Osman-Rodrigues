import styled from 'styled-components';

import {createMuiTheme}  from '@material-ui/core';

 export const theme = createMuiTheme({
    palette:{
        primary:{
            main:'#ff6347',
        },
        secondary:{
            main: '#00ff00'
        },
        error:{
            main: '#ff6347', 
        }
    }
})