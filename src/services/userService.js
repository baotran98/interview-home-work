import { baseService } from './baseService'

export class UserService extends baseService {
  constructor() {
    super()
  }

  getUser = () => {
    return this.get(`users`)
  }
}
export const userService = new UserService()
