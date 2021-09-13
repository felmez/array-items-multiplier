
$(document).ready(function () {
    const container = document.getElementById("container");
    const submitButton = document.getElementById("submit-button");
    const insertButton = document.getElementById("insert-button");
    const multiplyButton = document.getElementById("multiply-button");
    let array = [];
    let arrayLength;

    $("#submit-button").click(function () {
        arrayLength = $('#array-length').val()

        for (let i = 0; i < arrayLength; i++) {
            container.appendChild(document.createTextNode("Element " + (i) + " "));
            const input = document.createElement("input");
            input.type = "text";
            input.id = "element" + i;
            input.className = "item";
            container.appendChild(input);
            container.appendChild(document.createElement("br"));
        }

        submitButton.disabled = true;
        insertButton.disabled = false;
    })

    $("#clear-button").click(function () {
        container.innerHTML = '';
        submitButton.disabled = false;
        insertButton.disabled = true;
        multiplyButton.disabled = true;
        document.getElementById("array-length").value = '';
        document.getElementById("result").innerHTML = '';
        array = [];
    })

    $("#insert-button").click(function () {
        $('.item').each(function () {
            array.push($(this).val());
        });

        $('#result').append('<p class="array" id="array-print">Array: ' + array + '</p>');

        console.log(array);

        multiplyButton.disabled = false;
    })

    $("#multiply-button").click(function () {
        multiplyItems(array, arrayLength);
    })
})

function multiplyItems(array, arrayLength) {
    let newArray = [];

    let item = 1;

    for (i = 0; i < arrayLength; i++) {
        newArray[i] = item;
        item *= array[i];
    }

    item = 1;

    for (i = arrayLength - 1; i >= 0; i--) {
        newArray[i] *= item;
        item *= array[i];
    }

    document.querySelector('#result').insertAdjacentHTML('beforeend', '<p class="array" id="array-print">New Array: ' + newArray + '</p>');

    console.log(newArray)
}