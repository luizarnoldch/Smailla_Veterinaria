'use client'

import InputText from "../input/InputText"
import Button from '../button/Button'
import { useState } from "react"

const InitialService = {
  id_mascota: 0,
  id_cliente: 0,
  tipo_servicio: "",
  fecha_servicio: ""
}

const ServiceFrom = () => {

  const [servicio, setServicio] = useState(InitialService)

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={(e) => onSubmit(e)} className="p-4 shadow-md rounded-md flex flex-col gap-4">
      <InputText
        autoFocus={true}
        label={"Ingrese de Cliente"}
        name="id_cliente"
        onChange={setServicio}
        placeholder="Ej: Nombre Apellido"
        value={servicio}
      />

      <InputText
        label={"Ingrese de Mascota"}
        name="id_mascota"
        onChange={setServicio}
        placeholder="Ej: Mascota"
        value={servicio}
      />

      <InputText
        label={"Ingrese el Servicio"}
        name="tipo_servicio"
        onChange={setServicio}
        placeholder="Ej: Corte"
        value={servicio}
      />

      <InputText
        label={"Ingrese la Fecha"}
        name="fecha_servicio"
        onChange={setServicio}
        placeholder="Ej: 25/12/22"
        value={servicio}
      />
      <Button className="button--outlined h-10"type="summit">Agegar Servicio</Button>
    </form>
  )
}

export default ServiceFrom