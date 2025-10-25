import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{
        constructor(props){
        super(props);
    }

    componentDidMount(){
    }
    render() {
        return(<div>
            {console.log(`parent render`)}
            <h1>About</h1>
            <h2>This is Namaste React Series</h2> 
            <UserClass 
            name= {"Nitin Garg (Class)"} 
            location={"Shivpuri"} 
            contact={"gargnitin5234@gmail.com"}
            />
            
        </div>)
    };
}






// const About = ()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Series</h2>
//             <UserClass 
//             name= {"Nitin Garg (Class)"} 
//             location={"Shivpuri"} 
//             contact={"gargnitin5234@gmail.com"}
//             />
//         </div>
//     );
// }





export default About;