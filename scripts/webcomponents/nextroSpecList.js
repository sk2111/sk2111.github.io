class NextroSpecList extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      /*html*/
      this.shadowRoot.innerHTML = `
        <style>
        /* Resuable style*/
        .flex-row{
            display:flex;
        }
        .flex-col{
            display:flex;
            flex-direction:column;
        }
        .justify-sb{
            justify-content:space-between;
        }
        .align-cen{
            align-items:center;
        }
        .perfect-cen{
            justify-content:center;
            align-items:center;
        }
        /* Component specific style*/
        .container{
            height:100%;
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
        }
        .spec-list-con{
            width:350px;
            height:250px;
        }
        .description{
            color:#424242;
            font-size:0.89rem;
            line-height:30px;
            margin-top:10px;
            text-align:justify;
        }
        #card-title{
            color:#424242;
            font-size:1.313rem;
            font-weight:bold;
            margin-top:5px;
        }
        .accounts-icon{
            height:45px;
            width:32px;
        }
        .right-sec{
            margin-left:10px;
        }
        /*Media queries*/
        @media only screen and (max-width: 700px) {
         .description{ 
            font-size:1rem;
         }
        }
        @media only screen and (max-width: 450px) {
            #card-title{
                font-size:1.05rem;
            }
        }
        @media only screen and (max-width: 400px) {
            #card-title{
                font-size:1.05rem;
            }
            .container{
                justify-content: flex-start;
                align-items: normal;
            }
            .accounts-icon{
                height:30px;
                width:30px;
            }
        }
        </style>
        <div class="container">
            <div class="spec-list-con flex-row">
            <img  class="accounts-icon" src="/assets/logo/nextro_logo_skyblue.svg">
            <div class="right-sec">
            <div class="flex-row align-cen">
                        <div id="card-title"></div>
                    </div>
                    <div id="card-description" class="description"></div>
                </div>
            </div>
        </div>
        `;
        this.cardTitle = this.shadowRoot.querySelector("#card-title");
        this.cardDescription = this.shadowRoot.querySelector("#card-description");
    }
    connectedCallback() {  }

    static get observedAttributes() {
        return ['card-title','card-description'];
    }
    handleCardTitle(val){
        this.cardTitle.innerText = val;
    }

    handleCardDescription(val){
        this.cardDescription.innerText = val;
    }

    attributeChangedCallback(attrName,oldVal,newVal) {
        if(attrName === 'card-title')
        {
            this.handleCardTitle(newVal);
        }
        if(attrName === 'card-description')
        {
            this.handleCardDescription(newVal);
        }
    }
    disconnectedCallback() {  }
  }
customElements.define('nextro-spec-list',NextroSpecList);