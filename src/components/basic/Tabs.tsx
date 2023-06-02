import { FC } from 'react';

interface TabsProps {
  items: string[],
  value?: number;
  onChange?: (_: number) => void;
}

const Tabs: FC<TabsProps> = ({ items, value = 0, onChange }) => {
  const handleChange = (val: number) => {
    if (onChange) {
      onChange(val);
    }
  };

  return (
    <div className="inline-flex">
      {
        items.map((item, index) => (
          <div key={`item-${index}`} className={`text-center rounded-t-xl p-1 border-blue-dark border cursor-pointer md:w-36 sm:w-32 xs:w-28 ${value === index ? 'bg-yellow' : 'bg-white'}`} onClick={() => handleChange(index)}>
            <span className="font-bold">{item}</span>
          </div>
        ))
      }
    </div>
  );
};

export default Tabs;
