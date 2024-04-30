import { Navbar } from "../../components/Navbar"
import { Outlet } from "react-router-dom"
import './layout.scss'

export const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}
