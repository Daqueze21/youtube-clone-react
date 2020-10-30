import React from 'react';
import  './App.scss';
import {Grid} from '@material-ui/core';
import youtube from './api/youtube';
import { SearchBar, Video, VideoList, } from './components';

class App extends React.Component {
  onFormSubmit = (searchTerm) => {
    // const response = await youtube.get(searchTerm);
    
  };

  render() {
    return (
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid elevation={6} item xs={12}>
              <SearchBar onFormSubmit={this.onFormSubmit} />
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
