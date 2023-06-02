import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { ContactModel } from 'resources/models';

export interface ITableProps {
  data: ContactModel[];
}

const ContactTable:FC<ITableProps> = ({ data }) => {

  return (
    <table className="w-full text-black-light mb-8 font-medium">
      <thead>
        <tr className="border-b border-t border-gray-light">
          <th>
            <div className="text-left py-4 pl-1">Lastname</div>
          </th>
          <th>
            <div className="text-left py-4">Firstname</div>
          </th>
          <th>
            <div className="text-left py-4">Account</div>
          </th>
          {/* <th>
            <div className="text-left py-4">Primary Salesrep</div>
          </th> */}
          <th />
        </tr>
      </thead>
      <tbody>
      {data.map((item, index)=> (
        <tr key={index} className="border-b border-gray-light">
          <td>
            <div className="py-4 pl-1">
              {item.last_name}
            </div>
          </td>
          <td>
            <div className="py-4">
              {item.first_name}
            </div>
          </td>
          <td>
            <div className="py-4">
              {item.account.account_name}
            </div>
          </td>
          {/* <td>
            <div className="py-4">
              {item.primary_salesrep}
            </div>
          </td> */}
          <td>
            <div className="flex items-center justify-end py-4 pr-4">
              <a href={`mailto:${item.email}`}><FontAwesomeIcon icon={icon({ name: 'paper-plane' })} /></a>
            </div>
          </td>
        </tr>
      ))}
      {
        !data.length &&
        <tr>
          <td colSpan={4}>
            <div className="flex justify-center p-3">
              <span>No data available in table</span>
            </div>
          </td>
        </tr>
      }
      </tbody>
    </table>
  );
};

export default ContactTable;
