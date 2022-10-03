<template>
  <div class="card elevation-2 col-sm-5 m-auto my-2">
    <div class="bg-secondary mt-2 p-2 lighten-35 elevation-2 justify-content-around d-flex ">
      <router-link :to="{name:'Profile', params:{id: post.creator.id}}">
        <div class="selectable d-flex justify-content-around p-1 rounded btn ">
          <span>
            <img class="img me-3" :src="post.creator.picture" alt="🥹">
          </span>
          <span>
            <p class="m-0 text-center"><strong>{{post.creator.name}}</strong></p>
          </span>
        </div>
      </router-link>

      <i v-if="account.id == post.creator.id" title="Delete" class="mdi yo fs-6 mdi-delete btn selectable p-0"
        @click="deletePost(post.id)"></i>
    </div>
    <div class="card-body d-flex flex-column">
      {{post.body}}
    </div>
    <div class="card-footer mb-2 rounded" v-if="post.imgUrl">
      <img class="img-fluid mb-1 rounded" :src="post.imgUrl" alt="Broken img or sum">
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <span v-if="checkLike == true" class="px-3 pb-3">
        <i title="Unlike" class="mdi selectable rounded fs-2 mdi-heart" @click="changeLike(post.id)"></i>
        {{post.likeAmount}}
      </span>
      <span v-else="" class="px-3 pb-3">
        <i title="Like" class="mdi selectable rounded fs-2 mdi-heart-outline" @click="changeLike(post.id)"></i>
        {{post.likeAmount}}
      </span>

      <span>
        Posted: {{this.time}}

      </span>
    </div>
  </div>
</template>


<script>
// import { computed } from '@vue/reactivity';
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
// import { Account } from '../models/Account.js';
import { Post } from '../models/Post.js';
import { postService } from '../services/PostService.js';
import Pop from '../utils/Pop.js';

export default {
  props: {
    post: { type: Post, required: true },
  },
  setup(props) {
    function test() {
      const tes = new Date(props.post.createdAt)
      // console.log(tes.getDay());
      // console.log(Math.floor(tes.getTime() / 1000.0))
    }
    onMounted(() => {
      test()
    })
    return {
      // TODO why is this so annoying
      time: (new Date(props.post.createdAt)),
      // time1: time.getDay,
      account: computed(() => AppState.account),
      checkLike: computed(() => {
        let yo = false
        props.post.likeIds.forEach(id => {
          if (id == AppState.account.id) {
            yo = true
          }
        })
        return yo
      }),
      async deletePost(id) {
        // console.log(id);
        const yes = await Pop.confirm('Delete This Post?')
        if (!yes) {
          return
        }
        try {
          await postService.deletePost(id)
        } catch (error) {
          Pop.error('Something Up with Delete', error)
        }
      },
      async changeLike(id) {
        try {
          await postService.changeLike(id)
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.img {
  height: 5vh;
  border-radius: 50%;
}

.yo {
  position: absolute;
  right: 3vw;
}
</style>