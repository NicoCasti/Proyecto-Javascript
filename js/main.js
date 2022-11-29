let numeroCPU = 0;
let numeroUsuario = 0;

numeroCPU = Math.floor(Math.random() * 10 + 1);

do {
  numeroUsuario = parseInt(prompt("Adivina el numero: (1-10)"));

  if (numeroUsuario == numeroCPU) {
    alert("Adivinaste");
  } else {
    if (numeroCPU < numeroUsuario) alert("El número es más chico");
    else {
      alert("El numero es más grande");
    }
  }
} while (numeroUsuario != numeroCPU);
