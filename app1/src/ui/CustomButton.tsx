import {Button} from "@mui/material";
import * as React from "react";

interface CustomButtonProps{
    label:string;
    onClick:()=>void;
    style?:React.CSSProperties;
    otherData?:object;
}

const CustomButton=({label,onClick}:CustomButtonProps)=>{
    return (
        <Button
            variant="contained"
            onClick={onClick}
        >{label}</Button>
    )
}
export default CustomButton;