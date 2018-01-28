import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    console.log("Stimulus is working!")
  }

  greet() {
    const element = this.targets.find("name")
    const name = element.value
    this.targets.find('say_hello').innerHTML = `Hello ${name}`
  }
}
