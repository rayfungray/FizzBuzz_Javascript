document.title = "FizzBuzz";
var body = document.body;

var addContainer = document.createElement('div');
addContainer.classList.add('container');
body.appendChild(addContainer);


for(var i = 1; i < 101; i++){
var addDiv = document.createElement('div');
  addDiv.classList.add('circle');
  if (i % 15 === 0)
{
  addDiv.classList.add('FizzBuzz');
  addDiv.innerHTML = "FizzBuzz";
  
} else if (i % 5 === 0)
{
  addDiv.classList.add('buzz');
  addDiv.innerHTML = "Buzz";
  } else if (i % 3 === 0)
{
  addDiv.classList.add('Fizz');
  addDiv.innerHTML = "Fizz";
}
else
{
  addDiv.innerHTML = i;
}
// addDiv.style.backgroundColor="#19"+i+i;
console.log(addDiv);
addContainer.appendChild(addDiv);
}