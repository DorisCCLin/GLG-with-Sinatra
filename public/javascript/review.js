

var person = document.getElementById('person');
var email = document.getElementById('email');
var submit = document.getElementById('submit');
var writer = document.getElementById('writer');
var content = document.getElementById('content');
var comments = document.getElementById('comments');
var line = document.getElementById('line');
var date = document.getElementById('date');

submit.addEventListener('click', function(){
	post()
})

function post(){
	var title = document.createElement('p')
	var auth= document.createTextNode(person.value)
	
    title.appendChild(auth);
    writer.appendChild(title);
	var  para = document.createElement('p')
	var  text= document.createTextNode(comments.value)
    para.appendChild(text);
    content.appendChild(para);
    var current = new Date()
    var time = document.createTextNode("0" + current.toLocaleDateString())
    date.appendChild(time);
    var  hr = document.createElement('hr')
    line.appendChild(hr);
}
