import Yellow from '../../utils/imgs/yellowsofa.png'
import Blue from '../../utils/imgs/bluesofa.png'
export const TopDiv=()=>{
    return(
        <div style={{display:'flex', width:'90%'}}>
            <div style={{width:'50%'}}>
                <img src={Blue} style={{width:'100%'}}/>
            </div>
            <div style={{width:'50%'}}>
            <img src={Yellow} style={{width:'100%'}}/>
            </div>
        </div>
    )
}