let allSalesSales = []
let shop = {
  subsidiary: ["Centro", "Caballito"],

  seller: ["Ada", "Grace", "Hedy", "Sheryl"],

  sales: [
    // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
    { date: new Date(2019, 1, 4), sellerName: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], subsidiary: "Centro" },
    { date: new Date(2019, 0, 10), sellerName: "Ada", components: ["Monitor ASC 543", "Motherboard ASUS 1200"], subsidiary: "Centro" },
    { date: new Date(2019, 5, 1), sellerName: "Ada", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], subsidiary: "Centro" },
    { date: new Date(2019, 0, 2), sellerName: "Ada", components: ["Monitor ASC 543", "Motherboard MZI"], subsidiary: "Centro" },
    { date: new Date(2019, 0, 12), sellerName: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], subsidiary: "Centro" },
    { date: new Date(2019, 2, 22), sellerName: "Hedy", components: ["Monitor GPRS 3000", "HDD Toyiva"], subsidiary: "Centro" },
    { date: new Date(2019, 2, 24), sellerName: "Sheryl", components: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], subsidiary: "Caballito" },
    { date: new Date(2019, 2, 1), sellerName: "Ada", components: ["Motherboard MZI", "RAM Quinston Fury"], subsidiary: "Centro" },
    { date: new Date(2019, 2, 11), sellerName: "Grace", components: ["Monitor ASC 543", "RAM Quinston"], subsidiary: "Caballito" },
    { date: new Date(2019, 2, 15), sellerName: "Ada", components: ["Motherboard ASUS 1200", "RAM Quinston Fury"], subsidiary: "Centro" },
    { date: new Date(2019, 2, 12), sellerName: "Hedy", components: ["Motherboard ASUS 1500", "HDD Toyiva"], subsidiary: "Caballito" },
    { date: new Date(2019, 2, 21), sellerName: "Grace", components: ["Motherboard MZI", "RAM Quinston"], subsidiary: "Centro" },
    { date: new Date(2019, 2, 8), sellerName: "Sheryl", components: ["Monitor ASC 543", "HDD Wezter Dishital"], subsidiary: "Centro" },
    { date: new Date(2019, 2, 16), sellerName: "Sheryl", components: ["Monitor GPRS 3000", "RAM Quinston Fury"], subsidiary: "Centro" },
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

const machinePrice = (a) => {  
  let mPrice = 0
  a.forEach(i => {
    shop.price.forEach(e => {
      if(e.component === i){
        mPrice += e.price
      }
    })
  })
  return mPrice
}

let comp = ["Motherboard ASUS 1200", "HDD Toyiva"]
console.log(`El precio de la máquina es: $${machinePrice(comp)}`)


//sales specific seller and subsidiary sales in one function
const salesSubOrSeller = (sub) => {
  let salesSub = 0
  shop.sales.forEach(e => {
    if(e.sellerName === sub || e.subsidiary === sub){
      salesSub += machinePrice(e.components)
    }
  })
  return salesSub
} 

let salesW = "Ada"
console.log(`${salesW} realizó ventas por un total de $${salesSubOrSeller(salesW)}`);
let subs = "Centro"
console.log(`La sucursal ${subs} obtuvo ganancias por un total de $${salesSubOrSeller(subs)}`)

// Devuelve la cantidad de veces que fue vendido

const amountSalesComponents = (param) => {
  let cont = 0 
  shop.sales.forEach(i => { 
    i.components.forEach(e => { 
      if(e === param){
        cont++
      }
    })
  })
  return cont
}

let item = "Monitor GPRS 3000"
console.log(`El componente "${item}" fue vendido ${amountSalesComponents(item)} veces`);


// Vendedora del mes 

const bestSellerMonth = (year, month) => {
  let countSeller = []
  let sellerName
  shop.seller.forEach(e => {
    shop.sales.filter(i => {
      if(year === i.date.getFullYear() && month === i.date.getMonth() && e === i.sellerName){
        countSeller.push(machinePrice(i.components))
        let countMaxSeller = Math.max.apply(null, countSeller)
        if(machinePrice(i.components) === countMaxSeller){
          sellerName = e
        }
      }
    })
  })
  return sellerName
}

