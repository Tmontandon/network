import { AppState } from "../AppState.js";
import { Post } from "../models/Post.js";
import Pop from "../utils/Pop.js"
import { api } from "./AxiosService.js"

class PostService {

  async getTopPosts(page = 2) {
    try {
      const res = await api.get('/api/posts', {
        params: {
          page
        }
      })
      console.log(res.data);
      AppState.posts = res.data.posts.map(p => new Post(p))
      AppState.page = res.data.page
      AppState.prevPage = res.data.total_pages
      console.log(AppState.posts);
    } catch (error) {
      Pop.error(error)
    }
  }

}
export const postService = new PostService