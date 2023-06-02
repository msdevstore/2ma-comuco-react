export class AccountModel {
  account_name: string;
  account_number: string;
  company_address: string;

  constructor(init: any = {}) {
    const data = {
      account_name: '',
      account_number: '',
      company_address: '',
    };

    this.account_name = data.account_name;
    this.account_number = data.account_number;
    this.company_address = data.company_address;
  }
}
