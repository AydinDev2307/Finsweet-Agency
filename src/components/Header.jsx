import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '.././assets/imgs/Logo.svg';
import Icon from '.././assets/icons/Icon.svg';
const Header = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/');
  };
  return (
    <header className="fixed top-0 left-0 w-[1600px] h-[80px] z-50 bg-[rgba(35,37,54,1)] border-b border-[rgba(255,255,255,0.05)]">
      <nav className="flex items-center justify-between h-[80px]">
        <img
          onClick={handleLogoClick}
          className="ml-[160px] w-[122px] cursor-pointer"
          src={Logo}
          alt="Logo"
        />
        <div className="w-[700px] h-[24px] mr-[160px] flex">
          <ul className="flex gap-[32px]">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-white font-[600]' : 'text-white'
              }
              to="/">
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-white font-[600]' : 'text-white'
              }
              to="/service">
              Service
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-white font-[600]' : 'text-white'
              }
              to="/company">
              Company
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-white font-[600]' : 'text-white'
              }
              to="/career">
              Career
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-white font-[600]' : 'text-white'
              }
              to="/blog">
              Blog
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-white font-[600]' : 'text-white'
              }
              to="/contactus">
              Contact us
            </NavLink>
          </ul>
          <button className="w-[137px] h-[24px] text-[16px] font-[500] text-[rgba(255,211,175,1)] flex items-center gap-[8px] ml-[32px] cursor-pointer">
            Clone project
            <img src={Icon} alt="" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
