import ServiceForm from "./components/form/ServiceFrom"
import ServiceTable from "./components/table/ServiceTable"

export default function Home() {
  return (
    <div className="w-full h-screen flex">
      <div className="h-full w-2/6 flex justify-center items-center">
        <ServiceForm />
      </div>
      <div className="h-full w-4/6 flex justify-center items-start pr-8 pt-20">
        <ServiceTable />
      </div>
    </div>
  )
};