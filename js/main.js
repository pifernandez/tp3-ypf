var local = {
  seller: ["Ada", "Grace", "Hedy", "Sheryl"],

  sales: [
    // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
    { date: new Date(2019, 1, 4), nameSeller: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { date: new Date(2019, 0, 1), nameSeller: "Ada", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { date: new Date(2019, 0, 2), nameSeller: "Grace", components: ["Monitor ASC 543", "Motherboard MZI"] },
    { date: new Date(2019, 0, 10), nameSeller: "Ada", components: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
    { date: new Date(2019, 0, 12), nameSeller: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
  ],

  price: [
    { component: "Monitor GPRS 3000", price: 200 },
    { component: "Motherboard ASUS 1500", price: 120 },
    { component: "Monitor ASC 543", price: 250 },
    { component: "Motherboard ASUS 1200", price: 100 },
    { component: "Motherboard MZI", price: 30 },
    { component: "HDD Toyiva", price: 90 },
    { component: "HDD Wezter Dishital", price: 75 },
    { component: "RAM Quinston", price: 110 },
    { component: "RAM Quinston Fury", price: 230 }
  ]
};

// Devuelve el precio de la máquina que se puede armar con esos componentes

const machinePrice = (param) => {
  let mPrice = 0
  param.forEach(i => {
    local.price.forEach(e => {
      if(e.component === i){
        mPrice += e.price
      }
    })
  })
  // console.log(mPrice)
}
machinePrice(["Monitor ASC 543", "Motherboard ASUS 1200"])

// Devuelve la cantidad de veces que fue vendido

const amountSalesComponents = (param) => {
  let cont = 0 
  local.sales.forEach(i => { 
    i.components.forEach(e => { 
      if(e === param){
        cont++
      }
    })
  })
  // console.log(cont)
}
amountSalesComponents("Monitor GPRS 3000")


// Vendedora del mes

const bestSellerMonth = (month, year) => {

}

//función que abre el modal cuando se hace click en "Nueva"

const openModal = (newSale) => {
  let newSale = document.getElementById('newSale')
    newSale.onclick = (activeModal) => {
    let activeModal = document.getElementByid('modal')
        modal.classlist.add('active-modal')   
    }
  }

openModal()

//función que crea los selectores en el modal

//función que busca los elementos en el array 

//función que muestra información cuando se hace botón en "Agregar nueva venta"

//función de alerta de "Se ha agregado con éxito"

//función que imprime el resultado en "home.html"
