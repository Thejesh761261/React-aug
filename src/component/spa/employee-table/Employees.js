import React from 'react';
import axios from "axios";
import Emp from './Emp';
import './employee.css';


class Employees extends React.Component {

    state = {
        employees:[]
    }

    componentDidMount(){
        this.getEmployees();
    }


    renderEmp=()=>{
        return (
            
        this.state.employees.map(emp=>{
           return (
            
               <Emp key={emp.id} id={emp.id} name={emp.name} email={emp.email} company={emp.company.name} phone={emp.phone}></Emp>
               
             
           )
        })
        )
    }
  
    getEmployees(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                console.log(response.data);
                this.setState({employees:response.data})
                console.log(this.state.employees)
            },(error)=>{
                console.log(error);
            })
    }

    render() { 
        return ( 
            <span>
            <h1>List of Employees</h1>
            <table style={{border:"1px solid grey"}}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>company</th>
                            <th>phone</th>
                        </tr>

                    </thead>
                   <tbody>
                   {this.renderEmp()}
                   </tbody>
                </table>
       
        </span>
         );
    }
}
 
export default Employees;