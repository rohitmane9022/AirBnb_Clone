
import { Outlet } from 'react-router'
import Headers from '../components/Headers'

function Layout() {
  return (
    <div className="p-4 flex flex-col min-h-screen">
      <Headers/>
      <Outlet/>
    </div>
  )
}

export default Layout