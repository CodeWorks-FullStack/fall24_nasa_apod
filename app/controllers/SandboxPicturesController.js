import { AppState } from "../AppState.js";
import { sandboxPicturesService } from "../services/SandboxPicturesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class SandboxPicturesController {
  constructor() {
    console.log('🥪📦📷🎮');
    // NOTE get my pictures after I log in
    AppState.on('user', this.getMyPictures)
    AppState.on('myPictures', this.drawMyPictures)
  }

  async savePicture() {
    try {
      await sandboxPicturesService.savePicture()
      Pop.success('Picture was saved!')
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  async getMyPictures() {
    try {
      await sandboxPicturesService.getMyPictures()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  drawMyPictures() {
    const pictures = AppState.myPictures
    let picturesHTML = ''
    pictures.forEach(picture => picturesHTML += picture.listHTMLTemplate)
    setHTML('my-pictures', picturesHTML)
  }
}