import React from "react";
import { IF } from "../url";
const Slider = ({ s }) => {
  console.log(s);
  const slicer = s.slice(0, 3);
  console.log(slicer);
  return (
    <>
      {slicer.map((item) => (
        <>
          <img
            key={item._id}
            src={IF + item.photo}
            className="w-full mx-auto mt-8"
            alt=""
          />
        </>
      ))}
    </>
    // <div>
    //   <img src={IF + s.photo} className="w-full mx-auto mt-8" alt="" />
    //   <div>
    //     <h1 className="mb-1 text-xl font-bold md:mb-2 md:text-2xl">
    //       {s.title}
    //     </h1>
    //     <div className="flex items-center justify-between mb-2 text-sm font-semibold text-gray-500 md:mb-4">
    //       <p>@{s.username}</p>
    //       <div className="flex space-x-2 text-sm">
    //         <p>{new Date(s.updatedAt).toString().slice(0, 15)}</p>
    //         <p>{new Date(s.updatedAt).toString().slice(16, 24)}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Slider;
