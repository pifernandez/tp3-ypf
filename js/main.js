var local = {
  seller: ["Ada", "Grace", "Hedy", "Sheryl"],

  sales: [
    // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
    { date: new Date(2019, 1, 4), sellerName: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], subsidiary: "Centro" },
    { date: new Date(2019, 0, 1), sellerName: "Ada", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], subsidiary: "Centro" },
    { date: new Date(2019, 0, 2), sellerName: "Grace", components: ["Monitor ASC 543", "Motherboard MZI"], subsidiary: "Centro" },
    { date: new Date(2019, 0, 10), sellerName: "Ada", components: ["Monitor ASC 543", "Motherboard ASUS 1200"], subsidiary: "Centro" },
    { date: new Date(2019, 0, 12), sellerName: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], subsidiary: "Centro" },
    { date: new Date(2019, 2, 22), sellerName: "Hedy", components: ["Monitor GPRS 3000", "HDD Toyiva"], subsidiary: "Centro" },
    { date: new Date(2019, 2, 24), sellerName: "Sheryl", components: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], subsidiary: "Caballito" },
    { date: new Date(2019, 2, 1), sellerName: "Ada", components: ["Motherboard MZI", "RAM Quinston Fury"], subsidiary: "Centro" },
    { date: new Date(2019, 2, 11), sellerName: "Grace", components: ["Monitor ASC 543", "RAM Quinston"], subsidiary: "Caballito" },
    { date: new Date(2019, 2, 15), sellerName: "Ada", components: ["Motherboard ASUS 1200", "RAM Quinston Fury"], subsidiary: "Centro" },
    { date: new Date(2019, 2, 12), sellerName: "Hedy", components: ["Motherboard ASUS 1500", "HDD Toyiva"], subsidiary: "Caballito" },
    { date: new Date(2019, 2, 21), sellerName: "Grace", components: ["Motherboard MZI", "RAM Quinston"], subsidiary: "Centro" },
    { date: new Date(2019, 2, 8), sellerName: "Sheryl", components: ["Monitor ASC 543", "HDD Wezter Dishital"], subsidiary: "Centro" },
    { date: new Date(2029, 2, 16), sellerName: "Sheryl", components: ["Monitor GPRS 3000", "RAM Quinston Fury"], subsidiary: "Centro" },
    { date: new Date(2019, 2, 27), sellerName: "Hedy", components: ["Motherboard ASUS 1200", "HDD Toyiva"], subsidiary: "Caballito" },
    { date: new Date(2019, 2, 22), sellerName: "Grace", components: ["Monitor ASC 543", "HDD Wezter Dishital"], subsidiary: "Centro" },
    { date: new Date(2019, 2, 5), sellerName: "Ada", components: ["Motherboard ASUS 1500", "RAM Quinston"], subsidiary: "Centro" },
    { date: new Date(2019, 2, 1), sellerName: "Grace", components: ["Motherboard MZI", "HDD Wezter Dishital"], subsidiary: "Centro" },
    { date: new Date(2019, 2, 7), sellerName: "Sheryl", components: ["Monitor GPRS 3000", "RAM Quinston"], subsidiary: "Caballito" },
    { date: new Date(2019, 2, 14), sellerName: "Ada", components: ["Motherboard ASUS 1200", "HDD Toyiva"], subsidiary: "Centro" }

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
  //console.log(`El precio de la máquina es: ${mPrice}`)
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
  //console.log(`El componente fue vendido ${cont} veces`)
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
      let nameSeller = e.sellerName
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
  //console.log(`El total de ventas del mes es: $${cont}`)
  return cont
}

salesMonth(2019, 1) 

// Ventas totales realizadas por vendedora

const salesSpecificSeller = (name) => {
  let cont = 0
  local.sales.forEach(e => {
    if(e.sellerName === name){
      sales = machinePrice(e.components)
      cont += sales
    }
  })
  //console.log(`El total de ventas de esa vendedora es: $${cont}`)
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
  //console.log(`El componente más vendido es: ${nameComponent}`)
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
  //console.log(`¿Hubo ventas?: ${sales}`)
  return sales
}

thereWereSales(2019, 1)

//salesSubsidiary(sucursal), obtiene las ventas totales realizadas por una sucursal sin límite de fecha.

//monthSubsidiary . Se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes.