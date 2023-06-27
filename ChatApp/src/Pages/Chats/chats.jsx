import { Link, useLocation } from "react-router-dom";

export default function chats() {
//   const location = useLocation();
//   const { username } = location.state;

  return (
    <div>
      <div className="border-2 border-black rounded-2xl h-auto w-60 mx-auto my-4">
        <div className="flex flex-row justify-between p-2 ">
          <Link
            className="border-2 border-black rounded bg-[#49ACF3] px-2 text-white"
            to={"/ChatApp/admin"}
          >
            Admin
          </Link>
          <Link
            className="border-2 border-black rounded bg-[#49ACF3] px-2 text-white"
            to={"/ChatApp/createchat"}
          >
            Add Room
          </Link>
        </div>
      </div>
      <div className="border-2 border-black rounded-2xl min-h-[300px] max-h-screen w-60 py-2 mx-auto my-auto bg-[#E7DCB9] flex flex-col">
        <div className="flex flex-col justify-between space-y-4">
          <button className="border-2 border-black rounded bg-[#49ACF3] px-2 w-3/4 mx-auto text-white whitespace-nowrap overflow-hidden">
            chat components
          </button>
        </div>
      </div>

      {/* {<div>
        <h2>Welcome, {username}!</h2>
      </div>} */}
    </div>
  );
}
