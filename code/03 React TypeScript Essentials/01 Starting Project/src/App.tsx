import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

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
      <ul>
        {courseGoals.map((goal) => (
          <li>
            <CourseGoal key={goal.id} title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}
