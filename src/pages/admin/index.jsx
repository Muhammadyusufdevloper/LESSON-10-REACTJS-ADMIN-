import React from 'react'
import Sitebar from '../../components/sitebar'
import { Outlet } from 'react-router-dom'
import "../../components/sitebar/Admin.scss"
import Header from '../../layout/header'


const Admin = () => {
  return (
    <>
      <div className='admin'>
        <Sitebar/>
        <Outlet/>
      </div>
    </>
  )
}

export default Admin