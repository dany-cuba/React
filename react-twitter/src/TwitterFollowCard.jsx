import { useState } from "react";
import React from "react";

export function TwitterFollowCard( {userName, name, image } ) {
  const [isFollowing, setIsFollowing] = useState(false)
  
  const text = isFollowing ? 'Siguiendo' : 'Seguir'

  const buttonClassName = isFollowing
   ? 'w-32 ml-4 rounded-[999px] py-[6px] px-4 font-bold bg-slate-600 bg-opacity-20 border border-gray-500 text-white transition ease-in duration-200 hover:bg-red-500 ' 
   : 'ml-4 rounded-[999px] py-[6px] px-4 font-bold bg-white text-black transition ease-in-out duration-200 hover:bg-blue-400'

  const handleClick = () =>{
    setIsFollowing(!isFollowing)
  }

  return (
    <article className=" flex items-center w-[320px] text-[#fff] text-sm justify-between hover:bg-[#313131] p-3 rounded-2xl">
      <header className="flex items-center gap-1">
        <img
          className=" w-12 h-12 mr-1 rounded-[1000px]"
          src={image}
          alt="foto de perfil"
        />
        <div className="flex flex-col">
          <strong>{name}</strong>
          <span className=" opacity-60">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="">{text}</span>
          <span className=" hidden">Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  );
}
