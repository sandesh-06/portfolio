import React from "react";
import { IoSchoolSharp } from "react-icons/io5";
const DetailsCard = ({ institution, degree, duration, location, marks }) => {
  return (
    <div className="max-w-lg mx-auto mb-8 px-6 md:px-0">
      <div className="relative border-l border-gray-700 pb-8 px-4 md:px-8">
        <div className="absolute left-0 top-0 -ml-5 flex justify-center items-center h-10 w-10 bg-gradient-to-br from-cyan-700 to-blue-700 rounded-full">
          <IoSchoolSharp size={"25px"} />
        </div>
        <div className="pt-2 ml-4 md:ml-8">
            <div className="text-slate-200 mb-3 font-nunito font-semibold">
                <span className="bg-slate-800 rounded-2xl py-1 px-2 opacity-85 text-sm">{duration}</span>
            </div>
          <div className="flex justify-between items-center">
            <div className="">
              <h3 className="text-lg font-semibold text-gray-200">
                {institution}
              </h3>
              <p className="text-gray-400">{degree}</p>
              <p className="text-gray-500 text-sm font-bold">{marks}</p>
            </div>
            <div className="text-gray-400 ml-4 md:ml-5 md:text-right">
              <p className="text-sm">{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
