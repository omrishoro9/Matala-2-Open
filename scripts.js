// Helper function to display results
function displayResults(elementId, content) {
    const element = document.getElementById(elementId);
    element.textContent = content;
}

// Part A: JavaScript Objects
function runObjectTasks() {
    let results = "--- Part A: JavaScript Objects ---\n";

    // Task 1: Create a Simple Object
    const person = {
        name: "John Doe",
        age: 25,
        isStudent: true
    };
    results += `Task 1: ${JSON.stringify(person)}\n`;

    // Task 2: Access Object Properties
    results += `Task 2: Name: ${person.name}, Age: ${person.age}, isStudent: ${person["isStudent"]}\n`;

    // Task 3: Update Properties
    person.age = 30;
    person.hobby = "Reading";
    results += `Task 3: ${JSON.stringify(person)}\n`;

    // Task 4: Add and Update Multiple Properties
    const movie = {
        title: "Inception",
        genre: "Sci-Fi"
    };
    movie.releaseYear = 2010;
    movie.isPopular = true;
    movie.genre = "Action";
    results += `Task 4: ${JSON.stringify(movie)}\n`;

    // Task 5: Loop Through Object Properties
    const car = {
        make: "Toyota",
        model: "Corolla",
        year: 2020,
        color: "Blue"
    };
    for (const key in car) {
        results += `Task 5: ${key} -> ${car[key]}\n`;
    }

    // Task 6: Combine Objects
    const firstPerson = { name: "Alice", age: 22 };
    const secondPerson = { name: "Bob", age: 28 };
    const combined = { ...firstPerson, ...secondPerson };
    results += `Task 6: ${JSON.stringify(combined)}\n`;

    // Task 7: Count Object Properties
    results += `Task 7: Person: ${Object.keys(person).length}, Movie: ${Object.keys(movie).length}\n`;

    // Task 8: Delete a Property
    delete person.isStudent;
    results += `Task 8: ${JSON.stringify(person)}\n`;

    // Task 9: Check Property Existence
    const hasMake = "make" in car;
    const hasEngine = "engine" in car;
    results += `Task 9: Make: ${hasMake}, Engine: ${hasEngine}\n`;

    // Task 10: Edit an Object Using a Function
    function updatePerson(person, key, value) {
        person[key] = value;
    }
    updatePerson(person, "age", 35);
    updatePerson(person, "city", "New York");
    results += `Task 10: ${JSON.stringify(person)}\n`;

    displayResults("objectResults", results);
}

// Part B: JavaScript Arrays
function runArrayTasks() {
    let results = "--- Part B: JavaScript Arrays ---\n";

    // Task 1: Create an Array
    const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
    results += `Task 1: ${fruits.join(", ")}\n`;

    // Task 2: Access Array Elements
    results += `Task 2: First: ${fruits[0]}, Last: ${fruits[fruits.length - 1]}, Third: ${fruits[2]}\n`;

    // Task 3: Add and Remove Elements
    fruits.push("Fig");
    results += `Task 3 (Add to End): ${fruits.join(", ")}\n`;
    fruits.unshift("Grape");
    results += `Task 3 (Add to Beginning): ${fruits.join(", ")}\n`;
    fruits.pop();
    results += `Task 3 (Remove Last): ${fruits.join(", ")}\n`;

    // Task 4: Iterate Over an Array
    results += "Task 4: Iterating with for loop:\n";
    for (let i = 0; i < fruits.length; i++) {
        results += `${fruits[i]}\n`;
    }

    // Task 5: Find the Length of an Array
    results += `Task 5: Length: ${fruits.length}\n`;

    // Task 6: Check for an Element
    results += `Task 6: Contains 'Apple': ${fruits.includes("Apple")}, Contains 'Kiwi': ${fruits.includes("Kiwi")}\n`;

    // Task 7: Sort an Array
    results += `Task 7: Sorted: ${[...fruits].sort().join(", ")}\n`;

    // Task 8: Reverse an Array
    results += `Task 8: Reversed: ${[...fruits].reverse().join(", ")}\n`;

    // Task 9: Filter Array Elements
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evens = numbers.filter(n => n % 2 === 0);
    results += `Task 9: Evens: ${evens.join(", ")}\n`;

    // Task 10: Combine Two Arrays
    const vegetables = ["Carrot", "Broccoli", "Spinach"];
    const groceries = [...fruits, ...vegetables];
    results += `Task 10: Combined: ${groceries.join(", ")}\n`;

    displayResults("arrayResults", results);
}
