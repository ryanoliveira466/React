class Calculator{
    constructor(displayElement){
        this.display = displayElement
        this.shouldClearDisplay = false
    }

    appendToDisplay(value){
        if (this.display.textContent === '0' && value !== '.') {
            this.display.textContent = value
        }
        else if (this.shouldClearDisplay) {
            this.display.textContent = value
            this.shouldClearDisplay = false
        }
        else{
            this.display.textContent += value
        }
    }

    clearDisplay(){
        this.display.textContent = '0'
    }

    calculate(){
        try {
            const expression = this.display.textContent.replace(/x/g,"*")
            const result = eval(expression)
            this.display.textContent = result.toString()
            this.shouldClearDisplay = true
        } catch (error) {
            this.display.textContent = 'Erro'
            this.shouldClearDisplay = true
        }
    }
}

if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () =>{
        const display = document.getElementById('display')
        const calc = new Calculator(display)
        document.querySelectorAll('button').forEach(button => {
            if (button.id === 'clear') {
                button.addEventListener('click', () => {
                    calc.clearDisplay()
                })
            }

            else if(button.id === 'equals'){
                button.addEventListener('click', () => calc.calculate())
            }

            else{
                button.addEventListener('click', () => calc.appendToDisplay(button.textContent))
            }
        })
    })
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = Calculator
}