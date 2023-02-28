// topics - 1. access html elements(via tagName, className and Id name)    2. accessing & manipulate the content of html element (using textContent, innerHTML)
//3. create an html element by js and add to doucment using js at the end or b/w
//4. accesing the class of an html element using js[classList] and add the class to it [.classList.add('class_name')]
//5. styling the html elements using js

//***************************************************** */
// Dom methods to accesing the html elements

// 1. Get Html elements using tag name (means <tag> content </tag>)
let elementsP = document.getElementsByTagName('p');  
// this method will return an array consisting all the html paragraph elements
console.log(elementsP);  // console an array of all p html elements
console.log(elementsP[0]);   // console first index p element <p class="para1">This is paragraph1</p>(whole element)

let queryP = document.querySelectorAll('p'); // return an array of all p html elements
console.log(queryP);

console.log(document.querySelector('p'));  // this return an first occurence of p html element in html document.


//2. Get Html elements using class name
console.log(document.getElementsByClassName('para1')); // this method also return an array of all that html elements whose class name is para1
console.log(document.querySelectorAll('[class = "para1"]'));  // also returns an array of of all that html elements whose class name is para1
// another way to use querySelector
console.log(document.querySelectorAll('.para1')); // same as above but syntax is easy
console.log(document.querySelector('.para1'));  // this return a html element with class para1 with first occurence in whole html doucment


//3. Get html elements using Id name
console.log(document.getElementById('head2'));  // get a html element with id head 2 returns a single element
console.log(document.querySelector('#head2'));  // this returns a single element with id head2

// Note- syntax for queryselector -  doucment.querySelector('selector'); for class- .className , id - .idName , tag- 'tagName'  (same for querySelectorAll also)

//************************************************* */
//ACCESSING THE CONTENT OF HTML ELEMENT MEANS TEXT AROUND THE TAG
//1. first access the html element
//2. THEN USE .textContent property or 
 
console.log(document.getElementById('head2').textContent);  // returns the textcontent which is this is heading 2
console.log(document.getElementById('head2').innerText);    // do same but not good to use

/*<div class="div2">
        <p class="para1">para1</p>
        <a href="#" class="anchor-1">anchor tag</a>
    </div>
// for this example we want to access the content of div2 class then
 content is <p class="para1"></p>
    <a href="#" class="anchor-1">anchor tag</a>
    but if we usee textContent it will return -->  \n para1 \n anchor tag \n but not the whole content 
    it means text content only returns the text not whole element
    for this we use innerHTML property
*/

console.log(document.getElementsByClassName('div2')[0].innerHTML); // here we use [0] becuase we want to access div with class 1 but it will return an array with [div.class1] so tha'ts why

//*************************************************************** */
//WE CAN MANIPULATE/CHANGE CONTENT AFTER ACCESSING THE CONTENT OF PARTICULAR HTML ELEMENT

document.getElementById('head2').textContent= 'changed content';
document.getElementsByClassName('div2')[0].innerHTML = '<p id="changed">heyyy</p> <span>hello span </span> ';  // here I remove all the html elements inside div2 and make a new html element with content hey
// we can add many html element as we want
// note -- textContent - returns only text not element (if it is there then also not return html element)
//         innerHTML - returns whole html element with content


//*************************************************************** */
//CREATE AN HTML ELEMENT USING DOM 
let anchor = document.createElement('a');  // creates a anchor tag with <a></a> [no content simple anchor tag]
//SET VALUE FOR HTML ELEMENT
anchor.textContent = "hello new created anchor tag by dom";  // now anchor variable = <a>hello new created anchor tag by dom</a>
// but note it only created by dom not added on the web page or html document

// ***we can SET THE ATTRIBUTE to the html element let say we want anchor tag have attribute target = _blank 
anchor.setAttribute("target" , "_blank");
console.log(anchor);//<a target="_blank">hello new created anchor tag by dom</a>


// ADD HTML ELEMENT TO THE HTML DOCUMENT --- add using .appendChild(htmlelement); property
//1. access html element parent where you want to add this new html element as a child element
//2. then  parentElemnt.appendChild(NewHtmlElement);
// it add element as a child and it add to the end of the parent (means as a last child)
document.getElementsByTagName('body')[0].appendChild(anchor);

// create new element and ADD ELEMENT AT B/W THE ELEMENTS (added using insertBefore() function (it is applied to parent function))
//syntax -   parent_element.insertBefore(created_element,child_element (at_before_youwanted to add));
let span = document.createElement('span');    // created a span element [ <span></span>]
span.textContent = "I am a span inserted using insertBefore function";             //<span>I am a span</span>
let parent = document.getElementById('parent');  // accessed the parent element to add the span child element at between
let childElement = document.getElementById('divAdd');  // it will acces that element at before I want to add new element
 
parent.insertBefore(span,childElement);    //childElement - It is that element at before I wanted to add new element
//span - new created element        // parent - It is that element which is child of span and childElement



//ACCESSING CLASS OF AN HTML ELEMENT USING DOM
//1. Access an html element where you want to add the class 
//2. then use .classList property to get all the class it has
//3. then .add('newClassName') method to add
console.log(document.getElementById('head2').classList);

//ADDING CLASS TO AN HTML BY ACCESSING IT
document.getElementsByClassName('head1')[0].classList.add('addedClass'); // this will added the class = "head1 addedClass" to an html element with head1 class (now it has two classes)
document.getElementById('head2').classList.add('add'); // this will find a html element with id= head2 and add the class ="add" to it



// ************************************************************************************
//CHANGE CSS WITH THE HELP OF DOM 
//1. access the html element that you want to style
//2. .style.color dom property and set the value for it

document.getElementById('head2').style.color='red';
document.getElementsByClassName('head1')[0].style.color='rgb(1,102,102)';
document.getElementsByClassName('para1')[0].style.fontSize = '40px';


// Accesing the html elements attributes
//syntax   document.getElementById('id').attribtueName
let buttonTurnOn = document.getElementById('turnOn');
let bulbImg = document.getElementById('myImage');
console.log(bulbImg.src);      // accesing the img attribute 
buttonTurnOn.addEventListener('click' , function (){    // adding event listener on button
    bulbImg.src="https://www.w3schools.com/js/pic_bulbon.gif";   // maniputlating the scr atttriubte of img
})


let buttonTurnOff = document.getElementById('turnOff');
buttonTurnOff.addEventListener('click' , function(){
    bulbImg.src = 'https://www.w3schools.com/js/pic_bulboff.gif';
})
