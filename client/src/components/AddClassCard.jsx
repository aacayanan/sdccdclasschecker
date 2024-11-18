import React from 'react';

function AddClassCard(props) {
    return (
        <div className='bg-black bg-opacity-50 w-screen h-screen flex relative justify-center items-center'>
            <div className='bg-white flex flex-col z-5 h-min p-5 gap-5'>
                <div className='text-xl font-bold tracking-wide'>
                    Add / Remove Class
                </div>
                <div className=''>
                    <input type='number' placeholder='Course ID' className='border border-black p-1 rounded-md focus:outline-none'/>
                </div>
                <div className='flex gap-2.5'>
                    <button className='bg-red-700 text-white p-2 rounded-full w-full'>Remove</button>
                    <button className='bg-green-700 text-white p-2 rounded-full w-full'>Add</button>
                </div>
            </div>
        </div>
    );
}

export default AddClassCard;