import * as DigitalClock from "./DigitalClock.js";
/************************************************/
((name) => {
  class App extends HTMLElement
  {
    constructor()
    {
      console.log("App: constructor");
      /************************************************/
      super();
    }
    /************************************************/
    static get observedAttributes()
    {
      let retValue = [];
      /************************************************/
      retValue.push("background");
      /************************************************/
      return retValue;
    }
    /************************************************/
    connectedCallback()
    {
      console.log("App: connectedCallback");
      /************************************************/
      const shadow = this.attachShadow({mode: 'open'});
      {
        shadow.innerHTML = this.#render();
      }
    }
    /************************************************/
    disconnectedCallback()
    {
      console.log("App: disconnectedCallback");
    }
    /************************************************/
    adoptedCallback()
    {
      console.log("App: adoptedCallback");
    }
    /************************************************/
    attributeChangedCallback(name, oldValue, newValue)
    {
      console.log("App: attributeChangedCallback");
      /************************************************/
      console.log({name: name, oldValue: oldValue, newValue: newValue});
    }
    /************************************************/
    #render()
    {
      let retValue = `
      <zeyo-digitalclock></zeyo-digitalclock>
      `;
      /************************************************/
      return retValue;
    }
  }
  /************************************************/
  globalThis.customElements.define(name, App);
})("my-app");