((name) => {
  class DigitalClock extends HTMLElement
  {
    constructor()
    {
      console.log("DigitalClock: constructor");
      /************************************************/
      super();
      /************************************************/
      const shadow = this.attachShadow({mode: 'open'});
      {
        shadow.innerHTML = this.render();
      }
    }
    /************************************************/
    static get observedAttributes()
    {
      let retValue = [];
      /************************************************/
      retValue.push("color");
      retValue.push("size");
      /************************************************/
      return retValue;
    }
    /************************************************/
    connectedCallback()
    {
      console.log("DigitalClock: connectedCallback");
    }
    /************************************************/
    disconnectedCallback()
    {
      console.log("DigitalClock: disconnectedCallback");
    }
    /************************************************/
    adoptedCallback()
    {
      console.log("DigitalClock: adoptedCallback");
    }
    /************************************************/
    attributeChangedCallback(name, oldValue, newValue)
    {
      console.log("DigitalClock: attributeChangedCallback");
      /************************************************/
      console.log({name: name, oldValue: oldValue, newValue: newValue});
    }
    /************************************************/
    render()
    {
      let retValue = `
      <p>
        Hello, ${this.getAttribute('background')}
      </p>
      `;
      /************************************************/
      return retValue;
    }
    /************************************************/
    updateUI()
    {
      setTimeout
    }
  }
  /************************************************/
  globalThis.customElements.define(name, DigitalClock);
})("zeyo-digitalclock");