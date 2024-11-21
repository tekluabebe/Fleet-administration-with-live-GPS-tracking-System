import React, {useEffect} from 'react';
import {RiNotification3Line} from 'react-icons/ri';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import {AiOutlineMenu} from 'react-icons/ai';
import {Notification, UserProfile} from '.';
import {useStateContext} from '../context/ContextProvider';
import {FaRegUser} from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';






const NavButton = ({title, costomFunc, icon, color, dotColor}) => (
  
  <TooltipComponent 
   content={title} 
   position = "BottomCenter">
     <button 
       type="button"
       onClick={costomFunc}
       style={{color}}
       className="relative text-xl rounded-full p-3 hover:bg-light-gray"
     >
       <span 
        style={{background: dotColor}}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
       />
        {icon}
     </button>
  </TooltipComponent>
)


const Navbar = () => {
  const {activeMenu, setActiveMenu} = useStateContext();
  return (

  <div className="flex justify-between p-1 md:mx-6 relative">
        <NavButton 
          title="Menu"
          costomFunc={()=> setActiveMenu((prevActiveMenu)=> !prevActiveMenu)}
          color="gray-700"
          icon={<AiOutlineMenu/>}
        />
        <div className="flex">
          <NavButton 
            title="Notification"
            // eslint-disable-next-line no-undef
            costomFunc={() => handleClick('notification')}
            color="blue"
            icon={<RiNotification3Line/>}
          />

          <TooltipComponent
            content = "Dispatcher"
            position = "BottomCenter"
          >
              <div className="flex items-center gap-4 cursor-pointer p-3
                  hover:bg-light-gray rounded-full ml-16 "
                  // eslint-disable-next-line no-undef
                  onClick={() => handleClick('userProfile')}
              >
                <FaRegUser className="text-xl" />
              </div>
          </TooltipComponent>


      </div>
  </div>  
 )
}

export default Navbar