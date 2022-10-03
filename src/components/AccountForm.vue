<template>
  <div class="component text-shadow">
    <h6 class="text-grey">Edit Account</h6>
    <form class="glass p-3 rounded-3 account-form" @submit.prevent="saveAccChanges()">
      <div class="card-body text-start">
        <div>
          <label for="name"></label>
          <input type="text" class="form-control" v-model="editable.name" name="name" placeholder="Name">
        </div>
        <div>
          <label for="picture"></label>
          <input type="url" class="form-control" v-model="editable.picture" name="picture" placeholder="Pfp">
        </div>
        <div>
          <label for="coverImg"></label>
          <input type="url" class="form-control" v-model="editable.coverImg" name="coverImg" placeholder="Cover Image">
        </div>
        <div>
          <label for="bio"></label>
          <textarea type="text" class="form-control" v-model="editable.bio" name="bio" rows="8" placeholder="Bio"
            style="resize:none"></textarea>
        </div>
        <div>
          <label for="github"></label>
          <input type="url" class="form-control" v-model="editable.github" name="github" placeholder="Github">
        </div>
        <div>
          <label for="linkedin"></label>
          <input type="url" class="form-control" v-model="editable.linkedin" name="linkedin" placeholder="LinkedIn">
        </div>
        <div>
          <label for="graduated" class="text-grey me-3">Graduated?</label>
          <!-- TODO ask why no work, and ask why my v-models arent v-modeling -->
          <!-- v-model="acc.graduated ? checked : ''" -->

          <input type="checkbox" v-if="acc.graduated == true" class="text-center" name="graduated"
            placeholder="Graduated?" v-model="editable.graduated">
        </div>
        <div>
          <button type="submit" class="btn btn-outline-light mt-3">Save</button>
        </div>
      </div>
    </form>

  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { ref, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { accountService } from '../services/AccountService.js';
import Pop from '../utils/Pop.js';

export default {

  setup() {
    const editable = ref({})
    watchEffect(() => {
      editable.data = { ...AppState.account }
    })
    return {
      acc: computed(() => AppState.account),
      editable,
      async saveAccChanges() {
        try {
          await accountService.saveAccChanges(editable.value)
        } catch (error) {
          Pop.error(error)
        }
      }
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