var shop = {
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

console.log(machinePrice(["Motherboard ASUS 1200", "HDD Toyiva"]))


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

console.log(salesSubOrSeller("Ada"));

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
console.log(amountSalesComponents("Monitor GPRS 3000"));


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

console.log(bestSellerMonth(2019, 0))

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

// console.log(salesMonth(2019, 1));

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

console.log(bestSellerComponent());

// Indica si hubo ventas en un mes determinado

const thereWereSales = (year, month) => {
  let sales = false // habria que cambiarle el nombre para que tenga como resultado un booleano
  shop.sales.forEach(e => { e.date.getMonth() === month || e.date.getFullYear() === year ? sales = true : undefined})
  return sales
}

console.log(thereWereSales(2019, 1));

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

console.log(bestSubsidiaryMonth(2019, 0))

// Importe total vendido por cada mes/año

let monthName = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const renderMonth = () => {
  let monthSale = shop.sales.map(s => s.date.getMonth())
  let yearSale = shop.sales.map(s => s.date.getFullYear())
  const month = monthSale.filter((e, i) => monthSale.indexOf(e) === i).sort()
  const year = yearSale.filter((e, i) => yearSale.indexOf(e) === i)
  let saleMonth
  year.forEach(e => {
    month.forEach(i => {
      saleMonth = salesMonth(e, i)
      console.log(`El importe total vendido en ${monthName[i]} del ${e} es: $${saleMonth}`) 
    })
  })
  return saleMonth
}

// renderMonth()

// Importe total vendido por cada sucursal

const renderSubsidiary = () => {
  let saleSubsidiary
  shop.subsidiary.forEach(e => {
    saleSubsidiary = salesSubOrSeller(e)
    console.log(`El importe total vendido en la sucursal de ${e} es: $${saleSubsidiary}`)
  })
  return saleSubsidiary
}

// renderSubsidiary()

// Tiene que mostrar la unión de los dos reportes anteriores

const render = () => {
  let month = new Date().getMonth()
  console.log(`Reporte:
  Ventas del mes: ${renderMonth()}
  Ventas por sucursal: ${renderSubsidiary()}
  Producto estrella: ${bestSellerComponent()}
  Vendedora que más ingresos generó: ${bestSellerMonth(2019, month)}`)
}

render()


// Otras funciones



const printSellerMonth = () => {
  let nameBS = document.getElementById('best-seller')
  nameBS.innerText = bestSellerMonth(2019, 0)
  nameBS.classList.add('seller-main-text')
  let salesSeller = document.getElementById('sales-seller')
  salesSeller.innerText = salesSubOrSeller(bestSellerMonth(2019, 0))
  let subsidiary = document.getElementById('seller-subsidiary')
  subsidiary.innerText = bestSubsidiaryMonth(2019, 0)
}

//Modal

const modal = () => {
let newSaleBtn = document.getElementById('newSaleBtn')
let openModal = document.getElementById('activeModal')
newSaleBtn.onclick = () => {
    activeModal.classList.toggle('activeModal')
  } 
}

const closeModal = () => {
  let closeModal = document.getElementById('closeModal')
  closeModal.onclick = () => {
      closeModal.classList.toggle('modal')
    } 
  }


//Crea UL
const createUl = () => {
  let ul = document.createElement('ul')
  ul.classList.add('categories sells')
  let li = document.createElement('li')
  ul.appendChild(li)
}

const onLoadFunctions = () => {
  let openModal = document.getElementById('selectors')
  printSellerMonth()
  createSelSubSelects()
} 

//Crea select para vendedoras y sucursales
const createSelSubSelects = () => {
  let showModal = document.getElementById('modal')
  let select = document.createElement('select')
  createOptions(shop.seller).forEach(o => select.appendChild(o))
  showModal.appendChild(select)
  let selectPrice = document.createElement('select')
  createPriceOptions(shop.price).forEach(o => selectPrice.appendChild(o))
  showModal.appendChild(selectPrice)
  let selectSubsidiary = document.createElement('select')
  createOptions(shop.subsidiary).forEach(o => selectSubsidiary.appendChild(o))
  showModal.appendChild(selectSubsidiary)

}

const fillSelects = (list, id) => {
  list.forEach(e => {
      let select = document.getElementById(id)
      if(select.childElementCount === 0){
          let placeholder = {name:`seleccione vendedora`, id:''}
          select.appendChild(createOption(placeholder))
      }
      select.appendChild(createOption(e))
  })
}

//Crea option para vendedoras y sucursales

const createOptions = (array) => {
      return array.map((e,i) => {
      let option = document.createElement('option')
      option.innerText = e
      option.value = e
      option.id = i
      return option 
    })
    
} 
const createPriceOptions = array => {
    return array.map((e,i) => {
      let option = document.createElement('option')
      option.innerText = e.component
      option.value = e.price
      option.id=i
      console.log(option)
      return option
    })
    
} 

//Imprimir opciones elegidas


const printSales = () => {
    allSales = document.getElementById('allSales')
    allSales.innerHTML = ''
    allSales.map = () => {
      let saleItem = document.createElement('li')
      saleItem.classList.add('newSale')
      saleItem.innerText = newSale.text
    }
}


const addNewSale = () => {
  let newSale = document.getElementById('input') 
   let showNewsale = () => {
    input.onclick() = document.createElement('ul')
    newSale = input.value
    newSale.unshift({
          text: newSale,
          isNewSale: true
        })
   }
  printSales()
}