console.log(`La mejor vendedora del mes es: ${bestSellerMonth(2019, 0)}`)

// Ventas de un mes

const salesMonth = (year, month) => {
  let cont = 0
  shop.sales.forEach(e => {
    let monthSale = e.date.getMonth()
    let yearSale = e.date.getFullYear()
    if(monthSale === month || yearSale === year){
      priceSale = machinePrice(e.components)
      cont += priceSale
    }
  })
  return cont
}

console.log(`El total de ventas del mes es de: $${salesMonth(2019, 1)}`);

// Componente más vendido

const bestSellerComponent = () => {
  let countComponent = []
  let nameComponent
  shop.price.forEach(e => {
    countComponent.push(amountSalesComponents(e.component))
    let countMaxComponent = Math.max.apply(null, countComponent)
    if(amountSalesComponents(e.component) === countMaxComponent){
    nameComponent = e.component
    }
  })
  return nameComponent
}

console.log(`El componente más vendido históricamente es: "${bestSellerComponent()}"`);

// Indica si hubo ventas en un mes determinado

const thereWereSales = (year, month) => {
  let sales = false // habria que cambiarle el nombre para que tenga como resultado un booleano
  shop.sales.forEach(e => { e.date.getMonth() === month || e.date.getFullYear() === year ? sales = true : undefined})
  return sales
}

console.log(`¿Hubo ventas en ese mes?: ${thereWereSales(2019, 1)}`);

// Sucursal del mes

const bestSubsidiaryMonth = (year, month) => {
  let countSubsidiary = []
  let subsidiaryName
  shop.subsidiary.forEach(e => {
    shop.sales.filter(i => {
      if(year === i.date.getFullYear() && month === i.date.getMonth() && e === i.subsidiary){
        countSubsidiary.push(machinePrice(i.components))
        let countMaxSubsidiary = Math.max.apply(null, countSubsidiary)
        if(machinePrice(i.components) === countMaxSubsidiary){
          subsidiaryName = e
        }
      }
    })
  })
  return subsidiaryName
}

console.log(`La sucursal que más ganancias generó en el mes es: ${bestSubsidiaryMonth(2019, 0)}`)

// Importe total vendido por cada mes/año

let monthName = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const renderMonth = () => {
  let arr = []
  let monthSale = shop.sales.map(s => s.date.getMonth())
  let yearSale = shop.sales.map(s => s.date.getFullYear())
  const month = monthSale.filter((e, i) => monthSale.indexOf(e) === i).sort()
  const year = yearSale.filter((e, i) => yearSale.indexOf(e) === i)
  let saleMonth
  year.forEach(e => {
    month.forEach(i => {
      //saleMonth = salesMonth(e, i)
      let x = {month: monthName[i], year: e, sales: salesMonth(e, i)}
      arr.push(x)
      console.log(`El importe total vendido en ${monthName[i]} del ${e} es: $${salesMonth(e, i)}`)
    })
  })
  return arr
}

//renderMonth()

const printReports = () => {
  let printMonthReport = document.getElementById("month-report")
    let toPrintM = renderMonth()
  toPrintM.forEach(e => {
    let reportM
    reportM = document.createElement("p")
    reportM.classList.add("report-info")
    reportM.innerHTML = (`Total de ${e.month} ${e.year}: $${e.sales}`)
    printMonthReport.appendChild(reportM)
    
    let printMixReport = document.getElementById("mix-report")
    let mixMReport = document.createElement("p")
    mixMReport.innerText = (`Total de ${e.month} ${e.year}: $${e.sales}`)
    printMixReport.appendChild(mixMReport)
  })
  
  let printSubReport = document.getElementById("sub-report")
  let toPrintS = renderSubsidiary()
  toPrintS.forEach(e => {
    let reportSub = document.createElement("p")
    reportSub.classList.add("report-info")
    reportSub.innerText = (`Total de ${e.sub}: $${e.salesSub}`)
    printSubReport.appendChild(reportSub)

    let printMixReport = document.getElementById("mix-report")
    let mixSReport = document.createElement("p")
    mixSReport.classList.add("report-info")
    mixSReport.innerText = (`Total de ${e.sub}: $${e.salesSub}`)
    printMixReport.appendChild(mixSReport)
  })

  let printMixReport = document.getElementById("mix-report")
  let reportBestProduct = document.createElement("p")
  reportBestProduct.classList.add("report-info")
  reportBestProduct.innerText = (`Producto estrella: ${bestSellerComponent()}`)
  printMixReport.appendChild(reportBestProduct)

  let reportBestSeller = document.createElement("p")
  reportBestSeller.classList.add("report-info")
  reportBestSeller.innerText = (`Vendedora que más ingresos generó: `+ bestSellerEver())
  printMixReport.appendChild(reportBestSeller)
}


