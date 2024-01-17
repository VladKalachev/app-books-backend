import path from 'path';
import { v4 as uuidv4 } from 'uuid';

class FileService {
  async create(image: any) {
    console.log(222, image);
    const fileName = uuidv4() + '.jpg';
    image.mv(path.resolve(__dirname, '..', '..', '..', 'upload', fileName));
    return fileName;
  }
}

export default new FileService();
