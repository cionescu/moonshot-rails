import { Crisp } from "crisp-sdk-web"
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    websiteId: String,
    identification: Object
  }

  connect() {
    Crisp.configure(this.websiteIdValue)
    if (Object.keys(this.identificationValue).length) {
      const { email, name } = this.identificationValue

      Crisp.user.setEmail(email)
      Crisp.user.setNickname(name)
    }
  }

  open(e) {
    e.preventDefault()
    Crisp.chat.open()
  }
}
