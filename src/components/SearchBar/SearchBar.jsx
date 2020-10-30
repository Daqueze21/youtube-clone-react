import React from 'react';
import styles from './SearchBar.module.scss';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
   state = {
      searchTerm: '',
      value: 1
   };

   handleChange = e => {
      this.setState({ searchTerm: e.target.value });
   };

   handleSubmit = e => {
      e.preventDefault();
      const {searchTerm, value} = this.state;
      const { onFormSubmit } = this.props;
      onFormSubmit(searchTerm);
   };

   render() {
      return (
         <Paper style={{ padding: '25px' }}>
         <form onSubmit={this.handleSubmit}>
            <TextField
               fullWidth
               variant='outlined'
               label='Search ...'
               onChange={this.handleChange}
            />
         </form>
         </Paper>
      );
   }
}

export default SearchBar;
