import React, {useEffect, useState} from 'react';
import Navbar from "./components/Navbar.jsx";
import ClassCard from "./components/classcard/ClassCard.jsx";
import AddButton from "./components/AddButton.jsx";

// let dataset = [
//     {
//         "PHYS 196 Electricity and Magnetism (81851)": {
//             "DAYS": "M W",
//             "OPEN_SEATS": 3,
//             "WAITLIST": 0
//         }
//     }
// ]
//
// let loading = false;

function App() {
    const [dataset, setDataset] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/data')
            .then(response => response.json())
            .then(data => {
                setDataset(data);    // Store the data in the state
                setLoading(false);      // Set loading to false
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <Navbar/>
            <div className='w-screen min-h-screen bg-[#f2f2f2] flex flex-col justify-between pt-[75px]'>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className='px-[105px] py-[75px] justify-center gap-[50px] flex flex-wrap md:justify-start'>
                        {dataset.map((entry, index) => {
                            const [courseName, courseData] = Object.entries(entry)[0];
                            return <ClassCard key={index} courseName={courseName} courseData={courseData}/>;
                        })}
                    </div>
                )}
                <AddButton/>
            </div>
        </div>
    );
}

export default App;