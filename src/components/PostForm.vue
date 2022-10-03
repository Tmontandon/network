<template>
  <div class="card p-2 my-2">
    <h3 class="mx-3 pt-3">Make A Post!</h3>
    <div class="form-group mx-3">
      <label for="body"></label>
      <input type="text" v-model="newPost.body" placeholder="Content" required class="form-control">
    </div>
    <div class="form-group mb-4 mx-3">
      <label for="imgUrl"></label>
      <input type="url" v-model="newPost.imgUrl" placeholder="ImgUrl" class="form-control">
    </div>
    <!-- TODO Put v-if - disable or not show? - check phase 1 -->
    <div class="my-1" v-if="newPost.body">
      <button class="btn btn-outline-secondary mx-3" @click="postFormSubmit()" type="submit">Post</button>
    </div>
  </div>
  <hr>
</template>


<script>
import { onMounted, ref } from 'vue';
import { Post } from '../models/Post.js';
import { postService } from '../services/PostService.js';
import Pop from '../utils/Pop.js';

export default {

  setup() {
    //  explain what this ref does?
    // REVIEW makes new object to hold input data
    let newPost = ref({})
    return {
      //  why must we return newPost?
      // REVIEW puts in template above
      newPost,
      // TODO How To Reset Form On completion!!
      async postFormSubmit() {
        try {
          await postService.makePost(newPost.value)
          newPost.value = {}
        } catch (error) {
          Pop.error
        }

      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>