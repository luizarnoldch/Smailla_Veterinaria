import './globals.css'
import Sidebar from './components/sidebar/Sidebar'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <main className="w-screen h-screen flex">
          <div className='w-1/12'>
            <Sidebar />
          </div>
          <div className='w-11/12'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}