class TerminalInput extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .terminal-input {
          display: flex;
          align-items: center;
          padding: 8px;
          background-color: #0d1117;
          border-top: 1px solid #F66A0A;
        }
        .prompt {
          color: #F66A0A;
          margin-right: 8px;
        }
        input {
          flex: 1;
          background: transparent;
          border: none;
          color: #39FF14;
          font-family: monospace;
          outline: none;
        }
      </style>
      <div class="terminal-input">
        <span class="prompt">></span>
        <input type="text" placeholder="Enter command...">
      </div>
    `;
  }
}

customElements.define('terminal-input', TerminalInput);