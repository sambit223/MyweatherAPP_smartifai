import React from 'react'
import { Link } from 'react-router-dom'
import { faTachometerAlt, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SideBar = () => {
    return (
        <div className='w-50 mr-11 bg-purple-800 fixed text-white h-full rounded-e-lg p-4 flex flex-col justify-start items-center'>
            <div>
                <h1 className='text-xl m-4'>Weather Platform</h1>
            </div>
            <ul className='flex flex-col justify-start items-start'>
                <li className='m-1 hover:text-orange-500 flex items-center gap-4'>
                    <FontAwesomeIcon icon={faTachometerAlt} className='mr-2' />
                    <Link to={"/"}>Dashboard</Link>
                </li>
                <li className='m-1 hover:text-orange-500 flex items-center gap-4'>
                    <FontAwesomeIcon icon={faCog} className='mr-2' />
                    <Link to={"/settings"}>Settings</Link>
                </li>
            </ul>
        </div>
      )
}

export default SideBar