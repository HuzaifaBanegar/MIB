import { BaseDiv } from "../Components/Aesthetics/BaseDiv"
import { TopDiv } from "../Components/Aesthetics/Topdiv"

export const AestheticDiv=()=>{
    return (
        <div style={{position:'relative', paddingBottom:'40px', background:'white'}}>
            <div><BaseDiv/></div>
            <div style={{position:'absolute', bottom:'40px', right:'0px'}}> <TopDiv /></div>  
        </div>
       
    )
}