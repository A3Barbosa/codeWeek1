
// Make a simple function called greet that returns the most-famous "hello world!".

function greet (){
  return 'hello world!' ; 
}

/*You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1. As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero. */

// did this with my classmates from vonds group and went over it with Erica again

function monkeyCount(n){
  let cage=[]
  for(let i= 1; i<=n; i++){
    cage.push(i)
  }
  return cage 
}

//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
// did this code with vonds in a group 
//https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript

function simpleMultiplication(num) {
  return num % 2 === 0 ? num * 8 : num * 9
}

function simpleMultiplication (num){
  if (num % 2 === 0){
  return num * 8
} else {
 return num * 9
}
}

/* It's a well known fact that anything Chuck Norris wants, he gets. As a result Chuck very rarely has to use the word false.

It is a less well known fact that if something is true, and Chuck doesn't want it to be, Chuck can scare the truth with his massive biceps, and it automatically becomes false.

Your task is to be more like Chuck (ha! good luck!). You must return false without ever actually using the word false...

Go show some truth who's boss! */

function ifChuckSaysSo(){
 return ! true
} 


//Complete the solution so that it reverses the string passed into it.
//'world'  =>  'dlrow'
//'word'   =>  'drow'
// worked on this with vonds and the group

function solution(str){
  return str.split('').reverse().join('')
}


