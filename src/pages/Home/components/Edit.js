import React from "react";
import { useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";

const Edit = ({ add, setDataSituation }) => {
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  function addItem() {
    setDataSituation.current = true;
    
    add(function (prev) {
      return [
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...prev,
      ];
    });

    setNote("");
    setDate("");
    setTime("");
  }
  return (
    <div className="border-b-4 border-white pb-5">
      <h1 className="text-center text-3xl font-sans pb-10 underline underline-offset-2">Notes</h1>
      
      <div className="felx flex-col justify-center ml-5">
        <div className="flex justify-start ">
        <p className="pr-3">Note:</p>
      <input
        type='text'
        name='edit'
        id='edit'
        value={note}
        onChange={noteChange}
        className="w-3/4"
      />
      </div>
      <div className="flex justify-start mt-4">
      <p className="pr-3">Date:</p>
      <input
        type='date'
        name='date'
        id='date'
        value={date}
        onChange={dateChange}
        className="w-3/4"
      />
      </div>
      <div className="flex justify-start mt-4">
      <p className="pr-3">Time:</p>
      <input
        type='time'
        name='time'
        id='time'
        value={time}
        onChange={timeChange}
        className="w-3/4"
      />
      </div>
      <div className="flex mt-5  ">
        <button className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded" onClick={addItem} >
        Add
      </button></div>
      
      </div>
    </div>
  );
};

export default Edit;
