import React from 'react';
import { Plus } from 'lucide-react';

function AddButton() {
    return (
        <button className='bg-[#2c2c2c] p-3 rounded-[50px] fixed bottom-10 right-8 z-5'>
            <Plus color='white' />
        </button>
    );
}

export default AddButton;