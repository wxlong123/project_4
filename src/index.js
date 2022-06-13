import $ from 'jquery'
import './css/index.css'
import a from './css/index.less'
import logo from './Image/logo.jpg'
consle.log(a);


$(".box").attr('src', logo)
$(function() {
    $("li:odd").css("background-color", "yellow")
    $("li:even").css("background-color", "blue");
})

function info(target) {
    target.info = "Person info"
}
@info
class Person {

}
console.log(Person.info);