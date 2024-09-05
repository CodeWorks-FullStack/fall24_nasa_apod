import { AppState } from "../AppState.js";
import { Picture } from "../models/Picture.js";
import { nasaAPI } from "./AxiosService.js"

class NasaPicturesService {
  async getNasaPictureByDate(date) {
    // example request URL: https://api.nasa.gov/planetary/apod?date=2024-09-05
    const response = await nasaAPI.get(`planetary/apod?date=${date}`)
    console.log('GOT PICTURE BY DATE 🗓️🌌📷', response.data);
    // NOTE we get a single object back from this request, no need to map!
    const newPicture = new Picture(response.data)
    AppState.picture = newPicture
  }
  async getNasaPicture() {
    const response = await nasaAPI.get('planetary/apod')
    console.log('GOT PICTURE 🌌📷', response.data);
    // NOTE we get a single object back from this request, no need to map!
    const newPicture = new Picture(response.data)
    AppState.picture = newPicture
  }
}

export const nasaPicturesService = new NasaPicturesService()