export default class UserWithBook {
  email: string;
  id: number;
  isActivated: boolean;
  // TODO не хватает описанной модели
  Books: any[];

  constructor(model: any) {
    this.email = model.email;
    this.id = model.id;
    this.isActivated = model.isActivated;
    this.Books = model.Books;
  }
}
