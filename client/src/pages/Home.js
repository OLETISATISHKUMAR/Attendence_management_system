import React from "react";
import Logo from "../assets/logo1.jpg";

function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-100  p-10 rounded-lg bg-gray-100">
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <img src={Logo} alt="Logo" className="max-w-full" />
          </div>
          <div className="w-1/2 p-10">
            <h1 className="text-3xl font-semibold mb-10 text-center">
              Attendance Management System
            </h1>
            <div className="space-x-2 flex">
              <button
                type="button"
                className="w-1/2 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Staff
              </button>
              <button
                type="button"
                className="w-1/2 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Student
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
