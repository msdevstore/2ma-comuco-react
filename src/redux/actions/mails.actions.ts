import { Dispatch } from 'redux';
import { MAIL_ACTIONS } from '../action-types';
import { MailsService } from 'service/mails.service';
import { IPagination } from 'resources/interfaces';

export const getMailsAction = (pagination: { searchKey?: string, group?: string } & IPagination) => async (dispatch: Dispatch) => {
  try {
    const res = await MailsService.getMails(pagination);
    dispatch({
      type: MAIL_ACTIONS.GET_MAILS_SUCCESS,
      payload: {
        mails: res.mails,
        total: res.total,
        ...pagination
      }
    });
    return res;
  } catch (err) {
    dispatch({
      type: MAIL_ACTIONS.GET_MAILS_ERROR
    });
  }
}

export const getMailAction = (id: number) => async (dispatch: Dispatch) => {
  try {
    const res = await MailsService.getMail(id);
    dispatch({
      type: MAIL_ACTIONS.GET_MAIL_SUCCESS,
      payload: res.mail
    });
    return res;
  } catch (err) {
    dispatch({
      type: MAIL_ACTIONS.GET_MAILS_ERROR
    });
  }
}
