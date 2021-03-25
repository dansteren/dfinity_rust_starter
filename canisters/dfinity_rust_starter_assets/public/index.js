import greet from 'ic:canisters/greet';

greet.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
