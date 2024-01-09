import React from "react";
import ChildComponent from "./ChildComponent";

// const ParentComponent = () => {
//     const message = "Ahihihi"

//     return(
//         <ChildComponent message = {message}/>
//     )
// }

class ParentComponent extends React.Component{
    render(){
    const message = "Parent Message"

    return(
        <ChildComponent message = {message}/>
    )
    }
}

export default ParentComponent