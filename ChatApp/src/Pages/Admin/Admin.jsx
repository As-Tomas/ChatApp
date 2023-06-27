import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Admin() {
  const [chatname, setChatName] = useState();
  return (
    <div>
      <div className="border-2 border-black rounded-2xl h-auto w-60 mx-auto my-4">
        <div className="flex flex-row justify-between p-2 ">
          <Link
            className="border-2 border-black rounded bg-[#49ACF3] px-2 text-white"
            to={"/demoapp/chats"}
          >
            Chats
          </Link>
        </div>
      </div>
      <div className="border-2 border-black rounded-2xl min-h-[300px] max-h-screen w-60 py-2 mx-auto my-auto bg-[#E7DCB9] flex flex-col">
        <div className="flex flex-row justify-between pt-2">
          <input
            className="border-2 border-black rounded-2x text-center w-2/3 mx-auto rounded"
            type="text"
            value={"Room Name"}
            onChange={(e) => setChatName(e.target.value)}
          />
          <button className="border-2 border-black rounded bg-[#49ACF3] px-2 mx-auto text-white whitespace-nowrap overflow-hidden">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
