import Shepherd from "shepherd.js";
import { post } from '@rails/request.js'
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values={
    tourName: String,
    endpoint: String,
    config: Object,
    context: Object
  };

  initialize() {
    this.tour = new Shepherd.Tour(this.configValue.tour);
  }

  connect() {
    const steps = this.processTourConfigAction(this.configValue.steps)

    if (steps) {
      this.addTourListeners()

      this.tour.addSteps(steps);
      this.tour.start();
    }
  }

  addTourListeners() {
    [
      'hide',
      'cancel',
      'complete',
      'start'
    ].map(eventName => {
      this.tour.on(eventName, (event) => this.processTourEvent({ event, tourName: this.tourNameValue, eventName }))
    })
  }

  async processTourEvent({ event, tourName, eventName }) {
    const body = JSON.stringify({ tour: tourName, event: eventName, context: this.contextValue })
    const response = await post(this.endpointValue, { body })
    if (!response.ok) {
      console.warn('Failed', response)
    }
  }

  processTourConfigAction(steps) {
    if (!steps.length) { return false }

    return steps.map((step => {
      let {buttons: buttons, ...rest} = step;
      if (buttons) {
        buttons = buttons.map((button => {
          switch (button.action) {
            case "next":
            button.action = this.tour.next;
            break;

            case "back":
            button.action = this.tour.back;
            break;

            default:
            button.action = this.tour.complete;
          }
          return button;
        }));
      }
      return {
        buttons: buttons,
        ...rest
      };
    }));
  }
}
