import { nasaPicturesService } from "../services/NasaPicturesService.js";
import { Pop } from "../utils/Pop.js";

export class NasaPicturesController {
  constructor() {
    console.log('🌌🛰️🎮');
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
}