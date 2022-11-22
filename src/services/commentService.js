import { baseService } from './baseService'

export class CommentService extends baseService {
  constructor() {
    super()
  }

  getComment = () => {
    return this.get(`comments`)
  }
}
export const commentService = new CommentService()
