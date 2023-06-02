import { useState } from 'react';
import Select from "components/basic/Select";
import Input from 'components/basic/Input';
import ContactTable from '../components/contacts/ContactTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import Paginator from 'components/basic/Paginator';
import { useContactsState, useGetContactsAction } from 'hooks/redux';
import { AccountsService } from 'service';
import { AccountModel } from 'resources/models/account.model';
import { useDebounce } from 'hooks/use-debounce';
import { useEffectOnce } from 'hooks/use-effect-once';

const Contacts = () => {
  const [account, setAccount] = useState<string>('');
  const [searchKey, setSearchKey] = useState('');
  const [accounts, setAccounts] = useState<AccountModel[]>([]);
  const debounceSearchKey = useDebounce(searchKey);

  const { contacts, page, pageSize, total } = useContactsState();
  const getContacts = useGetContactsAction();

  const handleChangePage = (value: number) => {
    getContacts({ page: value, pageSize });
  }

  useEffectOnce(() => {
    AccountsService.getAccounts().then((res) => {
      setAccounts(res)
    })
  }, []);

  useEffectOnce(() => {
    if (account) {
      getContacts({ page: 1, pageSize, account, searchKey: debounceSearchKey });
    } else {
      getContacts({ page: 1, pageSize, searchKey: debounceSearchKey });
    }
  }, [account, debounceSearchKey])

  return (
    <div className="pt-7 pb-3 lg:px-16 md:px-12 sm:px-4 xs:px-0">
      <div className="flex xs:flex-col sm:flex-row items-center mb-5">
        <div className="flex items-center xs:w-full sm:w-max xs:mb-4 sm:mb-0">
          <p className="text-white text-lg mr-3">Filter: </p>
          <Select 
            className="mr-10"
            placeholder="Account"
            value={account}
            onChange={setAccount}
            options={accounts.map((item) => ({
              label: item.account_name,
              value: item.account_name,
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

      <div className="flex-grow overflow-auto bg-white rounded-3xl">
        <div className="p-6 md:min-w-[775px] sm:min-w-[685px] xs:min-w-[600px]">
          <div className="text-2xl text-purple-black font-medium mb-6">Contacts</div>
          <ContactTable data={contacts} />
          <Paginator pageSize={pageSize} page={page} onChangePage={handleChangePage} total={total} />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
