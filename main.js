    document.addEventListener("DOMContentLoaded", getData);


    async function getData() {
    let res = await fetch(
      " http://api.navasan.tech/latest/?api_key=freecGGybPSPCcSyojZMk7szuYKGK4vi"
    );
    // console.log(res);
    if (res.ok) {
      let data = await res.json();
      console.log(data);

    //   =========================================
      const date = data.usd.date;
      document.getElementById("date").textContent = date;
    //   =========================================
      const dollarPrice = data.usd.value;
      const dollarchange = data.usd.change;
    //   =========================================
      const euroPrice = data.eur.value;
      const euroChange = data.eur.change;
    //   =========================================
      const poundPrice = data.gbp.value;
      const poundChange = data.gbp.change;
    //   =========================================
      const canadaPrice = data.cad.value;
      const canadaChange = data.cad.change;
    //   =========================================
      const uaePrice = data.aed.value;
      const uaeChange = data.aed.change;
    //   =========================================
      const turkeyPrice = data.try.value;
      const turkeyChange = data.try.change;
    //   =========================================
      const emamiPrice = data.sekkeh.value;
      const emamiChange = data.sekkeh.change;
    //   =========================================
      const baharPrice = data.bahar.value;
      const baharChange = data.bahar.change;
    //   =========================================
      const nimPrice = data.nim.value;
      const nimChange = data.nim.change;
    //   =========================================
      const robPrice = data.rob.value;
      const robChange = data.rob.change;
    //   =========================================
      const geramiPrice = data.gerami.value;
      const geramiChange = data.gerami.change;
    //   =========================================
      const abshodehPrice = data.abshodeh.value;
      const abshodehChange = data.abshodeh.change;
    //   =========================================


      const currencies = [
        {
          id:1 ,
          name: 'US Dollar',
          image: './images/usa.png',
          price: dollarPrice,
          change: dollarchange
        }
        ,
        {
          id: 2,
          name:'euroPrice' ,
          image:'./images/euro.svg',
          price: euroPrice,
          change:euroChange 
        }
        ,
        {
          id: 3,
          name: 'British Pound',
          image:'./images/gb.webp' ,
          price: poundPrice ,
          change: poundChange
        }
        ,
        {
          id: 4,
          name: 'Canadian Dollar',
          image: './images/canada.jpg',
          price: canadaPrice ,
          change: canadaChange
        }
        ,
        {
          id: 5,
          name: 'UAE Dirham',
          image:'./images/uae.jpg' ,
          price: uaePrice,
          change: uaeChange
        }
        ,
        {
          id:6 ,
          name: 'Turkish Lira',
          image:'./images/turkey.avif' ,
          price: turkeyPrice,
          change: turkeyChange
        }
      ]

      currencies.forEach((item) =>{
       const divCurrencies = document.getElementById('divCurrencies')
       if(item.change < 0){
        divCurrencies.innerHTML +=`<div class="col-6 col-md-4">
                                    <div class="card mt-3 h-100">
                                      <div class="card-body">
                                          <div class="d-flex gap-2">
                                              <img src="${item.image}" alt="flag" /><strong>${item.name}</strong>
                                          </div>
                                          <h5 class="mt-3 gold">price: <span>${item.price}</span></h5>
                                          <i class="bi bi-arrow-down-up"></i> : <span class="red">${item.change}</span>
                                      </div>
                                    </div>
                                  </div>`

       } else{
            divCurrencies.innerHTML +=`<div class="col-6 col-md-4">
            <div class="card mt-3 h-100">
              <div class="card-body">
                  <div class="d-flex gap-2">
                      <img src="${item.image}" alt="flag" /><strong>${item.name}</strong>
                  </div>
                  <h5 class="mt-3 gold">price: <span>${item.price}</span></h5>
                  <i class="bi bi-arrow-down-up"></i> : <span class="green">${item.change}</span>
              </div>
            </div>
          </div>`
             }
      
            })


      const coins = [
              {
                id:1 ,
                name: 'امامی',
                image: './images/coin.png',
                price: emamiPrice,
                change: emamiChange
              }
              ,
              {
                id: 2,
                name:'تمام بهار آزادی' ,
                image: './images/coin.png',
                price: baharPrice,
                change:baharChange 
              }
              ,
              {
                id: 3,
                name: 'نیم سکه',
                image: './images/coin.png',
                price: nimPrice ,
                change: nimChange
              }
              ,
              {
                id: 4,
                name: 'ربع سکه',
                image: './images/coin.png',
                price: robPrice ,
                change: robChange
              }
              ,
              {
                id: 5,
                name: 'سکه گرمی',
                image: './images/coin.png',
                price: geramiPrice,
                change: geramiChange
              }
              ,
              {
                id:6 ,
                name: 'طلا آب شده',
                image: './images/coin.png',
                price: abshodehPrice,
                change: abshodehChange
              }
            ]

      coins.forEach((item) =>{
              const divCoin = document.getElementById('divCoin')
              if(item.change < 0){
                divCoin.innerHTML +=` <div class="col-6 col-md-4">
                                           <div class="card mt-3 h-100">
                                             <div class="card-body">
                                                 <div class="d-flex gap-2">
                                                     <img src="${item.image}" alt="flag" /><strong>${item.name}</strong>
                                                 </div>
                                                 <h5 class="mt-3 gold">price: <span>${item.price}</span></h5>
                                                 <i class="bi bi-arrow-down-up"></i> : <span class="red">${item.change}</span>
                                             </div>
                                           </div>
                                      </div>`
       
              } 
              else{
                divCoin.innerHTML +=` <div class="col-6 col-md-4">
                                        <div class="card mt-3 h-100">
                                          <div class="card-body">
                                              <div class="d-flex gap-2">
                                                  <img src="${item.image}" alt="flag" /><strong>${item.name}</strong>
                                              </div>
                                              <h5 class="mt-3 gold">price: <span>${item.price}</span></h5>
                                              <i class="bi bi-arrow-down-up"></i> : <span class="green">${item.change}</span>
                                          </div>
                                        </div>
                                      </div>`
                                          }
             
                   })


      } 
      else {throw Error(res.status);}
      
  
      //   ========================== for dark mode =========================
        if(selectedTheme === "dark" || selectedIcon === "bi-toggle-on") {
          const cards = document.querySelectorAll('.card')
          cards.forEach((card) =>{card.classList.toggle('dark-card')})
        }
    
    }

    
    
    const darkModeButton = document.getElementById("toggle-btn")
    //   ===================== for add to localStorage ====================
    function getCurrentTheme() {
      if(document.body.classList.contains('dark-theme')) { return "dark" } 
      else{return "light"} 
    }
    function getCurrentIcon() {
      if(darkModeButton.classList.contains('bi-toggle-on')) {return "bi-toggle-on"} else{return "bi-toggle-off"}
    }
    darkModeButton.addEventListener('click',() =>{
      
      document.body.classList.toggle('dark-theme')
      darkModeButton.classList.toggle('bi-toggle-on')
      
      const cards = document.querySelectorAll('.card')
      cards.forEach((card) =>{card.classList.toggle('dark-card')})
      
      localStorage.setItem("currentTheme" , getCurrentTheme())
      localStorage.setItem("currentIcon" , getCurrentIcon())
    })
    //   ===================== if user previously selected theme ====================
    const selectedTheme = localStorage.getItem("currentTheme");
    const selectedIcon = localStorage.getItem("currentIcon");
    
    if(selectedTheme === "dark") {document.body.classList.add('dark-theme') }
      else{document.body.classList.remove('dark-theme')}
    if(selectedIcon === "bi-toggle-on") {darkModeButton.classList.add('bi-toggle-on')}
      else{darkModeButton.classList.remove('bi-toggle-on')}
    

    


    


