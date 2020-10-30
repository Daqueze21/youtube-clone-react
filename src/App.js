import React from 'react';
import  './App.scss';
import {Grid} from '@material-ui/core';
import youtube from './api/youtube';
import { SearchBar, Video, VideoList, } from './components';

class App extends React.Component {
  state = {
    video:[],
    selectedVideo: null,
  };

  onFormSubmit = async searchTerm => {
    const response = await youtube.get('search', {
      q: searchTerm
    });
    console.log(searchTerm,  response.data);
    this.setState({video: response.data.item, selectedVideo: response.data.items[0]});
  };

  render() {
    const { selectedVideo } = this.state;
    return (
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.onFormSubmit} />
            </Grid>
            <Grid item xs={8}>
              <Video video = {selectedVideo}/>
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
