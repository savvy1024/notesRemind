import React from "react";
import Item from "./Item";

const List = ({ listData, deleteData, setDataSituation }) => {
  return (
    <div className='flex flex-col justify-start mt-5'>
      <h1 className="text-center text-3xl font-sans underline underline-offset-2">Notes List</h1>
      {listData.map((item) => {
        const { note, date, time, id } = item;
        return (
          <Item
            id={id}
            key={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
            setDataSituation = {setDataSituation}
          />
        );
      })}
    </div>
  );
};

export default List;