//printReports()

// Importe total vendido por cada sucursal

const renderSubsidiary = () => {
  let saleSubsidiary = []
  shop.subsidiary.forEach(e => {
    let s = {sub: e, salesSub: salesSubOrSeller(e)}
    saleSubsidiary.push(s)
    //saleSubsidiary = salesSubOrSeller(e)
    console.log(`El importe total vendido en la sucursal de ${e} es: $${salesSubOrSeller(e)}`)
  })
  return saleSubsidiary
}

// renderSubsidiary()

const bestSellerEver = () => {
  let maxSales = 0
  let maxSeller = ""
  shop.seller.map(i => {
    let counterS = 0
    shop.sales.map(e => {
      if(i === e.sellerName){
        counterS += machinePrice(e.components)
      }
    })
    if(counterS > maxSales){
      maxSeller = i
      maxSales = counterS
    }
  })
  return maxSeller
}

bestSellerEver()

// Tiene que mostrar la unión de los dos reportes anteriores
const render = () => {
  //let month = new Date().getMonth()
  //let renderMix = []
  //let renderP = {monthR: renderMonth(), subs: renderSubsidiary(), starP : bestSellerComponent(), bestS: bestSellerMonth(2019, month) }
  
  console.log(`Reporte:
  Ventas del mes: ${renderMonth()}
  Ventas por sucursal: ${renderSubsidiary()}
  Producto estrella: ${bestSellerComponent()}
  Vendedora que más ingresos generó: ${bestSellerEver()}`)  
}

render()



// Otras funciones


const onLoadFunctions = () => {
  let openModal = document.getElementById('modal')
  printSellerMonth()
  // createSelSubSelects()
  printSales()
  createSelect(onlyCategories, openModal)
  fillSelects(arrayOptionsS)
} 

const printSellerMonth = () => {
  let nameBS = document.getElementById('best-seller')
  nameBS.innerText = bestSellerEver()
  nameBS.classList.add('seller-main-text')
  let salesSeller = document.getElementById('sales-seller')
  salesSeller.innerText = salesSubOrSeller(bestSellerEver())
  let subsidiary = document.getElementById('seller-subsidiary')
  subsidiary.innerText = bestSubsidiaryMonth(2019, 0) 
}

//Modal

const modal = () => {
let newSaleBtn = document.getElementById('newSaleBtn')
newSaleBtn.onclick = () => {
    activeModal.classList.remove('modal')
    activeModal.classList.add('activeModal')
  } 
}

const closeModal = () => {
  let closeModal = document.getElementById('closeModal')
  closeModal.onclick = () => {
      closeModal.classList.toggle('modal')
    } 
  }

let arrayOptionsS = []

shop.seller.forEach(e => arrayOptionsS.push({name: e, category: "vendedora"}))
shop.subsidiary.forEach(e => arrayOptionsS.push({name: e, category: "sucursal"}))
shop.price.forEach(e => arrayOptionsS.push({name: e.component, category: "componente"}))

arrayOptionsS.forEach((e, i) => {
  e.id = i
})

// console.log(arrayOptionsS)
let allCategories = arrayOptionsS.map(e => e.category)
// console.log(allCategories)

let onlyCategories = allCategories.filter((e, i) => allCategories.indexOf(e) === i)
// console.log(onlyCategories)

const createSelect = (list, container) => {
    list.forEach(e => {
        let select = document.createElement('select')
        select.id = e
        container.appendChild(select)
    })
}

