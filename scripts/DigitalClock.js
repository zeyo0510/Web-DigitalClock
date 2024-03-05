((name) => {
  class DigitalClock extends HTMLElement
  {
    #shadow  = undefined;
    #display = undefined;

    constructor()
    {
      console.log("DigitalClock: constructor");
      /************************************************/
      super();
      /************************************************/
      this.#shadow = this.attachShadow({mode: 'closed'});
      {
        this.#shadow.innerHTML = this.#render();
      }
      /************************************************/
      this.#display = this.#shadow.getElementById("display");
      {
        
      }
      /************************************************/
      setInterval(() => {
        this.updateUI();
      }, 1000);
    }
    /************************************************/
    static get observedAttributes()
    {
      let retValue = [];
      /************************************************/
      retValue.push("background");
      retValue.push("foreground");
      retValue.push("value");
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
      /************************************************/
      (name == "value") && (this.#value = newValue);
    }
    /************************************************/
    #render()
    {
      let retValue = `
      <style>
      .clock {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        color: #17D4FE;
        font-size: 64px;
        font-family: "Fira Code";
        letter-spacing: 10px;
      }
      </style>
      <div id="display" class="clock"></div>
      `;
      /************************************************/
      return retValue;
    }
    /************************************************/
    get value()
    {
      return this.getAttribute("value");
    }
    /************************************************/
    set #value(value)
    {
      this.#display.innerText = value;
    }
    /************************************************/
    updateUI()
    {
      this.setAttribute("value", this.#now());
    }
    /************************************************/
    #now()
    {
      let retValue = "";
      //////////////////////////////////////////////////
      let date = new Date();
      //////////////////////////////////////////////////
      let hh = date.getHours()  ; // 0 - 23
      let mm = date.getMinutes(); // 0 - 59
      let ss = date.getSeconds(); // 0 - 59
      //////////////////////////////////////////////////
      hh = hh.toString().padStart(2, "0");
      mm = mm.toString().padStart(2, "0");
      ss = ss.toString().padStart(2, "0");
      //////////////////////////////////////////////////
      retValue = `${hh}:${mm}:${ss}`;
      //////////////////////////////////////////////////
      return retValue;
    }
  }
  /************************************************/
  globalThis.customElements.define(name, DigitalClock);
})("zeyo-digitalclock");