import * as React from "react";

interface LightRoomProps{
    status:boolean;
}
const LightRoom:React.FC<LightRoomProps> = ({status})=>{
    if (status){
        return(
            // <img style={{width:'100px'}} src="on.png" alt=""/>
            <h1>Light On</h1>
        )
    }else{
        return (
            // <img style={{width:'100px'}} src="off.png" alt=""/>
            <h1>Light Off</h1>
        )
    }
}
export default LightRoom;