import { myCollection } from "./collection.js";

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

function describeCollection() {
    myCollection.forEach((count) => console.log(count.count));
}

describeCollection();
