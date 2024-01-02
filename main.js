if (typeof document !== 'undefined') {
    var button = document.getElementById('btn');
    let input = document.getElementById('Accno');
    var resultvalue = document.getElementById('accvalue');

    function createElement() {
        if (input.value.length > 0) {
            let create = document.createElement('p');
            let inputText = document.createTextNode(input.value);
            create.appendChild(inputText);
            resultvalue.appendChild(create);
            input.value = ""
            return resultvalue.innerText
        }
    }

    button.addEventListener('click', createElement);

}