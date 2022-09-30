import { Account } from "./Account.js"

export class Post {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.creator = new Account(data.creator)
    this.likeIds = data.likeIds
    this.likeAmount = data.likeIds.length
    this.imgUrl = data.imgUrl
  }
}