const fillSelects = list => {
  list.forEach(e => {
      let select = document.getElementById(e.category)
      if(select.childElementCount === 0){
          let placeholder = {name:`Seleccione ${e.category}`, id:''}
          select.appendChild(createOption(placeholder))
      }
      select.appendChild(createOption(e))
  })
}

const createOption = elem => {
  let option = document.createElement('option')
  option.innerText = elem.name
  option.value = elem.id
  return option
}

//Solo agrega una sola vez
const addComponent = () => {
  let container = document.getElementById('modal')
  let component = document.getElementById('componente')

  container.innerHTML = ''
  createSelect(onlyCategories, container)
  fillSelects(arrayOptionsS)
  container.appendChild(component)
}


//Crea select para vendedoras y sucursales
// const createSelSubSelects = () => {
//   let showModal = document.getElementById('modal')
//   let select = document.createElement('select')
//   createOptions(shop.seller).forEach(o => {
//     let option = o.value
//     // arrayOptions.push(option)
//     select.appendChild(o)
//   })
//   showModal.appendChild(select)
//   let selectPrice = document.createElement('select')
//   createPriceOptions(shop.price).forEach(o => {
//     let option = o.value
//     // arrayOptions.push(option)
//     selectPrice.appendChild(o)
//   })
//   showModal.appendChild(selectPrice)
//   let selectSubsidiary = document.createElement('select')
//   createOptions(shop.subsidiary).forEach(o => {
//     let option = o.value
//     // arrayOptions.push(option)
//     selectSubsidiary.appendChild(o)
//   })
//   // console.log(select)
//   showModal.appendChild(selectSubsidiary)
// }

// const createSelect = (list) => {
//   let showModal = document.getElementById('modal')
//   let select = document.createElement('select')
//   list.forEach(e =>)
//   createOptions(shop.seller).forEach(o => {
//     let option = o.value
//     // arrayOptions.push(option)
//     select.appendChild(o)
//   })
//   showModal.appendChild(select)
// // }
// const createSelects = (list, container) => {
//   list.forEach(e => {
//       let select = document.createElement('select')
//       select.id = e
//       container.appendChild(select)
//   })
// }

// const fillSelects = (list, id) => {
//   list.forEach(e => {
//       let select = document.getElementById(id)
//       if(select.childElementCount === 0){
//           let placeholder = {name:`seleccione vendedora`, id:''}
//           select.appendChild(createOption(placeholder))
//       }
//       select.appendChild(createOption(e))
//   })
// }

//Crea option para vendedoras y sucursales

// const createOptions = (array) => {
//       return array.map((e,i) => {
//       let option = document.createElement('option')
//       option.innerText = e
//       option.value = e
//       option.id = i
//       return option 
//     })
// } 

// const createOption = () => {
//   arrayOptionsS.forEach((e,i) => {
//     let option = document.createElement('option')
//     option.innerText = e
//     option.value = e
//     option.id = i
//     return option 
//   })
// }

// const createPriceOptions = array => {
//     return array.map((e,i) => {
//       let option = document.createElement('option')
//       option.innerText = e.component
//       option.value = e.component
//       option.id=i
//       // console.log(option)
//       return option
//     })
// } 

// //Imprimir opciones elegidas

console.log(arrayOptionsS)
const addNewSale = () => {
  let newSale = []
  onlyCategories.forEach(e => {
    let select = document.getElementById(e)
    let selectedCategory = arrayOptionsS.find(cat => cat.id === select.value)
    select.value = ''
    newSale.push(selectedCategory)
  })
  allSalesSales.push(newSale)
  printSales()
}
console.log(allSalesSales)


const printSales = () => {
  let allSales = document.getElementById('allSales')
  // allSales.innerHTML = ''

  allSalesSales.forEach(e => {
    let saleItem = document.createElement('ul')
    saleItem.classList.add('categories', 'sells')
    e.forEach(i => {
      let item = document.createElement('li')
      item.innerText = i.name
      saleItem.appendChild(plateLi)
    })
    allSales.appendChild(saleItem)
  })
}

// //Crea UL
// const createUl = (list) => {
//   let ul = document.createElement('ul')
//   ul.classList.add('categories sells')
//   list.forEach(e => {
//     let li = document.createElement('li')
//     li.innerText = e
//     ul.appendChild(li)
//   })
// }


