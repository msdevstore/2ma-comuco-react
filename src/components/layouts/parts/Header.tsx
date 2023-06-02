
const Header = () => {
  // TODO should remove mock data
  const user = {
    name: 'Renee McKelvey',
    role: 'Sales representative',
    avatar: '/assets/images/avatar-1.png'
  };

  return (
    <div className="px-6 py-4 flex items-center sm:justify-between xs:justify-end">
      <div className="xs:hidden sm:flex gap-3">
        <div className="w-7"><img src="/assets/images/shape-1.png" alt="shape" /></div>
        <div className="w-7"><img src="/assets/images/shape-2.png" alt="shape" /></div>
        <div className="w-7"><img src="/assets/images/shape-3.png" alt="shape" /></div>
        <div className="w-7"><img src="/assets/images/shape-4.png" alt="shape" /></div>
        <div className="w-7"><img src="/assets/images/shape-5.png" alt="shape" /></div>
        <div className="w-7"><img src="/assets/images/shape-2.png" alt="shape" /></div>
      </div>

      <div className="flex items-center">
        <div className="text-yellow text-right mr-4">
          <p>{user.name}</p>
          <p className="text-sm mb-0">{user.role}</p>
        </div>
        <div className="rounded-full overflow-hidden w-12 w-12">
          <img src={user.avatar} alt="avatar" />
        </div>
      </div>
    </div>
  )
};

export default Header;
