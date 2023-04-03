import React from "react";

const Item = ({ id, note, date, time, deleteData, setDataSituation }) => {
  function deleteItem() {
    setDataSituation.current = true;

    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }
  return (
    <div className='flex flex-row justify-between border-b-2 border-collapse border-black pt-5 '>
      <div>
        <p className="font-bold text-lg">{note}</p>
        <p>{`${date}  -  ${time}`}</p>
      </div>
      <div>
      <button className=' bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded' onClick={deleteItem}>
        Delete
      </button>
      </div>
    </div>
  );
};

export default Item;
