import React from 'react'
import { Outlet } from 'react-router-dom'
type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <>
        <aside>

        </aside>
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default AdminLayout