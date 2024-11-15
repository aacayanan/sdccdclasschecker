import React from 'react';
import ItemComponent from "./ItemComponent.jsx";

function ClassCard({courseName, courseData}) {
    return (
        <div className='w-auto max-w-md min-w-96 h-full bg-white flex flex-col'>
            <div className='justify-center p-2.5 inline-flex'>
                <div className='text-[#202020] text-2xl font-semibold tracking-wide'>
                    {courseName}
                </div>
            </div>
            {Object.entries(courseData).map(([key, value]) => (
                <ItemComponent key={key} item={key} value={value}/>
            ))}
        </div>
    );
}

export default ClassCard;