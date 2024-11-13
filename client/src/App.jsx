import React from 'react';
import Navbar from "./components/Navbar.jsx";
import ClassCard from "./components/classcard/ClassCard.jsx";
import AddButton from "./components/AddButton.jsx";

let dataset = [
    {
        "PHYS 196 Electricity and Magnetism (81851)": {
            "DAYS": "M W",
            "OPEN_SEATS": 3,
            "WAITLIST": 0
        }
    },
    {
        "PHYS 196 Electricity and Magnetism (82243)": {
            "DAYS": "M W",
            "OPEN_SEATS": 12,
            "WAITLIST": 0
        }
    },
    {
        "MATH 245 Discrete Mathematics (81294)": {
            "DAYS": "M W",
            "OPEN_SEATS": 10,
            "WAITLIST": 0
        }
    },
    {
        "MATH 255 Differential Equations (81299)": {
            "DAYS": "T Th",
            "OPEN_SEATS": 6,
            "WAITLIST": 0
        }
    }
]

function App() {
    return (
        <div>
            <Navbar />
            <div className='w-screen min-h-screen bg-[#f2f2f2] flex flex-col justify-between'>
                <div className='px-[105px] py-[75px] justify-center gap-[50px] flex flex-wrap lg:justify-start'>
                    {dataset.map((entry, index) => {
                        const [courseName, courseData] = Object.entries(entry)[0];
                        return <ClassCard key={index} courseName={courseName} courseData={courseData}/>;
                    })}
                </div>
                <div className='justify-end p-[25px] items-center flex'>
                    <AddButton />
                </div>
            </div>
        </div>
    );
}

export default App;