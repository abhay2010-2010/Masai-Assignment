let data = [
  {
    movieName: "The Shawshank Redemption",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    rating: 4.8,
    bestScenes: [
      {
        title: "Andy Dufresne escapes from prison",
        duration: "15 mins",
      },
      {
        title: "Brooks was here",
        duration: "10 mins",
      },
    ],
  },
  {
    movieName: "The Godfather",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    rating: 4.9,
    bestScenes: [
      {
        title: "Horse head in bed",
        duration: "5 mins",
      },
      {
        title: "Cannoli scene",
        duration: "3 mins",
      },
    ],
  },
  {
    movieName: "The Dark Knight",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    rating: 4.8,
    bestScenes: [
      {
        title: "Opening bank robbery",
        duration: "12 mins",
      },
      {
        title: "Why So Serious interrogation",
        duration: "8 mins",
      },
    ],
  },
  {
    movieName: "The Lord of the Rings: The Return of the King",
    actors: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
    rating: 4.9,
    bestScenes: [
      {
        title: "Ride of the Rohirrim",
        duration: "10 mins",
      },
      {
        title: "Frodo destroys the One Ring",
        duration: "7 mins",
      },
    ],
  },
];

// for moviename and max duration of scene
const ans = data.map((ele) => {
  return {
    movieName: ele.movieName,
    bestScenesDuration: ele.bestScenes.reduce((max, scene) =>
      parseInt(max.duration) > parseInt(scene.duration) ? max : scene
    ).duration,
  };
});

// for averaage rating of movies using reduce method 
const avgrating=data.reduce((acc,curr)=>curr.rating+acc,0)/data.length;


console.log(avgrating);
