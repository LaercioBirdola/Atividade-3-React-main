import './ButtonFatec.css' 

interface Props{
    type: 'submit' | 'button' | 'reset'
    label: string
}

function ButtonFatec({type,label}:Props){


    return(
        <button className='button-fatec'
        type={type}> 
            {label} 
        </button>
    )
}

export default ButtonFatec