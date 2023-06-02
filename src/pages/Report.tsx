import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import ReportTable from 'components/report/ReportTable';
import WeeklyMailsChart from 'components/report/WeeklyMailsChart';
import Paginator from 'components/basic/Paginator';

const reports = [
  {
    timestamp: '23 Apr,2021:1:15 PM',
    activity: 'comuco mail sent',
    activityId: '541-661-3042',
    assetId: '122',
    contact: 'Smith, Sam'
  },
  {
    timestamp: '17 May,2021:2:15 PM',
    activity: 'comuco mailbounced',
    activityId: '974-661-5110',
    assetId: '108',
    contact: 'Weinmann, Patrick'
  },
  {
    timestamp: '18 May,2021:3:12 PM',
    activity: 'comuco mail opened',
    activityId: '171-534-1262',
    assetId: '122',
    contact: 'Charles, Ray'
  },
  {
    timestamp: '19 May,2021:10:10 AM',
    activity: 'comuco mail sent',
    activityId: '251-661-5362',
    assetId: '102',
    contact: 'Mustermann, Max',
  },
  {
    timestamp: '19 May,2021:10:10 AM',
    activity: 'comuco mail sent',
    activityId: '251-661-5362',
    assetId: '102',
    contact: 'Mustermann, Max',
  },
  {
    timestamp: '18 May,2021:3:12 PM',
    activity: 'comuco mail opened',
    activityId: '171-534-1262',
    assetId: '122',
    contact: 'Charles, Ray'
  },
  {
    timestamp: '17 May,2021:2:15 PM',
    activity: 'comuco mailbounced',
    activityId: '974-661-5110',
    assetId: '108',
    contact: 'Weinmann, Patrick'
  },
  {
    timestamp: '23 Apr,2021:1:15 PM',
    activity: 'comuco mail sent',
    activityId: '541-661-3042',
    assetId: '122',
    contact: 'Smith, Sam'
  }
];

const weeklyMailsData = {
  opened: [2, 2, 3, 3 , 2, 2, 2],
  sent: [6, 5, 3, 4, 6, 7, 6]
};

const Report = () => {
  const [page, setPage] = useState(1);
  const pageSize = 5;

  return (
    <div className="flex flex-col md:px-7 sm:px-4 xs:px-0 py-4">
      <div className="mb-4">
        <span className="text-white text-2xl">Report</span>
      </div>
      <div className="flex flex-col flex-grow bg-white rounded-3xl md:p-8 sm:p-4 xs:p-2">
        <div className="flex lg:flex-row xs:flex-col xl:mb-8 xs:mb-0 xl:gap-7 lg:gap-4 xs:gap-0">
          <div className="flex flex-col justify-between lg:w-1/3 xs:w-full xl:mb-0 xs:mb-4">
            <div className="flex items-center justify-between w-full bg-gray-dark rounded-xl xl:px-5 lg:px-2 md:px-5 xs:px-3 py-4 mb-4">
              <div>
                <p className="text-white font-medium xl:text-lg lg:text-base md:text-lg xs:text-base mb-1">Comuco Mails Sent</p>
                <p className="text-gray-medium sm:text-sm xs:text-xs">Since xx.xxx.xxxx</p>
              </div>
              <div className="xl:text-2xl lg:text-xl md:text-2xl xs:text-xl text-white font-medium">212</div>
            </div>
            <div className="flex items-center justify-between w-full bg-white border border-gray-light rounded-xl xl:px-5 lg:px-2 md:px-5 xs:px-3 py-4 mb-4">
              <div>
                <p className="text-black-light font-medium xl:text-lg lg:text-base md:text-lg xs:text-base mb-1">Available comuco Mails</p>
                <p className="text-gray-medium sm:text-sm xs:text-xs">For you</p>
              </div>
              <div className="xl:text-2xl lg:text-xl md:text-2xl xs:text-xl text-black-light font-medium">32</div>
            </div>
            <div className="flex items-center justify-between w-full bg-gray-light rounded-xl xl:px-5 lg:px-2 md:px-5 xs:px-3 py-4">
              <div>
                <p className="text-black-light font-medium xl:text-lg lg:text-base md:text-lg xs:text-base mb-1">Overall conversion rate</p>
                <p className="text-gray-medium sm:text-sm xs:text-xs">Of your sent comuco mails</p>
              </div>
              <div className="xl:text-2xl lg:text-xl md:text-2xl xs:text-xl text-black-light font-medium">76.2%</div>
            </div>
          </div>
          <div className="lg:w-2/3 xs:w-full border border-gray-thin p-4 rounded-xl xl:mb-0 xs:mb-4">
            <span className="text-black-light font-medium">Weekly Comuco Mails</span>
            <div className="flex items-center justify-center">
              <WeeklyMailsChart data={weeklyMailsData} />
            </div>
          </div>
        </div>

        <div className="flex-grow border border-gray-light rounded-xl py-4 overflow-auto">
          <div className="md:min-w-[1000px] sm:min-w-[900px] xs:min-w-[800px]">
            <div className="flex items-center justify-between mb-4 px-5">
              <span className="font-medium text-lg">Activity tracker</span>
              <div className="flex items-center justify-center bg-gray-light rounded-lg p-2">
                <FontAwesomeIcon className="text-sm text-gray-600" icon={icon({ name: 'gear' })} />
              </div>
            </div>
            <ReportTable tableData={reports.slice(pageSize * (page - 1), pageSize * page)} />
            <Paginator pageSize={pageSize} page={page} onChangePage={setPage} total={reports.length} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
