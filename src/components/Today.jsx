import React, { useEffect, useState } from 'react';
import Blockers from './Blockers';
import Yester_day from './Yester-day';

function Today() {
    const [input, setInput] = useState("");
    const [blocks, setBlocks] = useState([]);
    const [today, setToday] = useState([
        // dummy datas for testing
        // { data: "Muhammed", date: "Fri Aug 23 2024" },
        // { data: "safvan", date: "Thu Aug 22 2024" },
        // { data: "safvan mp", date: "Thu Aug 22 2024" }
    ]);
    const [yesterDay, setYesterDay] = useState([]);

    const handleClick = () => {
        // Today date take
        let todayDate = new Date()
        todayDate.setDate(todayDate.getDate());

        // store the  date and value in today array
        if (input !== "") {
            setToday([...today, { date: todayDate.toDateString(), data: input }]);
        }
        setInput("");
    };

    // blocking today values its pushing to blocks array
    const handleBlock = (block) => {
        setBlocks([...blocks, block]);
        setToday([]);
    };

    // Today or Yesterday value checking
    useEffect(() => {

        // Today input  value date  camparing current date 
        const yesterday = today.filter(value => value.date !== new Date().toDateString());

        if (yesterday.length > 0) {
            // not match same its push yesterday array
            setYesterDay([yesterDay, ...yesterday]);
            // mach the date store in today array
            const todayData = today.filter(value => value.date ===  new Date().toDateString());
            setToday(todayData);
        }


    }, [today]);

    return (
        <>
            <Yester_day yesterDay = {yesterDay}  setYesterDay = {setYesterDay} />
            <section className='today'>
                <h1>TODAY</h1>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleClick()}
                />

                <div className='box'>
                    {today.map((value, index) => (
                        <div key={index}>
                            <h3>{value.data}</h3>
                        </div>
                    ))}
                    <button onClick={() => handleBlock(today)}>Block</button>
                </div>
            </section>
            <Blockers blocks={blocks.flat()} />
        </>
    );
}

export default React.memo(Today);
