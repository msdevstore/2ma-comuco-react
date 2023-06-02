import { FC } from 'react';

export interface row {
  timestamp: string,
  activity: string,
  activityId: string,
  assetId: string,
  contact: string,
}

export interface ITableProps {
  tableData: row[];
}

const ReportTable:FC<ITableProps> = ({ tableData }) => {
  return (
    <table className="w-full text-md text-black-light mb-4">
      <thead>
        <tr>
          <th className="w-2/12 border-t py-3 pl-1 border-b border-gray-light text-center">
            <div className="text-center">Timestamp</div>
          </th>
          <th className="w-2/12 border-t py-3 border-b border-gray-light text-center">
            <div className="text-center">Activity</div>
          </th>
          <th className="w-2/12 border-t py-3 border-b border-gray-light text-center">
            <div className="text-center">Activity ID</div>
          </th>
          <th className="w-2/12 border-t py-3 border-b border-gray-light text-center">
            <div className="text-center">Asset ID</div>
          </th>
          <th className="w-2/12 border-t py-3 border-b border-gray-light text-center">
            <div className="text-center">Contact</div>
          </th>
          <th className="w-2/12 border-t border-b border-gray-light text-center" />
        </tr>
      </thead>
      <tbody>
      {tableData.map((item, index)=> (
        <tr key={index}>
          <td className="py-3.5 border-b border-gray-light">
            <div className="pl-1 text-md text-center whitespace-nowrap">
              {item.timestamp}
            </div>
          </td>
          <td className="py-3.5 border-b border-gray-light whitespace-nowrap">
            <div className="text-md text-center">
              {item.activity}
            </div>
          </td>
          <td className="py-3.5 border-b border-gray-light whitespace-nowrap">
            <div className="text-md text-center">
              {item.activityId}
            </div>
          </td>
          <td className="py-3.5 border-b border-gray-light whitespace-nowrap">
            <div className="text-md text-center">
              {item.assetId}
            </div>
          </td>
          <td className="py-3.5 border-b border-gray-light whitespace-nowrap">
            <div className="text-md text-center">
              {item.contact}
            </div>
          </td>
          <td className="h-full py-3.5 border-b border-gray-light">
            <div className="text-md text-center">
              <span className="underline cursor-pointer">Details</span>
            </div>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default ReportTable;
