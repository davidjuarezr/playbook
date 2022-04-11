 
// exports a function
export function sayHello (message) {
    console.sayHello(message)
  }

  // exports a function
export function sayMessage (message) {
    console.sayMessage(message)
  }
  
  export class Pokemon {
    constructor (name) {
      this.name = name
    }
  
    log (message) {
      console.log(`[${this.name}] ${message}`)
    }
  }