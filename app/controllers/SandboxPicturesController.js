import { sandboxPicturesService } from "../services/SandboxPicturesService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxPicturesController {
  constructor() {
    console.log('🥪📦📷🎮');
  }

  async savePicture() {
    try {
      await sandboxPicturesService.savePicture()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }
}