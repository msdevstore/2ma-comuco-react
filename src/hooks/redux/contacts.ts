import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { IPagination } from 'resources/interfaces';

import { getContactsAction } from 'redux/actions';

export const useContactsState = () => useSelector(({
  contactsReducer
}: RootState) => contactsReducer);

export const useGetContactsAction = () => {
  const dispatch = useDispatch();
  return (query: { account?: string, searchKey?: string } & IPagination) => dispatch<any>(getContactsAction(query))
}
