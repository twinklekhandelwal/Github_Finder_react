import React from 'react';
import { TextField, Paper } from '@material-ui/core';
// import { blue } from '@material-ui/core/colors';

class Finder extends React.Component{
	// constructor(props){
	// 	super(props)
		
			state={query:""}
		
	

	handleInputChange = (e) => {
		this.setState({
			 query: e.target.value
			
		})
		
	}
render() {
  return(
      // <h1>twinkle</h1>
	// <input type="text" name="firstname"/>
	<div>
  <Paper elevation={6} style={{ padding: '15px', margin: '15px', backgroundColor:'#24292e'}}>
				<form >
					<TextField fullWidth label="search..." onChange={this.handleInputChange}></TextField>

				</form>

			</Paper>
			</div>
			
		);
    
  
}

}
export default Finder;