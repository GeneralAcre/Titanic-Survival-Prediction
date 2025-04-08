'use client'; 

import { useState } from 'react';
import style from './component.style.css'
import Link from 'next/link';

const Sidebar = ({ position = 'right' }) => {
  const [collapsed, setCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // Determine position-specific classes
  const positionClasses = position === 'left' 
    ? { 
        container: 'left-0 border-r',
        mainMargin: collapsed ? 'ml-16' : 'ml-64'
      }
    : { 
        container: 'right-0 border-l',
        mainMargin: collapsed ? 'mr-16' : 'mr-64'
      };

  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${collapsed ? 'collapsed' : ''} ${positionClasses.container}`}>
        <div className="sidebar-header">
          <button className="toggle-button" onClick={toggleSidebar}>≡</button>
          <h3 className={`sidebar-title ${collapsed ? 'hidden' : ''}`}>Dashboard</h3>
        </div>

  <div className="sidebar-menu">
    <div className="menu-item active">

      <Link href='./'className={`label ${collapsed ? 'hidden' : ''}`}>Home</Link>
    </div>

    <div className="menu-item">
      <Link href='../about' className={`label ${collapsed ? 'hidden' : ''}`}>About</Link>
    </div>

    <div className="menu-item">
      <Link href='../model' className={`label ${collapsed ? 'hidden' : ''}`}>Model</Link>
    </div>

  </div>

</div>

<div className={`main-content ${positionClasses.mainMargin}`}>
  {/* Content here */}
</div>

    </>
  );
};

export default Sidebar;