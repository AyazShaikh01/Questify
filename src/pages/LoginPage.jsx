import React from "react";

const LoginPage = () => {
  return (
    <div className="bg-[#6D5D5D] text-white">
      <div
        id="container"
        className="bg-[linear-gradient(135deg,_rgba(0,0,0,1)_0%,_rgba(51,0,255,0.6)_50%,_rgba(0,0,0,1)_100%)] h-screen w-full flex justify-center items-center"
      >
        <div className="formBox w-[70vw] h-[70vh] border-5 border-black rounded-3xl flex flex-col justify-center items-center shadow-[0_4px_30px_rgba(0,0,0,0.5)] shadow-black-500/70">
          <div id="heading">
            <h1 className="text-[yellow] font-[Orbitron] font-black text-7xl">
              LOGIN
            </h1>
          </div>
          <div id="inputs" className="flex flex-col justify-center items-center my-10">
            <input
              className="w-2xl m-2 text-3xl font-bold text-[#FFDD00] px-4 py-2 bg-transparent border-3 border-black rounded outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <input
              className="w-2xl m-2 text-3xl font-bold text-[#FFDD00] px-4 py-2 bg-transparent border-3 border-black rounded outline-none"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div id="button">
            <input className="px-14 py-3 bg-[#00CD71] text-black font-[Orbitron] font-bold text-3xl border-3 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] shadow-green-500/70" type="submit" value="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
