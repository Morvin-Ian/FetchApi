import React from 'react'

const Datalist = ({items}) => {
    return (
        <div>
            <ul>
                {items.map((item)=>(

                    <li key={item.id}>
                        {item.title}
                    </li>

                ))}
            </ul>
        </div>
    )
}

export default Datalist;
