<template>
  <div class="component">
    <!-- {{ad.tall}} -->
    <img :src="ad.tall" :alt="ad.title" class="img-fluid my-4">

    <!-- {{}} -->
    <!-- <button @click="getAds()"></button> -->
  </div>
</template>


<script>
import { onMounted } from 'vue';
import { Ad } from '../models/Ad.js';
import { adService } from '../services/AdService.js';
import Pop from '../utils/Pop.js';
export default {
  props: {
    ad: { type: Ad, required: true }
  },
  setup(props) {
    async function getAds() {
      try {
        await adService.getAds()
      } catch (error) {
        Pop.error(error)
      }
    }
    onMounted(() => getAds())
    return {

    }
  }
}
</script>


<style lang="scss" scoped>

</style>