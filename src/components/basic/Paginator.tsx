import { FC } from 'react';

interface PaginatorProps {
  page: number;
  onChangePage?: (_: number) => void;
  total: number;
  pageSize: number;
}

const Paginator: FC<PaginatorProps> = ({ page, onChangePage, total, pageSize }) => {
  const handleChangePage = (val: number) => {
    if (onChangePage) {
      onChangePage(val);
    }
  }

  return (
    <div className="flex items-center justify-center">
    {
      new Array(Math.ceil(total / pageSize)).fill(0).map((_, index) => (
        <div
          key={`page-${index}`}
          className={`flex items-center justify-center w-10 h-10 rounded-lg mr-4 cursor-pointer ${page === (index + 1) ? 'bg-gray-500 text-white' : 'bg-gray-100 text-black'}`}
          onClick={() => handleChangePage(index + 1)}
        >
          {index + 1}
        </div>
      ))
    }
  </div>
  );
};

export default Paginator;