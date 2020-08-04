import React from 'react';
import axios from "axios";
import Blog from "./Blog";

class Blogs extends React.Component {

    state = {
        allBlogs:[]
    }

    componentDidMount(){
        this.getBlogs();
    }

    deleteBlogWithId=(id)=>{

        let tempBlogs=this.state.allBlogs.filter(blog=>{
            return blog.id !== id;
        })

        this.setState({allBlogs:tempBlogs});



    }

    renderBlog=()=>{
        return (
        this.state.allBlogs.map(blog=>{
           return (
               <Blog key={blog.id} id={blog.id} title={blog.title} body={blog.body} deleteId={this.deleteBlogWithId}></Blog>
           )
        })
        )
    }
  
    getBlogs(){
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then((response)=>{
                console.log(response.data);
                this.setState({allBlogs:response.data})
                console.log(this.state.allBlogs)
            },(error)=>{
                console.log(error);
            })
    }

    render() { 
        return ( 
            <span>
            <h1>List of blogs</h1>
        {this.renderBlog()}
        </span>
         );
    }
}
 
export default Blogs;