<template>
  <nav class="navbar navbar-expand-lg d-flex justify-content-between navbar-dark bg-dark px-3 ">
    <router-link class="navbar-brand d-flex m-0" :to="{ name: 'Home' } ">
      <div @click="getTopPosts()"
        class="d-flex flex-column align-items-center btn text-secondary lighten-30 selectable text-uppercase">
        <h3 class="m-0">
          Home
        </h3>
      </div>
    </router-link>
    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <!-- <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link :to="{ name: 'About' }" class="btn text-success lighten-30 selectable text-uppercase">
            About
          </router-link>
        </li>
      </ul>
      NOTE PREV LOGIN COMPONENT HERE
      <Login />
    </div> -->
  </nav>
</template>

<script>
import { postService } from '../services/PostService.js';
import Pop from '../utils/Pop.js';
import Login from './Login.vue'
export default {
  setup() {
    return {
      async getTopPosts() {
        try {
          await postService.getTopPosts();
        }
        catch (error) {
          Pop.error(error);
        }
      }
    }
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
