
function increment()
{
    let countEl = document.getElementById("count-el");
    let count = countEl.innerHTML;
    count++;
    countEl.innerText = count;
}
function decrement()
{
    let countEl = document.getElementById("count-el");
    let count = countEl.innerHTML;
    count--;
    if(count < 0) count = 0;
    countEl.innerText = count;
}
