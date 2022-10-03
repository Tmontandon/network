<template>
  <div class="component ee" :style="{backgroundImage: `url(${p.coverImg})`}">
    <AccountDetails />
    <div class="my-3">
      <AccountForm />
    </div>
  </div>
</template>


<script>
import AccountDetails from '../components/AccountDetails.vue';
import Posts from '../components/Posts.vue';
import AccountForm from '../components/AccountForm.vue';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
export default {
  setup() {
    return {
      p: computed(() => AppState.account)
    };
  },
  components: { AccountDetails, Posts, AccountForm }
}
</script>


<style lang="scss" scoped>
.ee {
  background-size: cover;
  background-position: center;
}
</style>