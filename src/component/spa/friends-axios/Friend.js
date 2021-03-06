import React from 'react';
import axios from "axios";
import FriendDetail from './FriendDetail';

class Friend extends React.Component {

    constructor(props){
        super(props)
        this.state={
            friends:[],
            deleteSuccess:false,
            myid:0,
            since:0
        }
    }


    intializeState=()=>{
        setTimeout(()=>{
            this.setState({deleteSuccess: false})
        }, 2000)
    }

    componentWillMount(){
        this.getAllFriends()
    }

    componentDidMount(){
        console.log(this.props)    
    }

    getAllFriends=()=>{
        axios.get('http://localhost:3000/allfriends')
                .then(response=>{
                    console.log(response);
                    console.log(response.data)
                    this.setState({friends: response.data})
                    console.log(this.state.friends);
                }, error=>{
                    console.error(error);
                })
    }

    deleteFriendWithId=(id)=>{
        console.log('delete friend for received id: ' + id);
        axios.delete('http://localhost:3000/allfriends' + '/' + id)
                .then(response=>{
                     console.log(response)
                     //show deleteSuccess message
                     this.setState({deleteSuccess: true})
                     this.getAllFriends()
                     //remove deleteSuccess message after 2000 millisecond
                     this.intializeState()
                }, error=>{
                    console.error(error)
                })
    }

    renderAllFriends=()=>{
        return this.state.friends.map(friend=>{
            return(
              
                    <FriendDetail
                        key={friend.id}
                        id={friend.id}
                        name={friend.name}
                        since={friend.since}
                        deleteId={this.deleteFriendWithId}
                        editId={this.editFriendWithId}
                        incSince={this.incrementSince}
                        decSince={this.decrementSince}
                    >

                    </FriendDetail>
                
            )
        })
    }

    openAddFriend=()=>{
        this.props.history.push('/addfriend')
        //this.props.history.push('/editfriend')
    }

    incrementSince=(id, val)=>{
        console.log("id: "+id+" val: "+(parseInt(val)+1));
        let sin={
            "since": parseInt(val)+1
        }
        axios.patch('http://localhost:3000/allfriends/'+id,sin);
        this.getAllFriends();
        this.intializeState();
    }

    decrementSince=(id, val)=>{
        console.log("id: "+id+" val: "+(parseInt(val)-1));
        let sin={
            "since": parseInt(val)-1
        }
        axios.patch('http://localhost:3000/allfriends/'+id,sin);
        this.getAllFriends();
        this.intializeState();
    }

    editFriendWithId=(id)=>{
        this.setState({myid: id})
        console.log('Edit friend with id: ' + id);
        this.props.history.push({
                                    pathname: '/editfriend', 
                                    state: {myid: id}
                                })
    }

    getSearch=(e)=>{
        let searchV = e.target.value
        if(searchV==''){
            this.getAllFriends()
        }
        this.setState({searchValue: searchV})
        console.log(searchV);
        let searchF = this.state.friends.filter(f=>{
                                return f.name.toLowerCase().match(searchV.toLowerCase())
                            })
        console.log(searchF);    
        this.setState({friends: searchF})                

    }
  
    render() { 
        return ( 

            
               <div>
                   <div>
                       <label>Search: </label>
                       <input type="text" value={this.state.searchValue} onChange={this.getSearch}></input>
                       <br></br>
                       SearchValue: {this.state.searchValue}
            </div>
                    <button onClick={this.openAddFriend}>Add Friend</button>
                    <br></br>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Since</th>
                                <th colSpan='4'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                                {this.renderAllFriends()}
                        
                        </tbody>

                    </table>
                    {this.state.deleteSuccess &&
                    <div>
                          <h3>Friend deleted success!!!!</h3>  
                    </div>
                    }
                </div>
      
         );
    }
}
 
export default Friend;