//event

//1. access the html element at which we want to add some event listener
//2. .addEventListener(event_name, function_Name);  note - event_name around '' and only function name donot call
function alertShow(){
    alert("You have clicked on button just now");
}
document.getElementById('btn').addEventListener('click',alertShow);
//another way  we can also add event listener on html element by giving attribute onclick = function to html tag
function sayHello(){
    alert("hello using the onclick attribute from say hello function");
}


//IMP -- event.preventDefault() - used to prevent from reloadation of page