import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchBar from 'material-ui-search-bar'
import { signOut as signOutAction } from '../../actions/userActions';

const Header = (props) => (
   <AppBar position="static">
     <Toolbar>
       <Typography variant="title" color="inherit">Checks</Typography>
       <SearchBar
          onChange={() => console.log('onChange')}
          onRequestSearch={() => console.log('onRequestSearch')}
          style={{
            marginRight: '0',
            marginLeft: 'auto',
            maxWidth: 800
          }}
        />
       <IconButton
          onClick={() => props.signOut()}
          color="inherit"
          style={{marginLeft: '20px'}}
        >
          <ExitToAppIcon/>
        </IconButton>
     </Toolbar>
   </AppBar>
)

export default connect(null, { signOut: signOutAction })(Header);
