import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js"

class SandboxPicturesService {
  async savePicture() {
    const response = await api.post('api/apods', AppState.picture)
    console.log('SAVED PICTURE 💾🌌📷', response.data);
  }
}

export const sandboxPicturesService = new SandboxPicturesService()