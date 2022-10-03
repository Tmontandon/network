<template>
  <header class="d-flex justify-content-between align-items-center bg-dark bord">
    <Navbar />
    <!-- TODO Make Search Bar Work -->
    <div class="me-3">
      <SearchBar />
    </div>
  </header>

  <main class="container-fluid ">
    <section class="row h0">
      <!-- TODO add acc details -->
      <div class="bg-dark col-md-2 d-none d-md-block bor rounded-bottom">
        <Login />
      </div>
      <!-- TODO Make Scrollable -->
      <div class="scrollin h0 col-12 col-md-10" v-if="ads">
        <Ads v-for="a in ads" :ad="a" />
        <router-view />
        <!-- NOTE PAGE BUTTONS HERE -->

      </div>
      <!-- STUB PREVIOUS AD COMPONENT TEMPLATE -->
      <!-- <div class="h0 col-2" v-if="ads">
        TODO Make a Ad component
        <Ads v-for="a in ads" :ad="a" />
        v-if="ad"v-for="a in ads" :ad="a"
      </div> -->
    </section>
  </main>
  <!-- <footer>
    <div class="bg-dark text-light text-center p-4">
      <h3 class="mb-0">🐶</h3>
    </div>
  </footer> -->
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import Ads from './components/Ads.vue'
import { adService } from './services/AdService.js'


export default {
  setup() {
    async function getAds() {
      try {
        await adService.getAds()
      } catch (error) {
        console.error(error);
      }
    }
    onMounted(() => getAds())
    return {

      ads: computed(() => AppState.ads),
    }
  },
  components: { Navbar, Ads, }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.h0 {
  height: 90vh;
}

.scrollin {
  max-height: 100vh;
  overflow: auto;
}

.bor {
  border-bottom: .75rem solid rgb(205, 205, 205);
  border-right: .75rem solid rgb(205, 205, 205);
}

.bord {
  border-bottom: .5rem solid rgb(205, 205, 205);
}
</style>
