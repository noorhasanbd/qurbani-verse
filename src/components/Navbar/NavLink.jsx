import Link from 'next/link';
import React from 'react';

const NavLink = ({navItem}) => {
    return (
        <li>
            <Link href={navItem.path} className='hover:text-green-400 hover:bg-transparent!'>{navItem.name}</Link>
        </li>
    );
};

export default NavLink;