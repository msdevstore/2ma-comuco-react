import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

interface ICustomer {
  name: string;
  email: string;
}

interface CustomerItemProps {
  data: ICustomer;
}

const CustomerItem: FC<CustomerItemProps> = ({ data }) => (
  <div className="md:px-9 sm:px-6 xs:px-4 md:py-2 xs:py-1 flex items-center bg-gray-200 border-t border-gray-300">
    <div>
      <svg className="md:w-8 xs:w-6 text-gray-600 fill-current" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PermContactCalendarIcon"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></svg>
    </div>

    <div className="md:px-4 xs:px-2 md:pr-20 sm:pr-14 xs:pr-8">
      <p className="md:text-xl sm:text-base xs:text-sm">{data.name}</p>
      <p className="md:text-sm xs:text-xs text-gray-500">{data.email}</p>
    </div>

    <div className="flex items-center gap-4">
      <FontAwesomeIcon className="text-xs text-gray-500" icon={icon({ name: 'circle-info' })} />
      <FontAwesomeIcon className="md:text-xl sm:text-base xs:text-sm" icon={icon({ name: 'envelope-open' })} />
    </div>
  </div>
);

export default CustomerItem;