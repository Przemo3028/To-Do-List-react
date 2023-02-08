import React, { useState } from "react";
import Buttons from "./Buttons";
import Form from "./Form";
import Header from "./Header";
import List from "./List";
import Main from "./Main";
import Section from "./Section";

function App() {
  const [hideDoneTasks, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Zjeść obiad", done: false },
    { id: 2, content: "Przerobić listę na React.js", done: true },

  ]);

  const toggleHideDone = () => {
    setHideDone(hideDoneTasks => !hideDoneTasks);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }))
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })))
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      }
    ])
  }

  return (
    <Main>

      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <List
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
        extraContent={
          <Buttons
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />}
      />

    </Main>

  );
}

export default App;
