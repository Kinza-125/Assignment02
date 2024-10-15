import React from "react"
import Link from "next/link"
 const Header = () => {
  return (
    <header className='header'>

        
        <nav>
          <ul className="ul" >
            <li>
            <Link href="/">Home</Link>
          </li>
            <li><Link href="/about">ABOUT</Link></li>
            <li><Link href="/contact">CONTACT</Link></li>
            <li><Link href="/service">SERVICE</Link></li>
          </ul>
        </nav>
        
    </header>
  );
};
export default Header;

