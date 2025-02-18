import * as React from "react";

interface LanguageViewProps{
    items:string[];
}
const LanguageViewComponent: React.FC<LanguageViewProps> =({items})=>{
    return(
            <ul>
                {items.map((lang, index)=>(
                    // key is neccesary or error might occur
                    <li key={index}>{lang}</li>
                ))}
            </ul>
        
    )
}
export default LanguageViewComponent;