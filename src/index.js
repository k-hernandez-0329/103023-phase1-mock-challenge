// your code here

const cakesAPI = "http://localhost:3000/cakes";

const cakeName = document.getElementById('cake-name')
let cakeDetails = document.getElementById('cake-details')



fetch(cakesAPI)
.then(res => res.json())
.then(cakes => {
    cakeDetails = cakes;
    renderCakes(cakeDetails)
})




function renderCakes(dessert){
    const cakeReview = document.createElement('li');
    cakeReview.classList.add('cakes');
    cakeDetails.append(cakeReview);

    cakeReview.innerHTML =`
    <h2> ${dessert.name}</h2>
    <img src="${dessert.image_URL}" />
    <p> ${description}</p>

    `;
    
}

function renderCakes(cakes){
    cakeReview.innerHTML = '';
    cakes.forEach(renderCakes);
  }