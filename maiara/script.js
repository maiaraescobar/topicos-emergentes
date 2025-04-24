function aplicarMascara(input, mascara) {
    input.addEventListener('input', () => {
      let i = 0;
      const valor = input.value.replace(/\D/g, '');
      input.value = mascara.replace(/0/g, () => valor[i++] || '');
    });
  }
  
  // Aplicar máscaras
  aplicarMascara(document.getElementById('cpf'), '000.000.000-00');
  aplicarMascara(document.getElementById('telefone'), '(00) 00000-0000');
  aplicarMascara(document.getElementById('dataNascimento'), '00/00/0000');
  aplicarMascara(document.getElementById('cep'), '00000-000');
  
  // Validação do formulário
  document.getElementById('formulario').addEventListener('submit', (e) => {
    const campos = ['cpf', 'telefone', 'dataNascimento', 'cep'];
    let valido = true;
  
    campos.forEach(id => {
      const input = document.getElementById(id);
      if (input.value.includes('_') || input.value.length !== mascaraLength(id)) {
        alert(`Preencha corretamente o campo: ${id}`);
        valido = false;
      }
    });
  
    if (!valido) e.preventDefault();
  });
  
  // Retorna o tamanho esperado de cada máscara
  function mascaraLength(id) {
    switch(id) {
      case 'cpf': return 14;
      case 'telefone': return 15;
      case 'dataNascimento': return 10;
      case 'cep': return 9;
      default: return 0;
    }
  }
  