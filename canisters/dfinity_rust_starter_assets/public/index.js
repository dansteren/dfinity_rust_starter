import graphql from 'ic:canisters/graphql';

graphql.graphql_query(window.prompt("Enter your graphql query:")).then(response => {
  window.alert(response);
});
