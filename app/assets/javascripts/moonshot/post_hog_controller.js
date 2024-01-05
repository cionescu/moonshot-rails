import posthog from 'posthog-js'
import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="post-hog"
export default class extends Controller {
  static values = {
    apiKey: String,
    identification: Object
  }

  connect() {
    posthog.init(this.apiKeyValue, {
      api_host: 'https://eu.posthog.com',
      custom_campaign_params: ["ref"],
      session_recording: {
        maskAllInputs: false,
        maskInputOptions: {
            password: true
        }
      }
    })

    if (Object.keys(this.identificationValue).length) {
      const { id, email, name } = this.identificationValue
      posthog.identify(id.toString(), { email, name })
    }
  }
}
