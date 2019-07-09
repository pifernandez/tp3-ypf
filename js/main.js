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

//Ventas por vendedora o sucursal
const salesSubOrSeller = (sub) => {
  let salesSub = 0
  shop.sales.forEach(e => {
    if(e.sellerName === sub || e.subsidiary === sub){
      salesSub += machinePrice(e.components)
    }
  })
  return salesSub
} 

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

// Ventas de un mes

const salesMonth = (year, month) => {
  let cont = 0
  shop.sales.forEach(e => {
    if(e.date.getMonth() === month && e.date.getFullYear() === year){
      priceSale = machinePrice(e.components)
      cont += priceSale
    }
  })
  return cont
}

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

// Indica si hubo ventas en un mes determinado

const thereWereSales = (year, month) => {
  let sales = false // habria que cambiarle el nombre para que tenga como resultado un booleano
  shop.sales.forEach(e => { e.date.getMonth() === month || e.date.getFullYear() === year ? sales = true : undefined})
  return sales
}

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

// Importe total vendido por cada mes/año

let monthName = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const renderMonth = () => {
  let arr = []
  let monthSale = shop.sales.map(s => s.date.getMonth())
  let yearSale = shop.sales.map(s => s.date.getFullYear())
  const month = monthSale.filter((e, i) => monthSale.indexOf(e) === i).sort()
  const year = yearSale.filter((e, i) => yearSale.indexOf(e) === i)
  year.forEach(e => {
    month.forEach(i => {
      //saleMonth = salesMonth(e, i)
      let x = {month: monthName[i], year: e, sales: salesMonth(e, i)}
      arr.push(x)
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
  reportBestSeller.innerText = (`Vendedora que más ingresos generó: ${bestSellerEver()}`)
  printMixReport.appendChild(reportBestSeller)
}

// Importe total vendido por cada sucursal

const renderSubsidiary = () => {
  let saleSubsidiary = []
  shop.subsidiary.forEach(e => {
    let s = {sub: e, salesSub: salesSubOrSeller(e)}
    saleSubsidiary.push(s)
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

// Tiene que mostrar la unión de los dos reportes anteriores
const render = () => {  
  renderMonth()
  renderSubsidiary()
  bestSellerComponent()
  bestSellerEver()
}

render()

// Otras funciones


const onLoadFunctions = () => {
  let openModal = document.getElementById('modal')
  printSellerMonth()
  createSelect(onlyCategories, openModal)
  fillSelects(arrayOptionsS)
  printSales()
} 

const printSellerMonth = () => {
  let nameBS = document.getElementById('best-seller')
  nameBS.innerText = bestSellerEver()
  nameBS.classList.add('seller-main-text')
  let salesSeller = document.getElementById('sales-seller')
  salesSeller.classList.add('seller-main-text')
  salesSeller.innerText = salesSubOrSeller(bestSellerEver())
  let subsidiary = document.getElementById('best-subsidiary')
  subsidiary.classList.add('seller-main-text')
  subsidiary.innerText = bestSubsidiaryMonth(2019, 0) 
  let salesSub = document.getElementById('sales-subsidiary')
  salesSub.classList.add('seller-main-text')
  salesSub.innerText = salesSubOrSeller(bestSubsidiaryMonth(2019, 0))  
  let bestComp = document.getElementById('best-component')
  bestComp.innerText = bestSellerComponent() 
}

//Modal

const modal = () => {
let activeModal = document.getElementById('activeModal')
activeModal.classList.remove('modal')
activeModal.classList.add('activeModal')
}

const closeModal = () => {
  let closeModal = document.getElementById('activeModal')
  closeModal.classList.remove('activeModal')
  closeModal.classList.add('modal')
}

let arrayOptionsS = []

shop.seller.forEach(e => arrayOptionsS.push({name: e, category: "vendedora"}))
shop.subsidiary.forEach(e => arrayOptionsS.push({name: e, category: "sucursal"}))
shop.price.forEach(e => arrayOptionsS.push({name: e.component, category: "componente"}))

arrayOptionsS.forEach((e, i) => {
  e.id = i
})

let allCategories = arrayOptionsS.map(e => e.category)

let onlyCategories = allCategories.filter((e, i) => allCategories.indexOf(e) === i)

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
  option.value = elem.name
  return option
}

let arrayComponent = []

const addComponent = () => {
  let select = document.getElementById('componente')
  let option = arrayOptionsS.find(e => e.name === select.value)

  let pendingSales = document.getElementById('pendingSales')
  let textPendingSales = document.createElement('p')
  textPendingSales.innerText = option.name
  textPendingSales.classList.add('textPendingSales')
  pendingSales.appendChild(textPendingSales)
  arrayComponent.push(option.name)
}

//Imprimir opciones elegidas


const addNewSale = () => {
  let newSale = []
  onlyCategories.pop()

  onlyCategories.forEach(e => {
    let select = document.getElementById(e)
    let selectedCategory = arrayOptionsS.find(e => e.name === select.value)
    select.value = `Seleccione ${e}`
    let select2 = document.getElementById('componente')
    select2.value = `Seleccione componente`

    let components = document.getElementById('pendingSales')
    components.innerHTML = ''
    newSale.push(selectedCategory.name)
  })
  newSale.push(arrayComponent)

  shop.sales.unshift({date: new Date(), sellerName: newSale[0], components: newSale[2], subsidiary: newSale[1]})
  onlyCategories.push('componente')
  closeModal()
  printSales()
  arrayComponent = []
}

const printSales = () => {
  let allSales = document.getElementById('allSales')
  allSales.innerHTML = ''

  shop.sales.forEach(e => {
    let saleItem = document.createElement('ul')
    saleItem.classList.add('categories', 'sells')

    let dates = document.createElement('li')
    dates.innerText = `${e.date.getDate()}/${e.date.getMonth() + 1}/${e.date.getFullYear()}`
    saleItem.appendChild(dates)

    let subsidiary = document.createElement('li')
    subsidiary.innerText = e.subsidiary
    saleItem.appendChild(subsidiary)

    let seller = document.createElement('li')
    seller.innerText = e.sellerName
    saleItem.appendChild(seller)

    let components = document.createElement('li')
    components.innerText = e.components
    saleItem.appendChild(components)

    let price = document.createElement('li')
    price.innerText = `$${machinePrice(e.components)}`
    saleItem.appendChild(price)

    allSales.appendChild(saleItem)
  })
}

