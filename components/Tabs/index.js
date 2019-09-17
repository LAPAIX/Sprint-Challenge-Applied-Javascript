// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//topic element
const topics = document.querySelector(".topics");

//creating the component

function createTab(tabItems) {
  let tab = document.createElement("div");

  tab.textContent = tabItems;
  tab.classList.add("tab");

  return tab;
}

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log(response);

    response.data.topics.forEach(item => {
      let tabs = createTab(item);
      topics.appendChild(tabs);
    });
  })

  .catch(error => {
    console.log("Error", error);
  });
