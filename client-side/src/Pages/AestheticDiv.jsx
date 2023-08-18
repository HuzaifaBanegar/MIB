import { BaseDiv } from "../Components/Aesthetics/BaseDiv"
import { TopDiv } from "../Components/Aesthetics/Topdiv"

export const AestheticDiv=()=>{
    return (
        <div style={{position:'relative'}}>
            <div><BaseDiv/></div>
            <div style={{position:'absolute', bottom:'0px', right:'0px'}}> <TopDiv /></div>  
        </div>
       
    )
}