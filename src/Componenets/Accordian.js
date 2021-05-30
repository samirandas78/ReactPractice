import React from "react";
const Accordian = ({ items }) => {
  const renderedItem = items.map((item) => {
    return (
      <div key={item.title}>
        <div className="title active">
          {/* <i dropdown icon></i> */}
          {item.title}
        </div>

        <div className="content active">{item.content}</div>
      </div>
    );
  });
  return <div className="ui styled accordian">{renderedItem}</div>;
};
export default Accordian;
