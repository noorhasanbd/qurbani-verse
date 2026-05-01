import Link from 'next/link';
import React from 'react';

const NavLink = ({navItem}) => {
    return (
        <li>
            <Link href={navItem.path}>{navItem.name}</Link>
        </li>
    );
};

export default NavLink;