import React from 'react';
import ItemComponent from "./ItemComponent.jsx";

function ClassCard() {
    return (
        <div className='w-[270px] bg-white flex flex-col '>
            <div className='justify-center p-2.5 inline-flex'>
                <div className='text-[#202020] text-2xl font-semibold tracking-wide'>
                    Class Name
                </div>
            </div>
            <ItemComponent item={"Item"} value={"Value"}/>
            <ItemComponent item={"Item"} value={"Value"}/>
            <ItemComponent item={"Item"} value={"Value"}/>
        </div>
    );
}

export default ClassCard;