import dfinity_rust_starter from 'ic:canisters/dfinity_rust_starter';

dfinity_rust_starter.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
