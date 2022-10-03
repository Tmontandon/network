<template>
  <div class="component">
    <form @submit.prevent="searchSubmit">
      <div class="input-group">
        <input type="text" class="form-control" required="true" minlength="2" placeholder="Search" name="search"
          v-model="search.term">
        <label for="search" class="visually-hidden">Search</label>
        <button type="submit" class="btn btn-dark "><i class="mdi mdi-magnify"></i></button>
      </div>
    </form>

  </div>
</template>


<script>
import { ref } from 'vue';
import { postService } from '../services/PostService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    const search = ref({})

    return {
      search,
      async searchSubmit() {
        try {
          await postService.getSearchResults(search.value.term)
        } catch (error) {
          logger.error
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>