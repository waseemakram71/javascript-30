const jokeContainer = document.getElementById('joke_container');
const jokeBtn = document.getElementById('joke_btn');

const API_URL = 'https://icanhazdadjoke.com/';
async function getJoke(){
const res = await fetch(API_URL,{
headers: {
  'Accept': 'application/json'
}
});
const date = await res.json();
jokeContainer.innerHTML = date.joke;
};
jokeBtn.addEventListener('click',getJoke);