import {FaUsers,FaMapPin } from 'react-icons/fa';
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

            {
                name:'Add vehicles',
                icon: '',
            },

            {
                name:'Vehicle detail',
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
                name:'Add driver',
                icon: '',
            },
                        {
                name:'Driver detail',
                icon: '',
            },
              ],
    },




    {
        title: 'Trip',
        icon: <BiTrip/>,
        links: [
            {
                name: 'Create new trip',
                icon: '',
            },

            {
                name:'Inprogress trip',
                icon: '',
            },

            {
                name:'Previouse trip',
                icon: '',
            },
                        {
                name:'See urgent trip',
                icon: '',
            },
            {
                name:'See long trip',
                icon: '',
            },

        ],
    },




    {
        title: 'Employees',
        icon: <FaUsers/>,
        links: [
            {
                name: 'Employee list',
                icon: '',
            },

            {
                name:'Add employee',
                icon: '',
            },
                        {
                name:'Employee detail',
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
        title: 'Geofence',
        icon: <FaMapPin/>,
        links: [
            {
                name: 'Geofence event',
                icon: '',
            },

            {
                name:'Add geofence',
                icon: '',
            },
              ],
    },




    {
        title: 'Report ',
        icon: <HiDocumentReport/>,
        links: [
            {
                name: 'Completed trip',
                icon: '',
            },

            {
                name:'Income and expeense',
                icon: '',
            },
              ],
    },




    {
        title: 'Setting ',
        icon: <FiSettings/>,
        links: [
            {
                name: 'General setting',
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