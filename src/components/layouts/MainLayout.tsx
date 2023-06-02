import { FC, ReactNode, useState } from 'react';
import Sidebar from "./parts/Sidebar";
import Header from "./parts/Header";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleShowMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <div className="flex h-screen w-screen bg-blue-dark relative">
      <Sidebar
        openMenu={openMenu}
        toggleShowMenu={toggleShowMenu}
      />
      <div className="flex-1 flex-col overflow-auto">
        <Header />
        <div className="px-6">
          {children}
        </div>
      </div>
      {openMenu && (
        <div
          className="xs:fixed xs:top-0 xs:left-0 md:hidden w-screen h-screen bg-black-default z-10 opacity-80"
          onClick={toggleShowMenu}
        />
      )}
    </div>
  )
};

export default MainLayout;
