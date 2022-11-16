'use client'

import Image from "next/image"
import deletImg from "../../../public/trash.png"

export default function DeleteButton(params) {

  const onClick = () => {
    alert("delete")
  }

  return(
    <div className="flex-center" onClick={onClick}>
      <Image 
        src={deletImg}
        alt="Delete"
        width={30}
        height={30}
      />
      <p>eliinar</p>
    </div>
  )
};

