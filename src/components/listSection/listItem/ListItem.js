import React, { useEffect } from "react";
import useListItem from "./useListItem";

const ListItem = (props) => {
  const { friend, index } = props;
  const { getAge, cYear } = useListItem();
  useEffect(() => {
    getAge(friend.year, friend.month, friend.day);
  });

  return (
    <div className="border-b-[1px] border-[#084887] mx-5 flex flex-wrap justify-between items-center hover:bg-transparent">
      <span className="font-bold text-xl text-[#084887]">{index + 1}</span>
      <div className="left">
        <p className="font-semibold text-[#084887]">{friend.name}</p>
        <p>
          {friend.day}-{friend.month}-{friend.year}
        </p>
        <p>I'm {cYear - friend.year} years old</p>
      </div>
      <div className="right">
        <p>{friend.gender}</p>
        <a href={`https://wa.me/${friend.phone}`} className="tracking-wide">
          {friend.phone}
        </a>
      </div>
    </div>
  );
};

export default ListItem;
