import { useState, useEffect } from 'react';
import Tabs from 'components/basic/Tabs';
import { useMailsState, useGetMailAction } from 'hooks/redux';
import { useParams } from 'react-router-dom';

const MailDetails = () => {
  const { id } = useParams();
  const { activeMail: mail } = useMailsState();
  const getMail = useGetMailAction();

  // mock data
  const data = {
    ...mail,
    image: '/assets/images/image-2.png',
    map: '/assets/images/map.png',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus. tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis mangna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.',
    studies: [
      {
        title: 'Study 1'
      },
      {
        title: 'Study 2'
      },
    ]
  };
  const customer = {
    name: 'John Doe',
    email: 'contact@gmail.com',
  };

  const [tab, setTab] = useState(0);
  useEffect(() => {
    if (id) {
      getMail(parseInt(id));
    }
  }, [id]);

  return (
    <div className="flex lg:flex-row xs:flex-col gap-6 pt-4 pb-8">
      <div className="flex-1">
        <div className="md:px-10 sm:px-6 xs:px-3">
          <Tabs items={['Edit', 'Preview']} value={tab} onChange={setTab} />
        </div>
        <div className="bg-white md:rounded-xxl sm:rounded-3xl xs:rounded-2xl lg:px-14 md:px-8 xs:px-4 pb-6">
          <div className="flex justify-center">
            <div className="px-8 py-3 border-b-2 border-gray-400">
              <h2 className="text-title font-bold">{data.name}</h2>
            </div>
          </div>
          <div className="py-4">
            <img className="w-full h-44" src={data.image} alt="image" />
          </div>
          <div className="py-4 border-b-2 border-gray-400">
          {
            tab === 0
              ? <textarea rows={4} className='w-full p-1 border-2 border-gray-600 rounded' placeholder='Type here' />
              : <div className="max-w-[800px]">
                  <h2 className="text-title leading-1 font-medium mb-2">Heading</h2>
                  <div className="flex flex-wrap">{data.content.split(' ').map((item, index) => (
                    <span className="bg-gray-300 text-gray-300 text-xs leading-1 mb-1 mr-2" key={`word-${index}`}>{item}</span>
                  ))}</div>
                </div>
          }
          </div>
          <div className="grid grid-cols-2 gap-9">
            <div className="xs:col-span-2 md:col-span-1 md:px-3 xs:px-2">
              <p className="font-medium py-4 xl:text-base lg:text-sm md:text-base sm:text-sm xs:text-xs">{data.content}</p>
              <div className="flex items-center">
                <div className="w-60 border border-gray-200">
                  <img src={data.map} className="w-full" alt="map" />
                </div>
              </div>
            </div>
            <div className="xs:col-span-2 md:col-span-1 md:px-3 xs:px-2">
              <p className="font-medium py-4 xl:text-base lg:text-sm md:text-base sm:text-sm xs:text-xs">{data.content}</p>
              <div className="mb-5">
                <a href="" className="text-title font-medium">read more...</a>
              </div>
              {
                tab === 0
                  ? <button className="border border-black rounded mb-4 bg-gray-50 px-4 py-1">
                      add study
                    </button>
                  : <div className="flex flex-col items-start mt-5">
                      {
                        data.studies.map((study, index) => (
                          <button className="border border-black rounded mb-4 bg-yellow px-4 py-1" key={`study-${index}`}>
                            {study.title}
                          </button>
                        ))
                      }
                    </div>
              }
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-col md:flex-row xs:flex-col lg:items-start md:items-center xs:items-start justify-between">
        <div className="lg:mt-48 md:mt-0 md:w-max xs:w-full md:mb-0 xs:mb-4 px-6 py-2 flex items-center bg-gray-200 border-t border-gray-300">
          <div>
            <svg className="w-6 text-gray-600 fill-current" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PermContactCalendarIcon"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></svg>
          </div>

          <div className="px-4 pr-20">
            <p className="text-lg font-medium leading-1">{customer.name}</p>
            <p className="text-sm text-gray-500">{customer.email}</p>
          </div>
        </div>

        <div className="flex lg:flex-col xs:flex-row lg:items-start xs:items-center md:justify-start xs:justify-between md:w-max xs:w-full lg:px-8 xs:px-0">
          <button className="bg-white rounded md:px-6 xs:px-4 py-2.5 lg:mb-5 md:mb-0 leading-1 lg:mx-0 md:mx-8 xs:mx-0">Send preview</button>
          <button className="flex items-center bg-white rounded rounded-xxl leading-1">
            <div className='bg-yellow rounded-xxl w-10 h-10'/>
            <span className="px-2">Send</span>
            <div className='rounded-xxl w-10 h-10'/>
          </button>
        </div>
      </div>
    </div>
  )
};

export default MailDetails;
