// Write your code here
class movie {
  constructor(title, director, genre, releaseYear, rating){
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating
  }
   getOverview() {
    return  `${this.title}, a ${this.genre}, film directed by ${this.director}, was released
      in ${this.releaseYear}, it received a rating of ${this.rating} `
  }
}

const GameofThrones = new movie ("Game of Thrones",
  "Frank Onuoha", "Fiction", 2016, "⭐️⭐️⭐️⭐️⭐️"
)
console.log(GameofThrones.getOverview())