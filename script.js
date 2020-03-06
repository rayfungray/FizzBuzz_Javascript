document.title = "FizzBuzz";
var fizz = document.getElementsByTagName('body');

var addContainer = document.createElement('div');
addContainer.classList.add('container');
fizz[0].appendChild(addContainer);


for(var i = 1; i < 101; i++){
var addDiv = document.createElement('div');
  addDiv.classList.add('element');
  if (i % 15 === 0)
{
  addDiv.innerHTML = "FizzBuzz";
} else if (i % 5 === 0)
{
  addDiv.innerHTML = "Buzz";
  } else if (i % 3 === 0)
{
  addDiv.innerHTML = "Fizz";
}
else
{
  addDiv.innerHTML = i;
}

console.log(addDiv);
addContainer.appendChild(addDiv);
}