import React from "react";
import Form from "./tutorialComponents/Form";
import Post from "./tutorialComponents/Posts";
import List from "./tutorialComponents/List";
import Dice from "./diceComponents/Dice"
import StandardDice from "./diceComponents/StandardDice"

const App = () => (
  <>
    <div>
      <h2>Dice Bag</h2>
      <h3>Standard Dice Set</h3>
      <StandardDice />
      <h3>Custom Dice</h3>
      <Dice />
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form />
    </div>
    <div>
      <h2>List</h2>
      <List />
    </div>
    <div>
      <h2>API posts</h2>
      <Post />
    </div>
  </>
);
export default App;