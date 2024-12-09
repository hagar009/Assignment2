// Quote array
const quo = [
    `"Resentment is like drinking poison and waiting for your enemies to die".--Nelson Mandela`,
    `"Do not take life too seriously. You will not get out alive".--Elbert Hubbard`,
    `"It's not what happens to you, but how you react to it that matters".--Epictetus`,
    `"The best revenge is massive success".--Frank Sinatra`,
    `"You miss 100% of the shots you don't take".--Wayne Gretzky`
];

//
function Quotes(){
    // random index
    // math.floor() -- Output from m.random * q.length -- remove decimal num
    //m.random -- get decimal num
    // q.length -- The number of elements in array
    var findIndex = Math.floor(Math.random() * quo.length);

    // Split the selected quote into text and author
    var Quote = quo[findIndex].split(`--`);

      // Update the HTML content
      document.querySelector('#quoteOutput').innerHTML = `${Quote[0]}<br><em>-- ${Quote[1]}</em>`;


    
}