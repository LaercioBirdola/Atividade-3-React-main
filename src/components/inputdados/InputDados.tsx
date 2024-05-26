import './inputDados.css' 

interface Props{
    type: 'text' | 'email' | 'number'
    label: string
}

function InputDados({type,label}:Props){


    return(
        <input className='input-fatec'
        type={type} placeholder={label}  />  
    )
}

export default InputDados