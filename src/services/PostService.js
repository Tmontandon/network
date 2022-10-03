import { AppState } from "../AppState.js";
import { Account } from "../models/Account.js";
import { Post } from "../models/Post.js";
import Pop from "../utils/Pop.js"
import { api, realApi } from "./AxiosService.js"

class PostService {

  async changeTopPosts(url) {
    const res = await api.get(url)
    console.log(res.data);
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.newPage = res.data.newer
    AppState.prevPage = res.data.older
  }
  async getTopPosts(query) {
    try {
      const res = await api.get('/api/posts', {
        params: {
          page: query
        }
      })
      // console.log(res.data);
      AppState.posts = res.data.posts.map(p => new Post(p))
      AppState.newpage = res.data.newer
      AppState.prevPage = res.data.older
      // console.log(AppState.posts);
    } catch (error) {
      Pop.error(error)
    }
  }
  async deletePost(id) {
    await api.delete(`/api/posts/${id}`)
    AppState.posts = AppState.posts.filter(p => p.id != id)
  }
  async makePost(formData) {
    // debugger
    const res = await api.post('/api/posts', formData)
    AppState.posts = [new Post(res.data), ...AppState.posts]
    // console.log(res.data)
  }
  async getSearchResults(term) {
    const resProfiles = await api.get('/api/profiles', {
      params: {
        query: term
      }
    })
    const resPosts = await api.get('/api/posts', {
      params: {
        query: term
      }
    })
    // console.log(resPosts.data.posts);
    AppState.posts = resPosts.data.posts.map(p => new Post(p))
    AppState.profiles = resProfiles.data.map(p => new Account(p))
    console.log(AppState.profiles);
  }
  async changeLike(id) {
    const res = await api.post(`/api/posts/${id}/like`)
    // console.log(res.data);
    const index = AppState.posts.findIndex(p => p.id == res.data.id)
    AppState.posts.splice(index, 1, new Post(res.data))
  }
}
export const postService = new PostService