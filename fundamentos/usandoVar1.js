{
    {
        {
            {
                var sera = 'Será????'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

//quando vc define uma variavel no escopo de uma função ela estara visivel apenas dentro da função mesmo usando var
function teste() {
    var local = 123
    console.log(local)
}

teste()