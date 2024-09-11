import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import { CourseGoal } from "./types";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export default function App() {
  const [courseGoals, setCourseGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(title: string, description: string) {
    setCourseGoals((prevCourseGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title,
        description,
      };
      return [...prevCourseGoals, newGoal];
    });
    console.log(courseGoals);
  }

  function handleDeleteGoal(id: number) {
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList
        courseGoals={courseGoals}
        onDeleteGoal={handleDeleteGoal}
      />
    </main>
  );
}
