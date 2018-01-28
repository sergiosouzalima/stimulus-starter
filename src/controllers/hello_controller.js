import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    console.log("Stimulus is working!")
  }

  greet() {
    this.outputElement.innerHTML = `Hello ${this.name}`
  }

  get name() {
    return this.inputElement.value
  }

  get inputElement() {
    return this.targets.find("name")
  }

  get outputElement() {
    return this.targets.find("say_hello")
  }

}
