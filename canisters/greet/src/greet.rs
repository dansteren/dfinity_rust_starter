// // Motoko equivalent
// actor {
//     public func greet(name : Text) : async Text {
//         return "Hello, " # name # "!";
//     };
// };

use ic_cdk_macros::query;

#[query]
async fn greet(name: String) -> String {
  return format!("Hello, {name}", name = name);
}
