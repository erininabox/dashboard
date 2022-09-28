import React, { useState } from 'react'
import IonIcon from '@reacticons/ionicons';

const SidebarComp = () => {
    const [toggleSidebar, setToggleSidebar] = useState(true)

    const handleToggleClick = (e) => {
        e.preventDefault()
        toggleSidebar ? setToggleSidebar(false) : setToggleSidebar(true)
    }


    return (
    <div className='w-56 h-screen bg-primary-500 text-white p-2 pl-5 flex flex-col sticky top-0'>
        <img className='rounded-lg self-center -ml-3 mt-5' src="/AmassFullLogo.svg" width="150px" height="150px" alt="logo"></img>
        {/* Sidebar Links and Icons */}
        <div className='grid col-1 gap-2 mt-5'>
            <a href="/" className='flex items-center'>
                <IonIcon name="speedometer-outline" className=' pr-2'/>
                <span className=''>Dashboard</span>
            </a>
            <a href="/" className=' flex items-center'>
                <IonIcon name="home-outline" className=' pr-2'/>
                <span className=''>My Properties</span>
            </a>
            <a href="/" className=' flex items-center'>
                <IonIcon name="mail-unread-outline" className=' pr-2'/>
                <span className=''>Messages</span>
            </a>

            <a href="/" className=' flex items-center'>
                <IonIcon name="newspaper-outline" className=' pr-2'/>
                <span className=''>Applications</span>
            </a>
            {/* Seperator */}
            <hr className='m-4 ml-0'/>

            <a href="/" className=' flex items-center'>
                <IonIcon name="cog-outline" className=' pr-2'/>
                <span className=''>Settings</span>
            </a>
            <a href="/" className=' flex items-center'>
                <IonIcon name="search-circle-outline" className=' pr-2'/>
                <span className=''>Help</span>
            </a>
            <a href="/" className=' flex items-center'>
                <IonIcon name="shield-half-outline" className=' pr-2'/>
                <span className=''>Privacy</span>
            </a>
        </div>

        <div className='flex grow justify-end'>
        <button className='self-end m-2' onClick={(e) => handleToggleClick(e)} >
            {(toggleSidebar) ? 
                (<IonIcon name="chevron-back-circle-outline" className='pr-2' size='large' />) : 
                (<IonIcon name="chevron-forward-circle-outline" className='pr-2' size='large' />)}
        </button>
        </div>
    </div>
  )
}

export default SidebarComp