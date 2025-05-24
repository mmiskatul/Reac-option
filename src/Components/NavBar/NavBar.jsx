import React, { useState } from 'react';
import Link from '../Link/Link';
import { RiMenu2Fill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' }
    ];

    const [open,setopen]=useState(false);
 
    return (
        <nav className='p-6'>
            <div className='md:hidden text-3xl transition-transform duration-150 hover:cursor-pointer pl-5   py-1' onClick={()=>setopen(!open)}>
                {
                    open ===true ?< AiOutlineClose  className=' ' /> :<RiMenu2Fill className='' />

                }
                
            </div>
            <ul className={`md:static md:flex duration-500 absolute px-13 pl-20 space-y-5 shadow-lg ${open ?'top-12':'-top-60'}`}>
                {
                    routes.map(route => <Link route={route} key={route.id}/>)
                }
            </ul>


        </nav>
    );
}
export default NavBar;