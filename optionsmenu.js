const readline = require("readline");

const readline1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let books = ["Maths", "Computer Science", "Physics"];

function application() {
    readline1.question("Menu \n Select books: \n 1 - Show all books \n 2 - Add a new book \n 3 - Quit \n", function (number) {
        if (number == 1) {
            console.log(books);
            application();
        } else if (number == 2) {
            readline1.question("Enter the name of the book \n", function (name) {
                books.push(name);
                console.log("Book added successfully");
                application();
            });
        } else if (number == 3) {
            readline1.question("Are you sure you want to quit - press Y to quit \n", function (enter) {
                if (enter == "y" || enter == "Y") {
                    readline1.close();
                }
            })
        } else {
            console.log("You have selected an invalid entry so please press 1, 2 or 3 \n");
            application();
        };
    });
};

readline1.on("close", function () {
    console.log("Bye Bye");
});
application();
