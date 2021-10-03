// const s1 = 'Hello';
// console.log(typeof s1);

// const s2 = new String('Hello');
// console.log(typeof s2);

// console.log(window);

// console.log(navigator.appVersion)

// Object literial

const book = {
    title: 'Book one',
    author: "Jane Doe",
    year: "2016",
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
};

console.log(book);
