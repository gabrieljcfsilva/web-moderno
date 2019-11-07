function Pessoa() {
    this.idade = 0
    
    const self = this // artificio tecnologico

    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa