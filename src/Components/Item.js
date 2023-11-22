import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

function Item(props) {
    const [done, setDone] = useState(false);

    return (
        <div
            onClick={() => setDone(!done)}
            className={'select-none w-full border-b p-3 flex justify-between items-center'}>

            <div>
                <span className='pr-2 text-[14px] text-slate-500'>
                    {props.time}
                    {/* 10:30 A.M */}
                </span>
                <span className={`${done === true ? 'line-through' : ''} text-[20px]`}>
                    {props.item}
                    {/* Testing */}
                </span>
            </div>
            <div onClick={() => props.removeHandler(props.id)}>
                <FaTrash className='text-sky-500'/>
            </div>
        </div>
    );
}

export default Item;
