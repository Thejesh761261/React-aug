import React from 'react';


class FriendDetail extends React.Component {
   
    constructor(props){
        super(props)
        this.state ={
           
        }
       
    }

    deleteCurrentFriend=()=>{
        console.log("delete friend with id: " + this.props.id);
        this.props.deleteId(this.props.id)
    }

    editFriendWithId=()=>{
        console.log("edit friend with id: " + this.props.id);
        this.props.editId(this.props.id)
    }

    decrementSinceWithId=()=>{
       
        this.props.decSince(this.props.id,this.props.since);
    }

    incrementSinceWithId=()=>{
       
        this.props.incSince(this.props.id,this.props.since);
    }
  
    render() { 
        return ( 
            <tr>
                <td>{this.props.id} </td>
                <td>{this.props.name} </td>
                <td>{this.props.since}</td>
                <td>
                    <button onClick={this.incrementSinceWithId}>Since + </button>
                </td>
                <td>
                    <button onClick={this.decrementSinceWithId}>Since - </button>
                </td>
                <td>
                    <button onClick={this.editFriendWithId}>Edit</button>
                </td>
                <td>
                    <button onClick={this.deleteCurrentFriend}>Del</button>
                </td>
                
            </tr>    
        )
    }
       
}
 
export default FriendDetail;