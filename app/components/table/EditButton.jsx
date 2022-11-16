'use client'

import Image from "next/image"
import editImg from "../../../public/edit.png"

export default function EditButton() {

  const onClick = () => {
    alert("editar")
  }

  return (
    <div className="flex-center" onClick={onClick}>
      <Image 
        src={editImg}
        alt="Edit"
        width={30}
        height={30}
      />
      <p>editar</p>
    </div>
  )
};
