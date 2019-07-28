# Elm Ports and Flags

This repository is a simple [Elm](https://elm-lang.org) (0.19) minimal app making use of Flags and Ports to communicate with Javascript.

The repository is composed of 3 main things to see :

- The `sendStuff` port, which will send some test data to Javascript every time you press the button
- The `receiveStuff` port, which will periodically receive data from Javascript. It is javascript that triggers the port, and Elm will update its model every time it receives data.
- The `Flags` type alias, that is setup and is used by the `init` function to grab data from Javascript before the model is even generated.

**You can read the complete write-up about this example [here](https://lengrand.fr/a-short-introduction-to-ports-and-flags-in-elm)** and **[see a running example here](https://elm-ports.netlify.com/)**.
