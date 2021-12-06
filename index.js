let myCollection = [
    {
        name: "School of Code mug",
        count: 1,
        whatILike: "It has my cute pixel character on it!",
    },
    {
        name: "School of Code hat",
        count: 2,
        whatILike: "An often overlooked fashion accessory",
    },
    {
        name: "School of Code pillow",
        count: 1,
        whatILike: "Eat. Sleep. Code. Repeat :)",
    },
];

// console.log(myCollection);

const describeItem = (count) => {
    // Extract the number according to the count key within the object
    console.log(
        `I have ${myCollection[1].count} ${myCollection[0].name}s. Here's what I like about it: ${myCollection[0].whatILike}`
    );
    // Extract the number according to the function's count parameter/argument
    console.log(
        `I have ${count} ${myCollection[0].name}s. Here's what I like about it: ${myCollection[0].whatILike}`
    );
};

describeItem(9);

function describeCollection(item) {
    myCollection.forEach((item) => console.log(item));
}
describeCollection(3);
