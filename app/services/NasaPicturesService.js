import { AppState } from "../AppState.js";
import { Picture } from "../models/Picture.js";
import { nasaAPI } from "./AxiosService.js"

class NasaPicturesService {
  async getNasaPictureByDate(date) {
    const response = await nasaAPI.get(`planetary/apod?date=${date}`)
    console.log('GOT PICTURE BY DATE 🗓️🌌📷', response.data);
    const newPicture = new Picture(response.data)
    AppState.picture = newPicture
  }
  async getNasaPicture() {
    const response = await nasaAPI.get('planetary/apod')
    console.log('GOT PICTURE 🌌📷', response.data);
    const newPicture = new Picture(response.data)
    AppState.picture = newPicture
  }
}

export const nasaPicturesService = new NasaPicturesService()