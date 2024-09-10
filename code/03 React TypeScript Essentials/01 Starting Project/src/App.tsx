import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import { CourseGoal } from "./types";
import CourseGoalList from "./components/CourseGoalList";

export default function App() {
  const [courseGoals, setCourseGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setCourseGoals((prevCourseGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Finish the course",
        description: "Learn everything about React and TypeScript",
      };
      return [...prevCourseGoals, newGoal];
    });
    console.log(courseGoals);
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add New Goal</button>
      <CourseGoalList courseGoals={courseGoals} />
    </main>
  );
}
