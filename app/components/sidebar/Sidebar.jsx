import './sidebar.css'

import Link from "next/link"

const routes = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Clientes',
    route: '/clientes'
  },
  {
    label: 'Mascotas',
    route: '/mascotas'
  },
  {
    label: 'Horarios',
    route: '/horarios'
  }
]

const Sidebar = () => {
  return (
    <header className="header">
      <nav className='sidebar'>
        <ul className='sidebar--list'>
          {
            routes.map(({label, route}) => (
              <li key={route}>
                <Link href={route}>
                  <div className='sidebar--item'>
                    {label}
                  </div>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Sidebar