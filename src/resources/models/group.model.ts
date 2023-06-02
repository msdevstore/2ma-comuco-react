export class GroupModel {
  id: number;
  name: string;

  constructor(init: any = {}) {
    const data = {
      name: '',
      ...init,
    };

    this.id = data.id;
    this.name = data.name;
  }
}
