<template>
  <!-- TODO List acc details -->
  <ProfileDetails :profile="account" />
  <!-- TODO Form to edit acc if acc id = route params id-->
  <!-- TODO Posts of profile -->


  AHHH ACC PAGE
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import ProfileDetails from '../components/ProfileDetails.vue';
import Posts from '../components/Posts.vue';
export default {

  setup() {
    return {
      account: computed(() => AppState.account)
    };
  },
  components: { ProfileDetails, Posts }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
