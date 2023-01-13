import React from "react";
import Buttons from "./Buttons";
import Form from "./Form";
import Header from "./Header";
import List from "./List";
import Main from "./Main";
import Section from "./Section";


const tasks = [
  { id: 1, content: "Zjeść obiad", done: true },
  { id: 2, content: "Przerobić listę na React'ową", done: false },

];

const hideDoneTasks = false;

function App() {
  return (
    <Main>

      <body className="body">

        <Header
          title="Lista zadań"
        />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />
        <Section
          title="Lista zadań"
          body={<List tasks={tasks} hideDoneTasks={hideDoneTasks} />}
          extraContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        />

      </body>

    </Main>

  );
}

export default App;
