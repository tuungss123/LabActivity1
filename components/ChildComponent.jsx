import React from "react";

// const ChildComponent = (props) => {
//     return(
//     <div>
//         <p>{props.message}</p>
//     </div>
//     )
// }

class ChildComponent extends React.Component {
    render(){
    return(
    <div>
        <p>{this.props.message}</p>
    </div>
    )
    }
}
export default ChildComponent