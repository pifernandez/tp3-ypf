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
  return mPrice
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
  return cont
}
amountSalesComponents("Monitor GPRS 3000")


// Vendedora del mes // Esto esta mal, no me sale

const bestSellerMonth = (year, month) => {
  cont = 0
  local.sales.forEach(e => {
    let monthSale = e.date.getMonth()
    let yearSale = e.date.getYear()
    if(monthSale === month || yearSale === year){
      priceSale = machinePrice(e.components)
      cont += priceSale
      let nameSeller = e.nameSeller
    }
  })
}

bestSellerMonth(2019, 1) // no me salio

// Ventas de un mes

const salesMonth = (year, month) => {
  let cont = 0
  local.sales.forEach(e => {
    let monthSale = e.date.getMonth()
    let yearSale = e.date.getYear()
    if(monthSale === month || yearSale === year){
      priceSale = machinePrice(e.components)
      cont += priceSale
    }
  })
  // console.log(cont)
  return cont
}

salesMonth(2019, 1) 

// Ventas totales realizadas por vendedora

const salesSpecificSeller = (name) => {
  let cont = 0
  local.sales.forEach(e => {
    if(e.nameSeller === name){
      sales = machinePrice(e.components)
      cont += sales
    }
  })
  // console.log(cont)
  return cont
}

salesSpecificSeller("Ada")

// Componente más vendido

const bestSellerComponent = () => {
  let countComponent = []
  let nameComponent
  local.price.forEach(e => {
    countComponent.push(amountSalesComponents(e.component))
    countMaxComponent = Math.max.apply(null, countComponent)
    if(amountSalesComponents(e.component) === countMaxComponent){
    nameComponent = e.component
    }
  })
  // console.log(nameComponent)
  return nameComponent
}

bestSellerComponent()

// Indica si hubo ventas en un mes determinado

const thereWereSales = (year, month) => {
  let sales = false // habria que cambiarle el nombre para que tenga como resultado un booleano
  local.sales.find(e => {
  let monthSale = e.date.getMonth()
  let yearSale = e.date.getYear()
  monthSale === month || yearSale === year ? sales = true : undefined
  })  
  // console.log(sales)
  return sales
}

thereWereSales(2019, 1)


// Punto 3 - funciones render

const renderMonth = () => {
  
}