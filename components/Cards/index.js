// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

//selecting the element to append the card function
const cardContainer = document.querySelector(".cards-container");

function createCard(newCard) {
  const card = document.createElement("div");
  const headLine = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const span = document.createElement("span");

  //structuring
  card.appendChild(headLine);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(span);

  //adding the classes to the elements
  card.classList.add("card");
  headLine.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  //adding the content
  //javascript headlines

  newCard.javascript.forEach(element => {
    headLine.textContent = element.headline;
    span.textContent = element.authorName;
    img.src = element.authorPhoto;
  });

  newCard.bootstrap.forEach(element => {
    headLine.textContent = element.headline;
    span.textContent = element.authorName;
    img.src = element.authorPhoto;
  });

  newCard.technology.forEach(element => {
    headLine.textContent = element.headline;
    span.textContent = element.authorName;
    img.src = element.authorPhoto;
  });

  newCard.jquery.forEach(element => {
    headLine.textContent = element.headline;
    span.textContent = element.authorName;
    img.src = element.authorPhoto;

    newCard.node.forEach(element => {
      headLine.textContent = element.headline;
      span.textContent = element.authorName;
      img.src = element.authorPhoto;
    });
  });

  return card;
}

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response.data.articles);
    cardContainer.appendChild(createCard(response.data.articles));
  })

  .catch(error => {
    console.log("Error:", error);
  });
