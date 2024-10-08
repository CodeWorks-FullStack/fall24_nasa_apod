import { AppState } from "../AppState.js";
import { nasaPicturesService } from "../services/NasaPicturesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class NasaPicturesController {
  constructor() {
    console.log('🌌🛰️🎮');
    AppState.on('picture', this.drawNasaPicture)
    this.getNasaPicture()
    this.setDatePicker()
  }

  async getNasaPicture() {
    try {
      await nasaPicturesService.getNasaPicture()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
  async getNasaPictureByDate(date) {
    try {
      await nasaPicturesService.getNasaPictureByDate(date)
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  getNasaPictureWithDatePicker() {
    const datePickerElem = document.getElementById('date-picker')
    // @ts-ignore
    const date = datePickerElem.value
    this.getNasaPictureByDate(date)
  }


  drawNasaPicture() {
    const picture = AppState.picture
    setHTML('picture-of-the-day', picture.detailsHTMLTemplate)

    // NOTE sets the HTML body's background image
    document.body.style.backgroundImage = `url(${picture.imgUrl})`

    setHTML('picture-copyright', `©️ ${picture.author}`)
  }

  setDatePicker() {
    const datePickerElem = document.getElementById('date-picker')
    const todaysDate = new Date().toISOString().substring(0, 10) //formats a date as YYYY-MM-DD

    // @ts-ignore
    datePickerElem.value = todaysDate
    // @ts-ignore
    datePickerElem.max = todaysDate
  }
}