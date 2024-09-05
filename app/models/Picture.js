export class Picture {
  constructor(data) {
    this.author = data.copyright || data.author
    this.date = data.date
    this.description = data.explanation || data.description
    this.imgUrl = data.hdurl || data.imgUrl
    this.mediaType = data.media_type || ''
    this.title = data.title || ''
    this.id = data.id || ''
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
          <button onclick="app.SandboxPicturesController.savePicture()" class="btn btn-outline-light">
            <i class="mdi mdi-heart"></i> Save
          </button>
          <time datetime="${this.date}">${this.date}</time>
        </div>
        <p class="secret-text">${this.description}</p>
      </div>
    `
  }

  get listHTMLTemplate() {
    return /*html*/`
    <div class="mb-3 position-relative p-2">
      <img  src="${this.imgUrl}" alt="${this.author} took this picture on ${this.date}" class="my-picture rounded">
      <i onclick="app.SandboxPicturesController.deletePicture('${this.id}')" class="mdi mdi-close-thick text-danger position-absolute top-0 fs-2" title="Delete Picture" role="button"></i>
      <p class="position-absolute bottom-0 fs-2 selectable" title="Display this picture"  onclick="app.NasaPicturesController.getNasaPictureByDate('${this.date}')" role="button">${this.date}</p>
    </div>
    `
  }
}
