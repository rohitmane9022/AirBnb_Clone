
import { Outlet } from 'react-router'
import Headers from '../components/Headers'

function Layout() {
  return (
    <div className="py-4 px-8 flex flex-col min-h-screen">
      <Headers/>
      <Outlet/>
    </div>
  )
}

export default Layout