import "./main.css";
import { Elm } from "./Main.elm";
import registerServiceWorker from "./registerServiceWorker";

let counter = 1;

const app = Elm.Main.init({
  node: document.getElementById("root"),
  flags: counter
});

app.ports.sendStuff.subscribe(data => {
  console.log(JSON.stringify(data));
});

setInterval(() => {
  counter += 1;
  console.log(JSON.stringify(counter));
  app.ports.receiveStuff.send({ value: counter });
}, 1000);

registerServiceWorker();
