<template>
  <div v-if="account.id">
    <div class="row px-5">
      <PostForm />

    </div>
  </div>
  <div class="row">
    <Profiles v-if="profiles" v-for="p in profiles" :profile="p" />
  </div>
  <div class="row">
    <Posts v-for="p in posts" :key="p.id" :post="p" />
  </div>
  <div class="d-flex justify-content-evenly my-1">
    <button @click="changeTopPosts(newPage)" :disabled="!newPage" :class="{'disabled' : !newPage}"
      class="btn btn-info">Newer</button>
    <!-- TODO make page number -->
    <button @click="changeTopPosts(prevPage)" :disabled="!prevPage" class="btn btn-info"
      :class="{'disabled' : !prevPage}">Older</button>
  </div>
</template>
    
<script>
import { computed } from '@vue/reactivity';
import { onMounted, popScopeId } from 'vue';
import { AppState } from '../AppState.js';
import { postService } from '../services/PostService.js';
import Pop from '../utils/Pop.js';
import Posts from '../components/Posts.vue';
import PostForm from '../components/PostForm.vue';
import Profiles from '../components/Profiles.vue';
import { logger } from '../utils/Logger.js';

export default {
  setup() {
    async function getTopPosts() {
      try {
        await postService.getTopPosts();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    onMounted(() => {
      getTopPosts();
    });
    return {
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account),
      profiles: computed(() => AppState.profiles),
      prevPage: computed(() => AppState.prevPage),
      newPage: computed(() => AppState.newPage),

      async changeTopPosts(url) {
        try {
          await postService.changeTopPosts(url)
        } catch (error) {
          logger.error(error)
          Pop.error(error)
        }
      }

    };
  },
  components: { Posts, PostForm, Profiles }
}
</script>
    
<style scoped lang=" scss">

</style>
