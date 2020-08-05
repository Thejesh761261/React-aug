import React from 'react';
import AllProducts from './product/allproducts';
import { Switch, Route } from "react-router-dom";
import Home from './home/home';
import Register from './register/register';
import Login from './login/login';
import Blogs from '../axios-blog/Blogs';
import Employees from '../employee-table/Employees';
import Friend from '../friends-axios/Friend';
import AddFriend from '../friends-axios/AddFriend';
import EditFriend from '../friends-axios/EditFriend';


class Content extends React.Component {
    state = {  }
    render() { 
        return ( 
        <div>
            Content component!
            <Switch>
                <Route exact path='/' component={Friend}></Route>    
                <Route path='/products' component={AllProducts}></Route>
                <Route path='/register' component={Register}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/blogs' component={Blogs}></Route>
                <Route path='/employees' component={Employees}></Route>
                <Route path='/addfriend' component={AddFriend}></Route>
                <Route path='/editfriend' component={EditFriend}></Route>

            </Switch>   
        </div>
         );
    }
}
 
export default Content;