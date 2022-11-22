import { baseService } from './baseService'

export class PostService extends baseService {
  constructor() {
    super()
  }

  getList = () => {
    return this.get(`posts`)
  }
}
export const postService = new PostService()
