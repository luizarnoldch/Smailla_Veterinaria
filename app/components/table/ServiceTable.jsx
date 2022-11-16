import DeleteButton from "./DeleteButton"
import EditButton from "./EditButton"

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Servicio</th>
        <th>Mascota</th>
        <th>Fecha</th>
        <th>Precio</th>
        <th colSpan={2} className="max-w-[5rem]">Opciones</th>
      </tr>
    </thead>
  )
}

const TableBody = ({data}) => {
  return (
    <tbody className="text-center border border-marron">
      {
        data.map((item,index) => (
            <tr key={index} className="h-10">
              <td>{item.servicio}</td>
              <td>{item.mascota}</td>
              <td>{item.fecha}</td>
              <td>{item.precio}</td>

              {/* Edita Button */}
              <td className="max-w-[2.5rem] hover:bg-blue-300/70 active:bg-blue-300/30 rounded-md duration-300 ease-in-out hover:duration-100 active:duration-100">
                <EditButton />
              </td>

              {/* Delete Button */}
              <td className="max-w-[2.5rem] hover:bg-red-300/70 active:bg-red-300/30 rounded-md duration-300 ease-in-out hover:duration-100 active:duration-100">
                <DeleteButton />
              </td>
            </tr>
        ))
      }
    </tbody>
  )
}

const TableFoot = () => {

}

const data_service = [
  {
    servicio: "baño",
    mascota: "esmaila",
    fecha: "25/05/15",
    precio: "15.00"
  },
  {
    servicio: "corte",
    mascota: "rufo",
    fecha: "14/04/15",
    precio: "25.00"
  },
  {
    servicio: "baño",
    mascota: "rufo",
    fecha: "15/05/16",
    precio: "20.00"
  },
]

const ServiceTable = ({data}) => {
  return (
    <table className="border border-marron w-full rounded-md">
      <TableHead />
      <TableBody data={data ?? data_service}/>
    </table>
  )
}

export default ServiceTable