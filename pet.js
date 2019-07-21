const mojo = {
  name: "Mojo",
  species: "dog",
  nicknames: [
      "Hey You",
      "Dog",
      "Butthead"
  ],
  age: 5,
  sleep: () => {
      window.alert("snore")
  },
   whine: () => {
      window.alert("whiiiiine")
 
  },
  bark: () => {
    window.alert("woof")
  
  },
  favoriteToys: [],
  play: function (toy) {
      if (toy.squeaky === true || toy.soft === true) {
          this.favoriteToys.push(toy)
      }
  }
}

const hedgeHog = {
  name: "Hoggy",
  squeaky: true,
  furry: true,
  size: "medium",
  
}

const tennisBall = {
  name: "TennisBall",
  squeaky: false,
  furry: false,
  size: "small",
  
}


mojo.play(hedgeHog)
mojo.play(tennisBall)


console.log(mojo)


// mojo.sleep()
// mojo.whine()
// mojo.bark()
