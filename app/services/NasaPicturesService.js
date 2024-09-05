import { AppState } from "../AppState.js";
import { Picture } from "../models/Picture.js";
import { nasaAPI } from "./AxiosService.js"

class NasaPicturesService {
  async getNasaPictureByDate(date) {
    const response = await nasaAPI.get(`planetary/apod?api_key=2DRMc8Ah0Y0rljaAOqEQtjiMY3f6ZrfswxzINUX1&date=${date}`)
    console.log('GOT PICTURE BY DATE 🗓️🌌📷', response.data);
    const newPicture = new Picture(response.data)
    AppState.picture = newPicture
  }
  async getNasaPicture() {
    const response = await nasaAPI.get('planetary/apod?api_key=2DRMc8Ah0Y0rljaAOqEQtjiMY3f6ZrfswxzINUX1')
    console.log('GOT PICTURE 🌌📷', response.data);
    const newPicture = new Picture(response.data)
    AppState.picture = newPicture
  }
}

export const nasaPicturesService = new NasaPicturesService()