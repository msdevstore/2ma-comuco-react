import { AccountModel } from "./account.model";

export class ContactModel {
  first_name: string;
  last_name: string;
  account: AccountModel;
  primary_salesrep: string;
  email: string;

  constructor(init: any = {}) {
    const data = {
      first_name: '',
      last_name: '',
      account: new AccountModel(),
      primary_salesrep: '',
      ...init,
    };

    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.account = data.account;
    this.primary_salesrep = data.primary_salesrep;
    this.email = data.email;
  }
}
