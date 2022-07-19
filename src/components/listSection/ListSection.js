import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import ListItem from "./listItem/ListItem";
import { useSelector } from "react-redux/";

const ListSection = () => {
  const allBirthdayList = useSelector(
    (store) => store.birthdayReducer.birthdaysList
  );
  return (
    <div className="md:w-[80vw] lg:w-[60vw] flex flex-col justify-center max-h-[80vh]">
      <div
        className="w-[90vw] md:w-[60vw] lg:[50vw] h-auto rounded-xl md:rounded-3xl"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <div className="listSectionHeader">
          <h1 className="text-[#084887] font-bold text-xl border-b-2 border-[#084887] py-1">
            {allBirthdayList.length} Birthdays today
          </h1>
        </div>
        <div className="listSectionMain my-2 overflow-auto max-h-[60vh]">
          {allBirthdayList.map((item, index) => (
            <ListItem key={index} friend={item} index={index} />
          ))}
        </div>
        <div className="listSectionFooter w-full flex justify-center md:justify-between flex-wrap border-t-2 border-[#084887]">
          <div className="m-4">
            <Link to="/add-birthday">
              <Button label="Add Birthday" />
            </Link>
          </div>
          <div className="m-4">
            <Button label="All Birthdays List" />
          </div>
          <div className="m-4">
            <Button label="Clear All" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListSection;
