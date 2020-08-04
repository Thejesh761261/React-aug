import React from 'react';
import './employee.css';

class Emp extends React.Component {
    state = {  }
    render() { 
        return ( 
                
                        <tr>
                        <td>{this.props.id}</td>
                        <td>{this.props.name}</td>
                        <td>{this.props.company}</td>
                        <td>{this.props.phone}</td>
                        </tr>
                   
           
         );
    }
}
 
export default Emp;