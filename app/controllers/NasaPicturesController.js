import { AppState } from "../AppState.js";
import { nasaPicturesService } from "../services/NasaPicturesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class NasaPicturesController {
  constructor() {
    console.log('🌌🛰️🎮');
    AppState.on('picture', this.drawNasaPicture)
    this.getNasaPicture()
  }

  async getNasaPicture() {
    try {
      await nasaPicturesService.getNasaPicture()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  drawNasaPicture() {
    const picture = AppState.picture
    setHTML('picture-of-the-day', picture.detailsHTMLTemplate)
  }
}