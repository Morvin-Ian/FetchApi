import React from 'react'

const Button = ({buttonText, ReqType, SetReqType}) => {
    return (
     
            <button
                className={buttonText === ReqType ? "selected":null}
                onClick={()=> SetReqType(buttonText)}            
            >
            {buttonText}
          
            </button>
   
    )
}

export default Button;
