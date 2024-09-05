export class Picture {
  constructor(data) {
    this.copyright = data.copyright
    this.date = data.date
    this.explanation = data.explanation
    this.imgUrl = data.hdurl
    this.mediaType = data.media_type
    this.title = data.title
  }
}

const data = {
  "copyright": "Eric Benson",
  "date": "2024-09-05",
  "explanation": "About 70,000 light-years across, NGC 247 is a spiral galaxy smaller than our Milky Way. Measured to be only 11 million light-years distant it is nearby though. Tilted nearly edge-on as seen from our perspective, it dominates this telescopic field of view toward the southern constellation Cetus. The pronounced void on one side of the galaxy's disk recalls for some its popular name, the Needle's Eye galaxy. Many background galaxies are visible in this sharp galaxy portrait, including the remarkable string of four galaxies just below and left of NGC 247 known as Burbidge's Chain. Burbidge's Chain galaxies are about 300 million light-years distant. NGC 247 itself is part of the Sculptor Group of galaxies along with shiny spiral NGC 253.",
  "hdurl": "https://apod.nasa.gov/apod/image/2409/NGC247-Hag-Ben2048.JPG",
  "media_type": "image",
  "service_version": "v1",
  "title": "NGC 247 and Friends",
  "url": "https://apod.nasa.gov/apod/image/2409/NGC247-Hag-Ben1024.JPG"
}