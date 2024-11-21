import {FaUsers} from 'react-icons/fa';
import {RiDashboard2Fill, RiNotification3Line} from 'react-icons/ri';
import {TbCar} from 'react-icons/tb';
import {GiMassDriver} from 'react-icons/gi';
import {BiTrip} from 'react-icons/bi';
import {CgTrack} from 'react-icons/cg';
import {FiSettings} from 'react-icons/fi';
import {HiDocumentReport} from 'react-icons/hi';





export const links = [ 


    {
        title: 'Home',
        icon: <RiDashboard2Fill/>,
        links: [
            {
                name: 'Dashboard',
                
                icon: '',
            },
        ],
    },

    {
        title: 'Vehicles',
        icon: <TbCar/>,
        links: [
            {
                name: 'Vehicles list',
                icon: '',
                
            },
        ],
    },

    {
        title: 'Drivers',
        icon: <GiMassDriver/>,
        links: [
            {
                name: 'Driver list',
                icon: '',
            },

            {
                name: 'Requested feul',
                icon: '',
            },

            {
                name: 'Driver trip report',
                icon: '',
            },
              ],
    },

    {
        title: 'Emplyee',
        icon: <BiTrip/>,
        links: [
            {
                name: 'Employee list',
                icon: '',
            },


            {
                name:'Employee trip requst',
                icon: '',
            },
        ],
    },




    {
        title: 'Mechanics',
        icon: <FaUsers/>,
        links: [
            {
                name:'Mechanics list',
                icon: '',
            },

            {
                name:'Maintenance requst',
                icon: '',
            },

              ],
    },





    {
        title: 'Tracking',
        icon: <CgTrack/>,
        links: [
            {
                name: 'Live location',
                icon: '',
            },

            {
                name:'History of tracking',
                icon: '',
            },
              ],
    },

    {
        title: 'Department head ',
        icon: <HiDocumentReport/>,
        links: [
            {
                name: 'Department head list',
                icon: '',
            },
              ],
    },




    {
        title: 'Setting ',
        icon: <FiSettings/>,
        links: [
         
            {
                name: 'Personal detail',
                icon: '',
            },
        
              ],
    },

    {
        title: 'Notification ',
        icon: <RiNotification3Line/>,
        links: [
            {
                name: 'Notification',
                icon: '',
            },
              ],
    },


]