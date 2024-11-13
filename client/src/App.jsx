import React from 'react';
import Navbar from "./components/Navbar.jsx";
import ClassCard from "./components/classcard/ClassCard.jsx";

function App(props) {
    return (
        <div className='bg-[#f2f2f2] h-screen'>
            <Navbar />
            <ClassCard />
        </div>
    );
}

export default App;