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

//manually creating friends
// const cards = document.querySelector(".cards");
// const friendsArray = ["ClydeFrog04", "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];
// friendsArray.forEach((friend) => {
//     const url = "https://api.github.com/users/" + friend;
//     axios.get(url)
//         .then((response) => {
//             console.log(response);
//             cards.appendChild(card(response));
//         })
//         .catch((err) => {
//             console.log(err);
//
//         });
// });


//instead of a foreach, it will be just my request again, then the next promise will be to create my followers
//programmatically doing it
const cards = document.querySelector(".cards");
axios.get("https://api.github.com/users/ClydeFrog04")
    .then((response) => {
        console.log("Data back", response);
        cards.appendChild(card(response));
        return axios.get(response.data.followers_url);
    })
    .then((response) =>{
        console.log("follower response data: ", response.data);
        response.data.forEach((follower) =>{
            console.log(follower.url);
            //cards.appendChild(card(axios.get(follower.url)));
            axios.get(follower.url)
                .then((response) =>{
                    cards.appendChild(card(response));
                })
                .catch(err => {console.log(err)});
        });
    })
    .catch((err) => {
        console.log(err);

    });

function card(props) {
    //declare/initialize elements
    const div = document.createElement("div");
    const flexBreak = document.createElement("div");
    const userAvImg = document.createElement("img");
    const cardInfoDiv = document.createElement("div");
    const nameH3 = document.createElement("h3");
    const collapsedNameH3 = document.createElement("h3");
    const usernameP = document.createElement("p");
    const locationP = document.createElement("p");
    const profileURLP = document.createElement("p");
    const profileAnchor = document.createElement("a");
    const followersCountP = document.createElement("p");
    const followingCountP = document.createElement("p");
    const userBioP = document.createElement("p");
    const expandBtn = document.createElement("span");
    const collapseBtn = document.createElement("span");
    const btnContainer = document.createElement("div");
    const gitCalendar = document.createElement("div");

    //set classes
    div.classList.add("card");
    cardInfoDiv.classList.add("card-info");
    cardInfoDiv.classList.add("hide");
    collapsedNameH3.classList.add("name");
    userAvImg.classList.add("hide");
    nameH3.classList.add("name");
    usernameP.classList.add("username");
    expandBtn.classList.add("button");
    collapseBtn.classList.add("button");
    collapseBtn.classList.add("hide");
    flexBreak.classList.add("break");
    gitCalendar.classList.add("calendar");

    //set src and hrefs
    userAvImg.setAttribute("src", props.data.avatar_url);
    profileAnchor.setAttribute("href", props.data.html_url);

    //hierarchy
    div.appendChild(collapsedNameH3);
    div.appendChild(userAvImg);
    div.appendChild(cardInfoDiv);
    div.appendChild(gitCalendar);
    div.appendChild(flexBreak);
    div.appendChild(btnContainer);
    btnContainer.appendChild(expandBtn);
    btnContainer.appendChild(collapseBtn);
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
    collapsedNameH3.textContent = props.data.name;
    usernameP.textContent = props.data.login;
    locationP.textContent = "Location: " + props.data.location;
    profileAnchor.textContent = "Profile: " + props.data.html_url;
    followersCountP.textContent = "Followers: " + props.data.followers;
    followingCountP.textContent = "Following: " + props.data.following;
    userBioP.textContent = "Bio: " + props.data.bio;
    expandBtn.textContent = "Expand";
    collapseBtn.textContent = "Collapse";

    //button code
    btnContainer.addEventListener("click", ()=>{
        expandBtn.classList.toggle("hide");
        collapseBtn.classList.toggle("hide");
        cardInfoDiv.classList.toggle("hide");
        userAvImg.classList.toggle("hide");
        collapsedNameH3.classList.toggle("hide");
    });

    //github calendar
    new GitHubCalendar(".calendar", "ClydeFrog04");

    return div;
}
/*
<!-- Prepare a container for your calendar. -->


<!-- Prepare a container for your calendar. -->
<div class="calendar">
    <!-- Loading stuff -->
    Loading the data just for you.
</div>

<script>
    new GitHubCalendar(".calendar", "your-username");
</script>
 */

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
