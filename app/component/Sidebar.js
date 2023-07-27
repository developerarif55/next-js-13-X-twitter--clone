import { BsBellFill, BsHouseFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import SidebarItem from './SidebarItem';

const items = [
    {
      icon: BsHouseFill,
      label: 'Home',
      href: '/',
    },
    {
      icon: BsBellFill,
      label: 'Notifications',
      href: '/notifications',
    },
    {
      icon: FaUser,
      label: 'Profile',
      href: `/profile`},
  ]
function Sidebar() {
  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
        <div className='flex flex-col items-end text-white'>
        <div className="space-y-4 lg:w-[230px]">
      
            {
                items.map((item)=> (
                    <SidebarItem 
                    key={item.href}
                    href={item.href} 
                    Icon={item.icon}
                    label={item.label}
                    />
                ))
            }
            
       </div>
        </div> 
        
    </div>
  )
}

export default Sidebar