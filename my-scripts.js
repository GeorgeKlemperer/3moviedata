const date = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
document.getElementById("date").innerHTML =
  days[date.getDay()] +
  " " +
  date.getDate() +
  "/" +
  (date.getMonth() + 1) +
  "/" +
  date.getFullYear();

let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons.",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
  },
};

function updateMovieCount() {
  const movieCountElement = document.getElementById("movieCount");

  // const count = Object.keys(movieData).length; // This code will count the number of keys in movieData

  var element = document.getElementById("flex-container"); // This code will count number of child elements (<div>'s) in flex-container
  var count = element.childElementCount;


if (count >=1) {
  movieCountElement.innerHTML = `Add your favourite movies!`;
}
else{
  movieCountElement.innerHTML = `I guess you don't like movies then.`;
}
}

// this code adds form values to movieData object then reprints object.
function addmoviedict() {
  //This code prevents interger object keys breaking sorting code, by forcing qoute marks around numbers.
  if (isNaN(moviename.value) == false) {
    mname = isNaN(moviename.value) ? key : `"${moviename.value}"`;
    console.log("returned false");
    console.log(mname);
  } else {
    mname = moviename.value;
    console.log("returned true");
    console.log(mname);
  }

  // mname = isNaN(moviename.value) ? key : `"${moviename.value}"`;

  myear = movieyear.value;
  mrating = movierating.value;
  mruntime = movieruntime.value;
  mplot = movieplot.value;
  mcast = moviecast.value; //.split(',').map(castMember => castMember.trim()); //This turns value into an array

  let tempmoviedict = {
    // a = moviename.value
    year: myear,
    rating: mrating,
    runtime: mruntime,
    plot: mplot,
    cast: mcast,
  };

  // the || means "or" and ! means blank
  if (!mname || !myear || !mrating || !mruntime || !mplot || !mcast) {
    alert("Please fill in all fields! :)");
  } else {
    movieData[mname] = tempmoviedict;

    moviecard(movieData);

    moviename.value = "";
    movieyear.value = "";
    movierating.value = "";
    movieruntime.value = "";
    movieplot.value = "";
    moviecast.value = "";
    console.log("all fine");
  }
  // above code resets all fields so they are empty again
}

// Old add movie function (simply printed out form values)
function addmovie() {
  a = moviename.value;
  b = movieyear.value;
  c = movierating.value;
  d = movieruntime.value;
  e = movieplot.value;
  f = moviecast.value;

  // the || means "or" and ! means blank
  if (!a || !b || !c || !d || !e || !f) {
    alert("Please fill in all fields! :)");
  } else {
    const p = document.createElement("p");
    const br = document.createElement("br");
    const u = document.createElement("u");
    const div = document.createElement("div");

    // let input = document.getElementById("moviename");
    // movieData[input.value]

    var cardtext = `<u>${a}</u><br>Year: ${b}<br> Rating: ${c}<br>Runtime: ${d}<br> Plot: ${e}<br> Cast: ${f}`;

    p.innerHTML = cardtext;
    div.appendChild(p);

    document.getElementById("flex-container").appendChild(div);
  }
  // moviecard(movieData) // This function is called again so cards are re-made with new object key added

  moviename.value = "";
  movieyear.value = "";
  movierating.value = "";
  movieruntime.value = "";
  movieplot.value = "";
  moviecast.value = "";
  // above code resets all fields so they are empty again
}

function rearrangemovies(year) {
  container_element.innerHTML = "";

  // Convert movieData object into an array of its values
  const movieArray = Object.keys(movieData).map((key) => {
    return { ...movieData[key], title: key };
  });

  console.log("Original array");
  console.log(movieArray);

  // Sort the array based on the year property in ascending order
  const sortedMovieArray = movieArray.sort((p1, p2) =>
    p1.year < p2.year ? -1 : p1.year > p2.year ? 1 : 0
  );

  // Create a new sorted movie object
  const sortedMovieData = sortedMovieArray.reduce((obj, item) => {
    obj[item.title] = item;
    return obj;
  }, {});

  console.log("Sorted log");
  console.log(sortedMovieArray);

  moviecard(sortedMovieData);

  movieData = sortedMovieData;
}

