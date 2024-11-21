import React from 'react'
import { Link } from 'react-router-dom'
const Navbar= () =>{
    return(
         
        <div className='fleet'>
           <div className='logo'>
           <span>Welcome to mechanics Dashboard</span>
            </div>
            <nav className='item'>
                <ul className='ul'>
                    <li>
                        <Link to ='/ViewNotification'>view-Notifications for maintain vehicles</Link>
                    </li>
                    <li>
                        <Link to ='/SendMaintenanceReport'>SendMaintenanceReport</Link>
                    </li>
                    <li>
                        <Link to ='/manageLubricant'>Manage lubricant Log</Link>
                    </li>
                    
                    
                </ul>
            </nav>
           
     </div>
    )

}
export default Navbar