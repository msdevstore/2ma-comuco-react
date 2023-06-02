export class UserModel {
  name: string;
  email: string;
  constructor(init: any = {}) {
    const data = {
      name: '',
      email: '',
      ...init,
    };

    this.name = data.name;
    this.email = data.email;
  }
}
