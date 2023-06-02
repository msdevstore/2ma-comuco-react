import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import Select from "components/basic/Select";
import Input from 'components/basic/Input';
import { useMailsState, useGetMailsAction } from 'hooks/redux';
import { useDebounce } from 'hooks/use-debounce';
import { GroupModel } from 'resources/models';
import { GroupsService } from 'service';
import { useEffectOnce } from 'hooks/use-effect-once';

const Mails = () => {
  const { mails, pageSize } = useMailsState();
  const getMails = useGetMailsAction();

  const [group, setGroup] = useState<string>('');
  const [groups, setGroups] = useState<GroupModel[]>([]);
  const [searchKey, setSearchKey] = useState('');

  const debounceSearchKey = useDebounce(searchKey);

  useEffectOnce(() => {
    GroupsService.getGroups().then(res => {
      setGroups(res);
    });
  }, []);

  useEffectOnce(() => {
    getMails({ page: 1, pageSize, searchKey: debounceSearchKey, group });
  }, [debounceSearchKey, group]);

  const navigate = useNavigate();

  return (
    <div className="pt-7 pb-3 xl:px-16 lg:px-12 md:px-8 sm:px-4 xs:px-0">
      <div className="flex xs:flex-col sm:flex-row items-center mb-5">
        <div className="flex items-center xs:w-full sm:w-max xs:mb-4 sm:mb-0">
          <p className="text-white text-lg xs:mr-2 md:mr-3">Filter: </p>
          <Select 
          className="mr-10"
          placeholder="Group"
          value={group}
          onChange={setGroup}
          options={groups.map((group) => ({
            label: group.name,
            value: group.name,
          }))} 
        />
        </div>
        <Input
          className="rounded-xxl"
          placeholder="Search"
          value={searchKey}
          onChange={setSearchKey}
          leftIcon={<FontAwesomeIcon className="text-sm text-gray-600" icon={icon({ name: 'search' })} />}
        />
      </div>

      <div className="grid grid-cols-12 lg:gap-8 md:gap-6 sm:gap-4 xs:gap-0">
        {
          mails.map((mail, index) => (
            <div
              key={`mail-${index}`}
              className="xxl:col-span-3 lg:col-span-4 md:col-span-6 xs:col-span-12 xs:mb-4 md:mb-0 bg-white rounded-xxl"
            >
              <div className="px-4 pt-5 pb-8">
                <p className="text-xl font-bold">{mail.name}</p>
              </div>
              <div className="px-4 py-3 border-t border-b border-gray-500">
                <img className="w-full" src={mail.image ? mail.image : '/assets/images/image-1.png'} alt="" />
              </div>
              <div className="px-4 py-6 flex justify-center">
                <button className="bg-green-600 text-white rounded px-8 py-2 leading-1" onClick={() => navigate(`/mails/${mail.id}`)}>
                  Send
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default Mails;
