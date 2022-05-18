import React from 'react'
import Button from './Button';

const Form = ({ReqType, SetReqType}) => {
    return (
        <form onSubmit={(e)=>e.preventDefault()}>

            <Button
                buttonText="Users"
                ReqType={ReqType}
                SetReqType={SetReqType}
            />
              <Button
                buttonText="Posts"
                ReqType={ReqType}
                SetReqType={SetReqType}
            />
              <Button
                buttonText="Comments"
                ReqType={ReqType}
                SetReqType={SetReqType}
            />
        </form>
    )
}

export default Form;
