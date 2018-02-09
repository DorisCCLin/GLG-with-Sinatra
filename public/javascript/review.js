
console.log('test')
var name = document.getElementById('name');
var submit = document.getElementById('submit');
var content = document.getElementById('content');
var comments = document.getElementById('comments');

submit.addEventListener('click', function(){
	post()
})

function post(){
	var  para = document.createElement('p')
	var  text= document.createTextNode(comments.value)
    para.appendChild(text);
    content.appendChild(para);
    console.log(para)
}