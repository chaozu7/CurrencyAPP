document.addEventListener('DOMContentLoaded', function (){

    document.querySelector('form').onsubmit = function (){

        fetch('http://api.exchangeratesapi.io/latest?base=USD').then(response => response.json())
        .then(data => {
            const currency = document.querySelector('#currency').value.toUpperCase();
            const rate = data.rates[currency];
            if (rate !== undefind){
                document.querySelector('#result').innerHTML = rate;
            } else{
                document.querySelector('#result').innerHTML ="Invalid currency";
            }
        })
        
        .catch(error => {
            console.log("Error", error);
        });

        return false;

    }

    
});