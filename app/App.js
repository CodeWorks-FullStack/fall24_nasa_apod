import { AuthController } from './controllers/AuthController.js';
import { NasaPicturesController } from './controllers/NasaPicturesController.js';
import { SandboxPicturesController } from './controllers/SandboxPicturesController.js';
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()
  NasaPicturesController = new NasaPicturesController()
  SandboxPicturesController = new SandboxPicturesController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
