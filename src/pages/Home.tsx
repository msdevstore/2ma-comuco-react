import CustomerItem from 'components/home/CustomerItem';
import moment from 'moment';

const Home = () => {

  //mock data
  const customers = [
    {
      name: 'John Doe',
      email: 'contact@gmail.com',
    },
    {
      name: 'John Doe',
      email: 'contact@gmail.com',
    },
    {
      name: 'John Doe',
      email: 'contact@gmail.com',
    },
  ];
  const news = [
    {
      title: 'Christan Bilney',
      status: 'Low priority',
      version: '3.20',
      date: '2023-04-17',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/images/avatar-1.png'
    },
    {
      title: 'Christan Bilney',
      status: 'Critical',
      version: '3.20',
      date: '2023-04-17',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/images/avatar-1.png'
    },
    {
      title: 'Christan Bilney',
      status: 'Low priority',
      version: '3.20',
      date: '2023-04-17',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/images/avatar-1.png'
    },
    {
      title: 'Christan Bilney',
      status: 'Low priority',
      version: '3.20',
      date: '2023-04-17',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/images/avatar-1.png'
    },
    {
      title: 'Christan Bilney',
      status: 'Low priority',
      version: '3.20',
      date: '2023-04-17',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/images/avatar-1.png'
    },
  ];

  return (
    <div className="pt-7 pb-3 xs:px-0 sm:px-4 md:px-8 lg:px-16">
      <h1 className="lg:text-title-xl md:text-title-lg sm:text-3xl xs:text-xl font-medium text-yellow lg:mb-10 md:mb-8 xs:mb-4">Hi Renee. Have a great day.</h1>
      <div>
        <div className="bg-white rounded overflow-hidden">
          <h2 className="lg:text-title-lg md:text-3xl xs:text-2xl font-bold px-2 md:py-2 xs:py-1 text-gray-300">Customer Name</h2>
        </div>
        <div className="pl-4">
          {
            customers.map((customer, index) => (
              <CustomerItem key={`customer-${index}`} data={customer} />
            ))
          }
        </div>
      </div>

      <div className="pt-10 px-4">
        <h3 className="text-title mb-1 text-yellow">Company News</h3>
        <div className="grid grid-cols-12 gap-4">
          <div className="xl:col-span-9 xs:col-span-12">
            <div className="bg-white md:px-6 md:px-4 xs:px-2 rounded-xl md:h-[460px] sm:h-[400px] xs:h-[360px] overflow-auto scroll">
              {
                news.map((item, index) => (
                  <div key={`new-${index}`} className="border-b border-gray-300 text-gray-600 py-5">
                    <div className="flex sm:flex-row xs:flex-col justify-between items-center">
                      <div className="flex items-center sm:mb-0 xs:mb-2">
                        <div className="md:w-12 sm:w-10 xs:w-8 md:h-12 sm:h-10 xs:h-8 rounded-full overflow-hidden"><img src={item.image} alt="image" /></div>
                        <div className="md:px-4 xs:px-2 mt-1">
                          <p className="font-bold leading-1">{item.title}</p>
                          <p className="text-sm">{moment().diff(item.date, 'day')} days ago</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className={`md:text-base xs:text-sm rounded-xxl md:px-4 xs:px-2 md:py-1 xs:py-0.5 font-bold ${item.status === 'Critical' ? 'text-gray-200 bg-gray-600' : 'bg-gray-200'}`}>
                          {item.status}
                        </div>
                        <div className="md:text-base xs:text-sm rounded-xxl md:px-4 xs:px-2 md:py-1 xs:py-0.5 bg-gray-200 font-bold">
                          V {item.version}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 md:pr-10 xs:pr-0">
                      <span className="mr-2">{item.content}</span>
                      <a href="#" className="underline">More...</a>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="xl:col-span-3 xs:col-span-12">
            <button className="w-full my-2 xl:h-16 md:h-14 sm:h-12 xs:h-10 bg-yellow rounded-xl">
              <span className="font-bold text-lg">Quick facts</span>
            </button>
            <button className="w-full my-2 xl:h-16 md:h-14 sm:h-12 xs:h-10 bg-white rounded-xl">
              <span className="font-bold text-sm">392 Contacts</span>
            </button>
            <button className="w-full my-2 xl:h-16 md:h-14 sm:h-12 xs:h-10 bg-white rounded-xl">
              <span className="font-bold text-sm">14 comuco Mails available</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
