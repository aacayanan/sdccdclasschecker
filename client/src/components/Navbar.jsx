import React from 'react';
import { Settings } from 'lucide-react';

function Navbar() {
    return (
        <div className='bg-blue-500 py-1.5 flex-col justify-center items-center'>
            <div className='p-2.5 gap-2.5 justify-between items-center flex w-full px-10'>
                <div className='text-3xl text-white font-extrabold tracking-wider font-sans hidden sm:block ml-auto'>SDCCD CLASS CHECKER</div>
                <div className='text-white font-extrabold tracking-wider font-sans hidden lg:block ml-auto'>*NOT AFFILIATED WITH SDCCD*</div>
                    <Settings className='w-12 h-8 ml-auto' color='#FFFFFF'/>
            </div>
        </div>
    );
}

export default Navbar;