export default class BookDto {
  id: number;
  title: string;
  description: string;
  genre: string;
  fullName: string;
  image: string;
  year: number;
  numberPages: number;
  publishing: boolean;
  notes: string;
  read: boolean;
  buy: boolean;

  constructor(model: any) {
    this.id = model.id;
    this.title = model.title;
    this.description = model.description;
    this.genre = model.genre;
    this.fullName = model.fullName;
    this.image = model.image;
    this.year = model.year;
    this.numberPages = model.numberPages;
    this.publishing = model.publishing;
    this.notes = model.notes;
    this.read = model.read;
    this.buy = model.buy;
  }
}
