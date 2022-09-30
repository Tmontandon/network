<template>
  <!-- TODO make a post form -->
  {{posts}}
  <!-- TODO make a component with Posts -->

</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted, popScopeId } from 'vue';
import { AppState } from '../AppState.js';
import { postService } from '../services/PostService.js';
import Pop from '../utils/Pop.js';

export default {

  setup() {
    async function getTopPosts() {
      try {
        await postService.getTopPosts()
      } catch (error) {
        Pop.error(error)
      }
    }
    onMounted(() => {
      getTopPosts()
    })

    return {
      posts: computed(() => AppState.posts),
    }
  }
}
</script>

<style scoped lang="scss">

</style>
