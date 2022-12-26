
 //import Box from '@mui/material/Box';
  // import TextField from '@mui/material/TextField';
import './input.css'
type Props = {
    variant: "filled" | "outlined",
    label: string,
    supportText?: string,
    errorText?: string,
    onChange: (evt: Event)=>void
    
}
const Input = (props: Props) => {

    return(
     <div className={`text-field ${props.variant}`}>
       <label className='lab'>{props.label}</label>
       <input type="email" placeholder={props.label} className="input"/>
       <span>{props.supportText}</span>
       <span>{props.errorText}</span>
    </div>
      
         //<Box
           //component="form"
          // sx={{
           //  '& > :not(style)': { m: 1, width: '25ch' },
           //}}
          // onValidate
         //  autoComplete="off"
        // >
         //  <div   className='puts'>
          // <TextField id="outlined-basic" label="Email" variant="outlined" />
           //<TextField id="filled-basic" label="Password" variant="filled" />
          // <TextField id="standard-basic" label="Username" variant="standard" />
           //</div>
         //</Box>
      );
    }


export default Input