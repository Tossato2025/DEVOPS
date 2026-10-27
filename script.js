const display = document.getElementById('calc-display');
let currentExpression = '';

function updateDisplay(value) {
    display.value = value || '0';
}

function appendNumber(number) {
    currentExpression += number;
    updateDisplay(currentExpression);
}

function appendOperator(operator) {
    if (currentExpression === '') return;
    
    const lastChar = currentExpression.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        currentExpression = currentExpression.slice(0, -1);
    }
    
    currentExpression += operator;
    updateDisplay(currentExpression);
}

function clearDisplay() {
    currentExpression = '';
    updateDisplay('0');
}

function calculate() {
    try {
        if (currentExpression) {
            // O eval é usado aqui de forma controlada apenas para a lógica matemática básica
            const result = eval(currentExpression);
            currentExpression = String(result);
            updateDisplay(currentExpression);
        }
    } catch (error) {
        updateDisplay('Erro');
        currentExpression = '';
    }
}
// Lógica de Alternância de Tema
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Atualiza o texto do botão de acordo com o tema ativo
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Modo Claro';
    } else {
        themeToggleBtn.textContent = 'Modo Escuro';
    }
});