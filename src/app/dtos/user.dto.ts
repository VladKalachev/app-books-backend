import type UserModel from '../models/user.model';

export default class User {
  email: string;
  id: number;
  isActivated: boolean;
  isAdmin: boolean;

  constructor(model: UserModel) {
    this.email = model.email;
    this.id = model.id;
    this.isActivated = model.isActivated;
    this.isAdmin = model.isAdmin;
  }
}
