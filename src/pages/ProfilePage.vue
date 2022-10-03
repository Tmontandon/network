<template>
  <div class="component">
    <ProfileDetails />
    <div class="row">
      <Posts v-for="p in posts" :post="p" />
    </div>
    <div class="d-flex justify-content-evenly my-1">
      <button @click="changeTopPosts(newPage)" :disabled="!newPage" :class="{'disabled' : !newPage}"
        class="btn btn-info">Newer</button>
      <!-- TODO make page number -->
      <button @click="changeTopPosts(prevPage)" :disabled="!prevPage" class="btn btn-info"
        :class="{'disabled' : !prevPage}">Older</button>
    </div>
  </div>
</template>


<script>
// import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
// import { AppState } from '../AppState.js';
import ProfileDetails from '../components/ProfileDetails.vue';
import { profileService } from '../services/ProfileService.js';
import Pop from '../utils/Pop.js';
import Posts from '../components/Posts.vue';
import { postService } from '../services/PostService.js';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
export default {
  setup() {
    const route = useRoute()
    async function getSelectedProfile(id) {
      try {
        await profileService.getSelectedProfile(id)
      } catch (error) {
        Pop.error(error)
      }
    }
    async function getSelectedProfilePosts(id) {
      try {
        console.log(id)
        await postService.getSelectedProfilePosts(id)
      } catch (error) {
        Pop.error(error)
      }
    }
    onMounted(() => {
      getSelectedProfile(route.params.id)
      getSelectedProfilePosts(route.params.id)
    })
    return {
      sProfile: computed(() => AppState.selectedProfile),
      posts: computed(() => AppState.posts),
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
  components: { ProfileDetails, Posts }
}
</script>


<style lang="scss" scoped>

</style>