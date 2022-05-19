import React from 'react'
import ListSingleData from './ListSingleData';


const Datalist = ({items}) => {
    return (
            <ul>
                {items.map((item)=>(

                  <ListSingleData item={item}/>

                ))}
            </ul>
    )
}

export default Datalist;
