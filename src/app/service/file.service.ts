import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

class FileService {
  async create(image: any) {
    const fileName = uuidv4() + '.jpg';
    image.mv(path.resolve(__dirname, '..', '..', '..', 'upload', fileName));
    return fileName;
  }

  async remove(fileName: string) {
    if (fs.existsSync(path.join(__dirname, '..', '..', '..', 'upload', fileName))) {
      fs.unlink(path.join(__dirname, '..', '..', '..', 'upload', fileName), (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  }
}

export default new FileService();
