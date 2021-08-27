const input = document.getElementById("fullname")

const button = document.getElementById("submit")

button.addEventListener('click',() => {
    if(input.value.length == 0){
        alert('Input tidak boleh kosong')
    } else {
        console.log({
            name : input.value
        }
        )
    }
})