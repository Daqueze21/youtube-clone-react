import React from 'react';
import  './App.scss';
import {Grid} from '@material-ui/core';
import youtube from './api/youtube';
import { SearchBar, Video, VideoList, } from './components';

class App extends React.Component {
  logYoutube () {
    console.log('obj', youtube);
  }
  
  render() {
    return (
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar />
            </Grid>
            <Grid item xs={8}>
              <Video />
            </Grid>
            <Grid item xs={4}>
              <VideoList />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
