import { FC, Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link, useLocation } from 'react-router-dom';
import { APP_VERSION } from 'constants/config';
import { useLogout } from 'hooks/redux/auth';

const menuItems = [
  {
    icon: <FontAwesomeIcon icon={icon({ name: 'search' })} />,
    to: '/search',
    text: 'Search'
  },
  {
    icon: <FontAwesomeIcon icon={icon({ name: 'house' })} />,
    to: '/home',
    text: 'Home'
  },
  {
    icon: <FontAwesomeIcon icon={icon({ name: 'envelope' })} />,
    to: '/mails',
    text: 'Mails'
  },
  {
    icon: <FontAwesomeIcon icon={icon({ name: 'user-group', style: 'solid' })} />,
    to: '/contacts',
    text: 'Contacts'
  },
  {
    icon: <FontAwesomeIcon icon={icon({ name: 'chart-pie' })} />,
    to: '/report',
    text: 'Report'
  },
];

interface SidebarProps {
  openMenu: boolean;
  toggleShowMenu: () => void;
}

const Sidebar:FC<SidebarProps> = ({
  openMenu,
  toggleShowMenu
}) => {
  const location = useLocation();
  const logout = useLogout();

  return (
    <div className={`h-full bg-yellow overflow-hidden flex flex-col ${openMenu ? 'md:static xs:absolute sm:left-0 sm:top-0 md:w-40' : 'w-17'} pt-4 pb-2 sm:pl-4 xs:pl-2 pr-2 z-20`}>
      <button className={`flex items-center ${openMenu ? 'justify-end mr-4' : 'justify-center'}`}>
        { !openMenu ?
          (<FontAwesomeIcon
          className="text-xl"
          icon={icon({ name: 'bars' })}
          onClick={toggleShowMenu}
          />) : (
            <FontAwesomeIcon
              className="text-xl"
              icon={icon({ name: 'arrow-left' })}
              onClick={toggleShowMenu}
            />
          )
        }
      </button>
      <div className="flex-1 flex flex-col items-center pt-6 pb-3">
        {
          menuItems.map((menuItem, index) => (
            <Fragment key={`menu-item-${index}`}>
              <Link
                to={menuItem.to}
                className={`flex items-center text-gray-700 rounded-lg my-2 h-12 text-xl hover:bg-white ${openMenu ? 'xs:w-28 md:w-32 justify-start' : 'w-12 justify-center'} ${location.pathname.startsWith(menuItem.to) ? 'bg-white' : ''}`}
              >
                <div className={`${openMenu ? 'mx-2' : ''} xs:text-base sm:text-lg md:text-xl`}>{menuItem.icon}</div>
                {openMenu && (
                  <div className="md:text-xl xs:text-base">{menuItem.text}</div>
                )}
              </Link>
            </Fragment>
          ))
        }
        <div onClick={logout} className={`flex items-center text-gray-700 rounded-lg my-2 h-12 text-xl hover:bg-white ${openMenu ? 'xs:w-28 md:w-32 justify-start' : 'w-12 justify-center'}`}>
          <div className={`${openMenu ? 'mx-2' : ''} xs:text-base sm:text-lg md:text-xl`}>
            <FontAwesomeIcon icon={icon({ name: 'right-from-bracket' })} />
          </div>
          {openMenu && (
            <div className="md:text-xl xs:text-base">Logout</div>
          )}
        </div>
      </div>
      <div className="text-center">
        <span>v {APP_VERSION}</span>
      </div>
    </div>
  );
};

export default Sidebar;
