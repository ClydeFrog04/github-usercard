/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
/*
const cards = document.querySelector(".cards");
axios.get("https://api.github.com/users/ClydeFrog04")
.then((response) => {
        console.log("Data back", response);
        cards.appendChild(card(response));
    })
.catch((err) =>{
        console.log(err);

    });*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const cards = document.querySelector(".cards");
const friendsArray = ["ClydeFrog04", "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];
friendsArray.forEach((friend) => {
    const url = "https://api.github.com/users/" + friend;
    axios.get(url)
        .then((response) => {
            cards.appendChild(card(response));
        })
        .catch((err) => {
            console.log(err);

        });
});

function card(props) {
    //declare/initialize elements
    const div = document.createElement("div");
    const userAvImg = document.createElement("img");
    const cardInfoDiv = document.createElement("div");
    const nameH3 = document.createElement("h3");
    const usernameP = document.createElement("p");
    const locationP = document.createElement("p");
    const profileURLP = document.createElement("p");
    const profileAnchor = document.createElement("a");
    const followersCountP = document.createElement("p");
    const followingCountP = document.createElement("p");
    const userBioP = document.createElement("p");

    //set classes
    div.classList.add("card");
    cardInfoDiv.classList.add("card-info");
    nameH3.classList.add("name");
    usernameP.classList.add("username");

    //set src and hrefs
    userAvImg.setAttribute("src", props.data.avatar_url);
    profileAnchor.setAttribute("href", props.data.html_url);

    //hierarchy
    div.appendChild(userAvImg);
    div.appendChild(cardInfoDiv);
    cardInfoDiv.appendChild(nameH3);
    cardInfoDiv.appendChild(usernameP);
    cardInfoDiv.appendChild(locationP);
    profileURLP.appendChild(profileAnchor);
    cardInfoDiv.appendChild(profileURLP);
    cardInfoDiv.appendChild(followersCountP);
    cardInfoDiv.appendChild(followingCountP);
    cardInfoDiv.appendChild(userBioP);

    //set text contents
    nameH3.textContent = props.data.name;
    usernameP.textContent = props.data.login;
    locationP.textContent = "Location: " + props.data.location;
    profileAnchor.textContent = "Profile: " + props.data.html_url;
    followersCountP.textContent = "Followers: " + props.data.followers;
    followingCountP.textContent = "Following: " + props.data.following;
    userBioP.textContent = "Bio: " + props.data.bio;

    return div;
}

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
