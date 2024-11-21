import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/Back';
import Logo from '../data/Logo.png';

import { useStateContext } from '../context/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  const [openTitle, setOpenTitle] = useState(null); // State to track open title

  const activeLink = 'flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-blue-500 text-md m-2';
  const normalLink = 'flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-gray-300 m-2';

  // Function to toggle open/close state of a title
  const toggleTitle = (title) => {
    setOpenTitle((prevTitle) => (prevTitle === title ? null : title));
  };

  return (
  <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
    {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => setActiveMenu(false)}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <img
                style={{
                  width: '130px',
                  height: '130px',
                  borderRadius: '50%',
                  boxShadow: '0 0 0 2px red, 0 0 0 4px white, 0 0 0 6px black',
                }}
                src={Logo}
                alt="Logo"
              />
              <div>
                <span style={{ fontStyle: 'italic', color: 'blue' }}>fleet</span>
                <span style={{ color: 'red', marginLeft: '2px' }}>O</span>
                <span style={{ marginLeft: '-2px', fontStyle: 'italic', WebkitTextStroke: '1px black', WebkitTextFillColor: 'white' }}>B</span>
                <span style={{ color: 'black' }}>N</span>
              </div>
            </Link>

            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <hr className="mt-4 border-blue-300 dark:border-gray-700" />
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <div
                  className="ml-3 flex items-center cursor-pointer hover:bg-gray-400"
                  onClick={() => toggleTitle(item.title)}
                >
                  <div className="rounded-full w-6 h-6 flex items-center justify-center bg-gray-400">
                    {item.icon}
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-gray-2 m-3 mt-4">{item.title}</p>
                    <div className="flex items-center">
                      {openTitle === item.title ? (
                        <FaChevronDown className="text-gray-500 ml-2" style={{ transform: 'scale(0.8)' }} />
                      ) : (
                        <FaChevronRight className="text-gray-500 ml-2" style={{ transform: 'scale(0.8)' }} />
                      )}
                    </div>
                  </div>
                </div>
                {openTitle === item.title && (
                  <div className="">
                    {item.links.map((link) => (

                      <NavLink
                        to={`/${link.name}`}
                        key={link.name}
                        onClick={() => { }}
                        className={({ isActive }) => (isActive ? activeLink : normalLink)}
                      >
                        {link.icon}
                        <span className=" ">{link.name /* capitalize */}</span> 
                      </NavLink>
                      
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
