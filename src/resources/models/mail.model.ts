export class MailModel {
  id: number;
  name: string;
  image: string;
  status: string;

  constructor(init: any = {}) {
    const data = {
      title: '',
      image: '',
      ...init,
    };

    this.id = data.id;
    this.name = data.name;
    this.image = data.image;
    this.status = data.status;
  }
}
