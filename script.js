document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mensagem dinâmica de boas-vindas baseada no horário
    const header = document.querySelector('header');
    const agora = new Date().getHours();
    let saudacao = "";

    if (agora < 12) {
        saudacao = "Bom dia! O campo já começou a produzir.";
    } else if (agora < 18) {
        saudacao = "Boa tarde! O sol brilha sobre a nossa produção.";
    } else {
        saudacao = "Boa noite! É hora de planejar um futuro sustentável.";
    }

    console.log(saudacao); // Exibe no console do navegador

    // 2. Contador de Impacto Sustentável (Simulação)
    // Esse efeito pode ser colocado no seu HTML futuramente
    const criarContador = () => {
        const section = document.querySelector('section');
        const divImpacto = document.createElement('div');
        divImpacto.innerHTML = `
            <div style="margin-top: 30px; padding: 20px; background: #e8f5e9; border: 1px solid #2e7d32; text-align: center;">
                <h3>Compromisso Ambiental</h3>
                <p>Árvores plantadas este ano: <strong id="contador">0</strong></p>
            </div>
        `;
        section.appendChild(divImpacto);

        let cont = 0;
        const alvo = 1500; // Meta hipotética
        const intervalo = setInterval(() => {
            cont += 25;
            document.getElementById('contador').innerText = cont;
            if (cont >= alvo) clearInterval(intervalo);
        }, 50);
    };

    // Executa o contador após 1 segundo de carregamento
    setTimeout(criarContador, 1000);
});
