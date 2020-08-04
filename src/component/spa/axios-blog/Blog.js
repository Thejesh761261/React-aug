import React,{ Component } from 'react';

class Blog extends Component {
    state = {  }

    deleteClick=(id)=>{
        console.log('delete this blog with id: ' + this.props.id)
        this.props.deleteId(this.props.id);
    }
    render() { 
        
        return ( 
            <span>
                <h2>{this.props.id} {this.props.title}</h2>
                <h6>{this.props.body}</h6>
                <button>Edit</button>&nbsp;
                 <button onClick={this.deleteClick}>Delete</button>
            </span>
         );
    }
}
 
export default Blog;