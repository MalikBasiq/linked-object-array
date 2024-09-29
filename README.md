# Linked Object Array

This project provides a JavaScript function that links elements within an array of objects using their `next` property. It associates each object with the next one in the sequence by updating the `value` field, making it easy to traverse the chain of linked objects.

## 🛠️ Features

- **Array-Based Linking**: Links objects in an array by their `next` property.
- **Object Association**: Updates each object’s `value` field to reference the next object in the sequence.
- **Pure JavaScript**: No external dependencies required.

## 📚 Example Usage

```javascript
const array = [
    {id: "one", next: "two", value: null},
    {id: "two", next: "three", value: null},
    {id: "three", next: "four", value: null},
    {id: "four", next: null, value: null}
];

function linkarray(array) {
    let nextIndex = 0;
    let current = 0;
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        count = i + 1;
        current = array[i];

        while (count < array.length) {
            nextIndex = array[count];
            if (current.next === nextIndex.id) {
                current.value = nextIndex;
                count++;
                current = nextIndex;
            }
        }
    }
    return array;
}

let resultArray = linkarray(array);
console.log(resultArray);


[
  {
    "id": "one",
    "next": "two",
    "value": {
      "id": "two",
      "next": "three",
      "value": {
        "id": "three",
        "next": "four",
        "value": {
          "id": "four",
          "next": null,
          "value": null
        }
      }
    }
  },
  {
    "id": "two",
    "next": "three",
    "value": {
      "id": "three",
      "next": "four",
      "value": {
        "id": "four",
        "next": null,
        "value": null
      }
    }
  },
  {
    "id": "three",
    "next": "four",
    "value": {
      "id": "four",
      "next": null,
      "value": null
    }
  },
  {
    "id": "four",
    "next": null,
    "value": null
  }
]
🚀 Technologies Used
JavaScript: Core language used for implementing the array linking logic.



📧 Contact
Created by Malik. Feel free to reach out with any questions or suggestions!


This README fits well with the functionality of your code. Let me know if you want to add anything else!





