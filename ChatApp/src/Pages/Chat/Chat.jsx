import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Chat() {
  const [chatname, setChatName] = useState();
  return (
    <div>
      <div className="border-2 border-black rounded-2xl h-auto w-60 mx-auto my-4 bg-[#EDDADA]">
        <div className="flex flex-col justify-between p-2 ">
          <div className="inline-block">
            <Link
              className="border-2 border-black rounded bg-[#49ACF3] px-2  text-white"
              to={"/chats"}
            >
              Back
            </Link>
          </div>
        </div>
        <div className=" flex justify-between p-2">
          <div className=" inline-block border-2 border-black rounded bg-white px-2 ">
            User name
          </div>
          <div className=" inline-block border-2 border-black rounded bg-white px-2 ">
            Active
          </div>
        </div>
      </div>
      <div className="border-2 border-black rounded-2xl min-h-[300px] max-h-screen w-60 py-2 mx-auto my-auto bg-[#E7DCB9] flex flex-col">
        <div className="flex flex-row justify-between pt-2 px-2">
          <div className="border-2 border-black rounded-2x bg-[#E9E7E7] w-full px-1  mx-auto rounded">
            <div className="pl-4 py-2">
                User name
                </div>
            <div className="border border-black rounded bg-white mb-2 p-2 whitespace-normal">
              Message text
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
