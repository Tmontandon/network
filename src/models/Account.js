export class Account {
  constructor(data) {
    this.id = data.id || data._id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.coverImg = data.coverImg
    this.class = data.class
    this.github = data.github
    this.graduated = data.graduated
    this.linkedin = data.linkedin

  }
}