// This function prints out Object input
function moviecard(movieinfo) {
  container_element = document.getElementById("flex-container");

  // This code sets container element content to equal nothing (which basically resets the list)
  container_element.innerHTML = "";

  // Gives all movies a title property
  for (const key of Object.keys(movieData)) {
    movieData[key].title = key;

    console.log("Key");
    console.log(key);
  }

  for (key of Object.keys(movieinfo)) {
    console.log(key);
    const name = key;
    const year = movieinfo[key].year; // key here is in square brackets as there is spaces in it.
    const rating = movieinfo[key].rating;
    const runtime = movieinfo[key].runtime;
    const plot = movieinfo[key].plot;

    let cast;
    if (Array.isArray(movieinfo[key].cast)) {
      cast = movieinfo[key].cast.join(", ");
    } else {
      cast = movieinfo[key].cast;
    }

    // above if statement formats cast to have spaces if data type is an object (such as movieData list), else it will just print as string.

    const p = document.createElement("p");
    const br = document.createElement("br");
    const u = document.createElement("u");
    const div = document.createElement("div");
    const button = document.createElement("button");

    var cardtext = `<u>${key}</u><br>Year: ${year}<br> Rating: ${rating}<br>Runtime: ${runtime}<br> Plot: ${plot}<br> Cast: ${cast}.`;

    p.innerHTML = cardtext;

    div.appendChild(p);

    button.innerHTML = `Delete`;
    // Attach the "click" event to your button
    button.addEventListener("click", () => {
      // When there is a "click"
      // it shows an alert in the browser
      // alert("Oh, you clicked me!"); //This commented out code was to test is click function was added.
      const movieName = button.parentNode.querySelector("u").textContent;
      delete movieData[movieName];

      button.parentNode.remove(); // This function removes the button's parent node.
      updateMovieCount();
    });
    div.appendChild(button);

    container_element.appendChild(div);

    // console.log(name,year,rating,runtime,plot,cast)

    // Update the movie count
    updateMovieCount();
  }
}

moviecard(movieData);

// // Creates <p> element element:
// const movie1info = document.createElement("p");
// // Adds text to <p element:
// movie1info.innerHTML = "<u>The Darjeeling Limited</u><br>Year: " + movieData["The Darjeeling Limited"].year + "<br>Rating: " + movieData["The Darjeeling Limited"].rating + "<br>Runtime: " + movieData["The Darjeeling Limited"].runtime + "<br>Plot:<br>" + movieData["The Darjeeling Limited"].plot + "<br>Cast:<br>" + movieData["The Darjeeling Limited"].cast.join(", ");
// // Append "para" to another element:
// document.getElementById("movie1").appendChild(movie1info);

// // Creates <p> element element:
// const movie2info = document.createElement("p");
// // Adds text to <p element:
// movie2info.innerHTML = "<u>The Royal Tenenbaums</u><br>Year: " + movieData["The Royal Tenenbaums"].year + "<br>Rating: " + movieData["The Royal Tenenbaums"].rating + "<br>Runtime: " + movieData["The Royal Tenenbaums"].runtime + "<br>Plot:<br>" + movieData["The Royal Tenenbaums"].plot + "<br>Cast:<br>" + movieData["The Royal Tenenbaums"].cast.join(", ");
// // Append "para" to another element:
// document.getElementById("movie2").appendChild(movie2info);

// // Creates <p> element element:
// const movie3info = document.createElement("p");
// // Adds text to <p element:
// movie3info.innerHTML = "<u>Fantastic Mr. Fox</u><br>Year: " + movieData["Fantastic Mr. Fox"].year + "<br>Rating: " + movieData["Fantastic Mr. Fox"].rating + "<br>Runtime: " + movieData["Fantastic Mr. Fox"].runtime + "<br>Plot:<br>" + movieData["Fantastic Mr. Fox"].plot + "<br>Cast:<br>" + movieData["Fantastic Mr. Fox"].cast.join(", ");
// // Append "para" to another element:
// document.getElementById("movie3").appendChild(movie3info);

// // Creates <p> element element:
// const movie4info = document.createElement("p");
// // Adds text to <p element:
// movie4info.innerHTML = "<u>The Grand Budapest Hotel</u><br>Year: " + movieData["The Grand Budapest Hotel"].year + "<br>Rating: " + movieData["The Grand Budapest Hotel"].rating + "<br>Runtime: " + movieData["The Grand Budapest Hotel"].runtime + "<br>Plot:<br>" + movieData["The Grand Budapest Hotel"].plot + "<br>Cast:<br>" + movieData["The Grand Budapest Hotel"].cast.join(", ");
// // Append "para" to another element:
// document.getElementById("movie4").appendChild(movie4info);
