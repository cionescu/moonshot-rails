import Shepherd from './shepherd_controller'

export { Shepherd }

export function registerControllers(application) {
  application.register('moonshot-shepherd', Shepherd)
}
