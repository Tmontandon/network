<template>
  <div class="component">
    <!-- {{post.creator.name}} -->
    {{profile.email}}
  </div>
</template>


<script>
import { Account } from '../models/Account.js';
// import { Post } from '../models/Post.js';

export default {
  props: {
    profile: { type: Account, required: true },

    // post: { type: Post, required: true },
  },
  setup(props) {
    console.log(props.profile);
    return {

    }
  }
}
</script>


<style lang="scss" scoped>

</style>