import PostHogController from './post_hog_controller'
import ShepherdController from './shepherd_controller'
import CrispController from './crisp_controller'

export {
  PostHogController, ShepherdController, CrispController
}

export function registerControllers(application) {
  application.register('shepherd', ShepherdController)
  application.register('post-hog', PostHogController)
  application.register('crisp', CrispController)
}
