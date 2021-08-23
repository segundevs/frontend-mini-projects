// Get elements from the DOM
const bill = document.querySelector('.bill-input')
const people = document.querySelector('.people-input')
const custom = document.querySelector('.tip-custom')
const btnReset = document.querySelector('.btn-reset')
const errorMsg = document.querySelector('.error-msg')

const buttons = document.querySelectorAll('.tip-percent')


const personBill = document.querySelector('#person-bill')
const totalBill = document.querySelector('#total-bill')


const calculate = document.querySelector('.calculator')

const calc = () => {
  buttons.forEach(btn => {
    btn.addEventListener('click', (e)=>{
      e.preventDefault()
      if(people.value !== '0'){
        const res = (e.target.value / 100) * bill.value
        const tip = res * people.value
        totalBill.textContent = `$${tip.toFixed(2)}`
        personBill.textContent = `$${res.toFixed(2)}`
      }else {
        people.style.outline = '2px solid red'
        errorMsg.style.display = 'inline-block'
        setTimeout(()=>{
          people.style.outline = ''
          people.value = ''
          errorMsg.style.display = 'none'
        }, 2000)
        
      }
      
    })
  })
}

  
calculate.addEventListener('submit', 
  calc()
)

custom.addEventListener('keyup', (e)=>{
  e.preventDefault()
  if(custom.value !== ''){
    const result = (custom.value / 100) * bill.value
    const tipped = result * people.value

      totalBill.textContent = `$${tipped.toFixed(2)}`
      personBill.textContent = `$${result.toFixed(2)}`
  }else{
      totalBill.textContent = '$0.00'
      personBill.textContent = '$0.00'
  }
})

btnReset.addEventListener('click', ()=>{
bill.textContent = ''
people.textContent = ''
custom.textContent = ''
totalBill.textContent = '$0.00'
personBill.textContent = '$0.00'
})

