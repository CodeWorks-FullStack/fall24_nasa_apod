import { AppState } from "../AppState.js";
import { Picture } from "../models/Picture.js";
import { api } from "./AxiosService.js"

class SandboxPicturesService {
  async deletePicture(pictureId) {
    // NOTE delete request
    // This will delete a specific resource. The Id of the resource must be included in the request URL
    // Delete requests do not have a body included
    const response = await api.delete(`api/apods/${pictureId}`)
    console.log('DELETED PICTURE', response.data);

    const pictureIndex = AppState.myPictures.findIndex(picture => picture.id == pictureId)
    AppState.myPictures.splice(pictureIndex, 1)
  }
  async getMyPictures() {
    const response = await api.get('api/apods')
    console.log('GOT MY PICTURES 📷🌌🛰️', response.data);
    // NOTE we get an array of objects back from this request, so we need to map!
    const pictures = response.data.map(pictureData => new Picture(pictureData))
    AppState.myPictures = pictures
  }

  async savePicture() {
    const response = await api.post('api/apods', AppState.picture)
    console.log('SAVED PICTURE 💾🌌📷', response.data);
    const newPicture = new Picture(response.data)
    AppState.myPictures.push(newPicture)
  }
}

export const sandboxPicturesService = new SandboxPicturesService()