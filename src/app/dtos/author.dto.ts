export default class AuthorDto {
  id: number;
  fullName: string;

  constructor(model: any) {
    this.id = model.id;
    this.fullName = model.fullName;
  }
}
