import { AppState } from "../AppState.js";
import { Ad } from "../models/Ad.js";
import { realApi } from "./AxiosService.js";

const { api } = ("./AxiosService.js")

class AdService {

  async getAds() {
    // console.log('I work');
    // debugger
    const res = await realApi.get('/api/ads')
    AppState.ads = res.data.map(a => new Ad(a))
    console.log(AppState.ads);
    // console.log(Ad.tall)
  }
}
export const adService = new AdService