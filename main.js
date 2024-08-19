class DispositivoEletronico {
    aparelho(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
      if (new.target === DispositivoEletronico) {
        throw new Error('Esta classe não pode ser instanciada diretamente');
      }
    }
  }
  
  class Smartphone extends DispositivoEletronico {
    aparelho(marca, modelo, sistemaOperacional) {
      desing(marca, modelo);
      this.sistemaOperacional = sistemaOperacional;
    }
  
    ligar() {
      console.log('Ligando o smartphone...');
    }
  
    desligar() {
      console.log('Desligando o smartphone...');
    }
  }
  
  class Computador extends DispositivoEletronico {
    aparelho(marca, modelo, processador) {
      desing(marca, modelo);
      this.processador = processador;
    }
  
    ligar() {
      console.log('Ligando o computador...');
    }
  
    desligar() {
      console.log('Desligando o computador...');
    }
  }
  
  const smartphone1 = new Smartphone('Apple', 'iPhone 16', 'iOS 18');
  const computador1 = new Computador('Samsung', 'GalaxyS25', 'Android 15');
  
  smartphone1.ligar();
  computador1.desligar();