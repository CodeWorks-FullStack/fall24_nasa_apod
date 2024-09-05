import { nasaAPI } from "./AxiosService.js"

class NasaPicturesService {
  async getNasaPicture() {
    const response = await nasaAPI.get('planetary/apod?api_key=DEMO_KEY')
    console.log('GOT PICTURE 🌌📷', response.data);
  }
}

export const nasaPicturesService = new NasaPicturesService()