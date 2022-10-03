<template>
  <div class="component text-shadow container py-2">
    <!-- {{post.creator.name}} -->
    <span class=" d-flex justify-content-center my-2">
      <h1 class="text-center">{{p.name}}</h1>
      <span class="text-center fs-1 ms-2" v-if="p.graduated == true">🎓</span>
    </span>
    <div class="text-center">
      <img :src="p.picture" alt="Pfp" class="img mb-3">
    </div>
    <div class="row">
      <div class="col-md-12">
        <p class="text-grey">Contact:</p>
        <div class="p-3 rounded-2 elevation-2 glass">
          <h5 class="">{{p.email}}</h5>
          <a :href="p.linkedin" target="_blank"><i v-if="p.linkedin" class="mdi mdi-linkedin fs-2 me-3"></i></a>
          <a :href="p.github" target="_blank"><i v-if="p.github" class="mdi mdi-github fs-2 "></i></a>
        </div>
      </div>
    </div>
    <div class="col-md-6 mt-2" v-if="p.class">
      <p class="text-grey">Class:</p>
      <h5 class="p-3 rounded-2 elevation-2 glass">
        {{p.class}}
      </h5>
    </div>
    <div class="row mt-5" v-if="p.bio">
      <p class="text-shadow col-12 p-3 rounded-2 elevation-2 glass">{{p.bio}}</p>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';

export default {
  setup() {
    return {
      p: computed(() => AppState.account)
    }
  }
}
</script>


<style lang="scss" scoped>
.glass {
  background-color: rgba(40, 34, 34, 0.708);
  text-overflow: ellipsis;
  overflow: hidden;
  // white-space: nowrap;
}

img {
  max-width: 100px;
}

.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px rgb(19, 15, 14);
  font-weight: bold;
  letter-spacing: 0.08rem
    /* Second Color  in text-shadow is the blur */
}

.text-madow {
  color: rgb(55, 65, 75);
  text-shadow: 1px 1px rgb(213, 198, 198), 0px 0px 5px rgb(173, 167, 167);
  font-weight: bold;
  letter-spacing: 0.08rem
    /* Second Color  in text-shadow is the blur */
}

.component {

  // height: ;
  padding: 3rem;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

}
</style>