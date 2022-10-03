import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"
import { api } from "./AxiosService.js"

class ProfileService {
  async getSelectedProfile(id) {
    const res = await api.get(`/api/profiles/${id}`)
    AppState.selectedProfile = new Account(res.data)
    // console.log(AppState.selectedProfile);
  }

}

export const profileService = new ProfileService