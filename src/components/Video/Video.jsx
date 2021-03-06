import React from 'react';
// import styles from './Video.module.scss';
import { Paper, Typography } from '@material-ui/core';

const Video = ({video}) => {
   console.log('video', video);
   if(!video) return <div>Loading...</div>

   const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
   
   return (
     <React.Fragment>
       <Paper elevation={6} style={{ height: '70%' }}>
         <iframe
           src={videoSrc}
           frameBorder='0'
           title='Video'
           width='100%'
           height='100%'></iframe>
       </Paper>
       <Paper elevation={6} style={{ padding: '15px' }}>
         <Typography variant='h5'>{video.snippet.title}</Typography>
         <Typography variant='subtitle1'>
           {video.snippet.channelTitle}
         </Typography>
         <Typography variant='subtitle2'>
           {video.snippet.description}
         </Typography>
       </Paper>
     </React.Fragment>
   );
}

export default Video;
