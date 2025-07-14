class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }
  
  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

// Write your code here

class technicalBooks extends Book {
  constructor(title,author, ISBN, numCopies, edition){
    super(title, author, ISBN, numCopies);
    this.edition = edition
  }

  getEdition(){
      return `The current version of this book is ${this.edition}`
  }
}

const cleanCode = new technicalBooks("Clean Code", "Robert Cecil Martin",
  "23416", 10, 2008
)

console.log(cleanCode.availability)
console.log(cleanCode.getEdition())