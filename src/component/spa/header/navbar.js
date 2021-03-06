import React from 'react';
import { Link } from 'react-router-dom';


class NavigationBar extends React.Component {
    
    render() { 
        const menuitem = {
            color:"red",
            backgroundColor:"pink",
            display:'inline',
            padding: '10px',
            margin: '5px'
            
        }


        return (  
            <span>
                <ul style={{listStyleType:'none'}}>
                    <li style={menuitem}>
                        <Link to="/" style={{ textDecoration:'none'}}>Home</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to="/products" style={{ textDecoration:'none'}}>Products</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to="/register" style={{ textDecoration:'none'}}>Register</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to="/login" style={{ textDecoration:'none'}}>Login</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to="/blogs" style={{ textDecoration:'none'}}>Blog api</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to="/employees" style={{ textDecoration:'none'}}>Employee</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to="/addfriend" style={{ textDecoration:'none'}}>Add Friend</Link>
                    </li>
                </ul>
            </span>

        );
    }
}
 
export default NavigationBar;