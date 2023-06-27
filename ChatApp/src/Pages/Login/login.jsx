import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const demoUsername = "demo";
    const demoPassword = "password";

    navigate("/demoapp/chats", { state: { username, password } });
    // if (username === demoUsername && password === demoPassword) {
    //   setLoggedIn(true);
    //   navigate("/demoapp/chats", { state: { username, password } });
    // } else {
    //   console.log("Invalid username or password");
    // }
  };

  return (
    <div className="border-2 list-none border-black rounded-2xl h-64 w-60 mx-auto my-auto bg-[#E7DCB9] flex flex-col">
      <div className="mx-auto text-center py-5 font-bold">Login</div>
      <div className="flex flex-col justify-between space-y-4 text-center">
        <input
          className="border-2 border-black rounded-2x text-center w-2/3 mx-auto rounded"
          type="text"
          value={"User Name"}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className="border-2 border-black rounded-2x text-center w-2/3 mx-auto rounded"
          type="text"
          value={"Password"}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="border-2 border-black rounded bg-[#49ACF3] w-2/3 px-2 mx-auto text-white"
          onClick={handleLogin}
        >
          Login
        </button>

        <Link
          className="border-2 border-black rounded bg-[#49ACF3] w-2/3 px-2 mx-auto text-white"
          to={"/demoapp/chats"}
        >
          Create User
        </Link>
      </div>
    </div>
  );
}
