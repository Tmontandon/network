<template>
  <div class="component col-md-4">
    <div class="bg-secondary my-3 p-2 py-3 lighten-25 rounded elevation-2 justify-content-around d-flex ">
      <!-- TODO this wont work because not importing creator id from a post - but the id isnt being saved... -->
      <router-link :to="{name:'Profile', params:{id: profile.id}}">
        <div class="selectable d-flex justify-content-around p-1 rounded btn ">
          <span>
            <img class="img me-3" :src="profile.picture" alt="🥹">
          </span>
          <span>
            <p class="m-0 text-center"><strong>{{profile.name}}</strong></p>
          </span>
        </div>
      </router-link>
    </div>
  </div>
</template>


<script>
import { Account } from '../models/Account.js';

export default {
  props: {
    profile: { type: Account, required: true }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.img {
  height: 5vh;
  border-radius: 50%;
}
</style>