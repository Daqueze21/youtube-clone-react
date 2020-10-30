import React from 'react';
// import styles from './SearchBar.module.scss';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
   state = {
      searchTerm: '',
   };

   handleChange = e => {
      this.setState({ searchTerm: e.target.value });
   };

   handleSubmit = e => {
      e.preventDefault();
      const {searchTerm} = this.state;
      const { onFormSubmit } = this.props;
      onFormSubmit(searchTerm);
   };

   render() {
      return (
        <Paper style={{ padding: '25px' }} elevation={6}>
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
