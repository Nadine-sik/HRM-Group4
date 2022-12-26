
import './button.css'

type Props={
     
}
const  Button  =  (props:  Props)  =>{
    return(
        
        <button className={`btn ${props.variant}`}>
            {props.children}

        </button>
    
    )
}
export default Button