import { nasaAPI } from "./AxiosService.js"

class NasaPicturesService {
  async getNasaPicture() {
    const response = await nasaAPI.get('planetary/apod?api_key=2DRMc8Ah0Y0rljaAOqEQtjiMY3f6ZrfswxzINUX1')
    console.log('GOT PICTURE 🌌📷', response.data);
  }
}

export const nasaPicturesService = new NasaPicturesService()