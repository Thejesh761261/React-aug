import React from "react"
import Header from "./spa/header/header";
import Content from "./spa/contentcontainer/content";

class RootComponent extends React.Component{

    

    render(){
        return (
            <div>
                <Header></Header>
                <Content></Content>
            </div>
        )
    }

}


export default RootComponent