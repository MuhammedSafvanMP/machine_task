import React, { useState } from "react";

export default function Yester_day({ yesterDay, setYesterDay }) {
  const [input, setInput] = useState("");

  const handleClick = () => {

    // Today date minizing to find yesterday
    let yesterDayDate = new Date();
    yesterDayDate.setDate(yesterDayDate.getDate() - 1);

    // push yesterday date and value
    if (input !== "") {
      setYesterDay([...yesterDay, { date:  yesterDayDate.toDateString() , data: input }]);
    }
    setInput("");
  };


  return (
    <>
      <section className="yester-day">
        <h1>YESTERDAY</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleClick()}
        />
        <div className="box">
          {yesterDay ? (
            yesterDay?.map((value, index) => {
              return <h3 key={index}>{value.data}</h3>;
            })
          ) : (
            <p>No data </p>
          )}
        </div>
      </section>
    </>
  );
}
