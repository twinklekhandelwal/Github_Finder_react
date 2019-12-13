import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { render } from '@testing-library/react';
// export default function SimpleCard() {
  class Repo extends React.Component{
    
  render(){
    
  return ({repos.map((a)=>
    <Card  style={{minWidth:75}}>
      <CardContent>
        
      </CardContent>
      
    </Card>
  )});
}
  }
  export default Repo;
  // export default ({repos})=>{
  //   return {this.state.repos.map((a)=>
  //     <Card  style={{minWidth:75}}>
  //       <CardContent>
          
  //       </CardContent>
        
  //     </Card>
  //   )};
  //   }
