import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { IPagination } from 'resources/interfaces';

import { getMailsAction, getMailAction } from 'redux/actions';

export const useMailsState = () => useSelector(({
  mailsReducer
}: RootState) => mailsReducer);

export const useGetMailsAction = () => {
  const dispatch = useDispatch();
  return (query: { searchKey?: string, group?: string } & IPagination) => dispatch<any>(getMailsAction(query))
}

export const useGetMailAction = () => {
  const dispatch = useDispatch();
  return (id: number) => dispatch<any>(getMailAction(id))
}
