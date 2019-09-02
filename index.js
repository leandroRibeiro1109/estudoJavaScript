function imc (altura, peso) {
    return peso / (altura * altura)
}

var pessoas = [
    {
        nome: 'pedro',
        altura: 1.83,
        peso: 80
    },
    {
        nome: 'maria',
        altura: 1.90,
        peso: 90
    },
    {
        nome: 'joao',
        altura: 2.00,
        peso:100
    }            
]

for (var pesssoa of pessoas) {
    var resultado = imc(pesssoa.altura, pesssoa.peso)

    console.log(pesssoa.nome, resultado)
}