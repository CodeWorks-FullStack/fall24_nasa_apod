export class Picture {
  constructor(data) {
    this.author = data.copyright || data.author
    this.date = data.date
    this.description = data.explanation || data.description
    this.imgUrl = data.hdurl || data.imgUrl
    this.mediaType = data.media_type || ''
    this.title = data.title || ''
  }

  get detailsHTMLTemplate() {
    return /*html*/`
      <div class="magic-text">
        <div class="d-flex gap-2 justify-content-center align-items-center">
          <h1>${this.title}</h1>
          <a href="${this.imgUrl}" target="_blank" class="text-light fs-1" title="See full size image!">
            <i class="mdi mdi-camera"></i>
          </a>
        </div>
        <div class="d-flex justify-content-between fs-4 mb-3">
          <button onclick="app.SandboxPicturesController.savePicture()" class="btn btn-outline-light"><i class="mdi mdi-heart"></i> Save</button>
          <time datetime="${this.date}">${this.date}</time>
        </div>
        <p class="secret-text">${this.description}</p>
      </div>
    `
  }
}

const nasaData = {
  "copyright": "Eric Benson",
  "date": "2024-09-05",
  "explanation": "About 70,000 light-years across, NGC 247 is a spiral galaxy smaller than our Milky Way. Measured to be only 11 million light-years distant it is nearby though. Tilted nearly edge-on as seen from our perspective, it dominates this telescopic field of view toward the southern constellation Cetus. The pronounced void on one side of the galaxy's disk recalls for some its popular name, the Needle's Eye galaxy. Many background galaxies are visible in this sharp galaxy portrait, including the remarkable string of four galaxies just below and left of NGC 247 known as Burbidge's Chain. Burbidge's Chain galaxies are about 300 million light-years distant. NGC 247 itself is part of the Sculptor Group of galaxies along with shiny spiral NGC 253.",
  "hdurl": "https://apod.nasa.gov/apod/image/2409/NGC247-Hag-Ben2048.JPG",
  "media_type": "image",
  "service_version": "v1",
  "title": "NGC 247 and Friends",
  "url": "https://apod.nasa.gov/apod/image/2409/NGC247-Hag-Ben1024.JPG"
}

const sandaboxData = {
  "_id": "66d9ede45f101980a4ee5262",
  "date": "2023-02-22",
  "imgUrl": "https://apod.nasa.gov/apod/image/2302/SunHalphaC_Ergun_2065.jpg",
  "creatorId": "66d76c3d0ae3101cf6fb09cf",
  "description": "Our Sun is becoming a busy place.  Only two years ago, the Sun was emerging from a solar minimum so quiet that months would go by without even a single sunspot.  In contrast, already this year and well ahead of schedule, our Sun is unusually active, already nearing solar activity levels seen a decade ago during the last solar maximum.  Our increasingly active Sun was captured two weeks ago sporting numerous interesting features. The image was recorded in a single color of light called Hydrogen Alpha, color-inverted, and false colored.  Spicules carpet much of the Sun's face.  The brightening towards the Sun's edges is caused by increased absorption of relatively cool solar gas and called limb darkening.  Just outside the Sun's disk, several scintillating prominences protrude, while prominences on the Sun's face are known as filaments and show as light streaks.  Magnetically tangled active regions are both dark and light and contain cool sunspots.  As our Sun's magnetic field winds toward solar maximum over the next few years, whether the Sun's high activity will continue to increase is unknown.",
  "author": "\nMehmet Ergün\n",
  "__v": 0,
  "creator": {
    "_id": "66d76c3d0ae3101cf6fb09cf",
    "name": "dog",
    "picture": "https://s.gravatar.com/avatar/c399aca75ea0856426f3f66fa4a07fe7?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fdo.png",
    "id": "66d76c3d0ae3101cf6fb09cf"
  },
  "id": "66d9ede45f101980a4ee5262"
}