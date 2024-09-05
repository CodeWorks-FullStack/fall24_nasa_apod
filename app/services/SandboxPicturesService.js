import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js"

class SandboxPicturesService {
  async getMyPictures() {
    const response = await api.get('api/apods')
    console.log('GOT MY PICTURES 📷🌌🛰️', response.data);
  }
  async savePicture() {
    const response = await api.post('api/apods', AppState.picture)
    console.log('SAVED PICTURE 💾🌌📷', response.data);
  }
}

export const sandboxPicturesService = new SandboxPicturesService()