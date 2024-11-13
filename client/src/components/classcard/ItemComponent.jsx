import React from 'react';

function ItemComponent({item, value}) {
    return (
        <div className='h-12 justify-between items-start inline-flex gap-2.5'>
            <div className='p-2.5 justify-center items-center'>
                <div className='text-[#202020] text-xl font-semibold font-sans tracking-wide'>{item}:</div>
            </div>
            <div className='p-2.5 justify-center items-center'>
                <div className='text-[#202020] text-xl font-semibold font-sans tracking-wide'>{value}</div>
            </div>
        </div>
    );
}

export default ItemComponent;