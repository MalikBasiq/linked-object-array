const array = [
    {id: "one", next: "two", value: null},
    {id: "two", next: "three", value: null},
    {id: "three", next: "four", value: null},
    {id: "four", next: null, value: null}
]

function linkarray(array) {

    let nextIndex = 0

    let current = 0

    let count = 0;

    for (let i = 0; i < array.length; i++) {
        count = i + 1;
        current = array[i]

        while (count < array.length) {

            nextIndex = array[count]
            if (current.next === nextIndex.id) {

                current.value = nextIndex
                count++;
                current = nextIndex

            }
        }


    }
    return array
}

let resultArray = linkarray(array)
console.log(resultArray)
