import { CourseGoal as Goal } from "../types";
import CourseGoal from "./CourseGoal";

interface CourseGoalListProps {
  courseGoals: Goal[];
}

export default function CourseGoalList({ courseGoals }: CourseGoalListProps) {
  return (
    <ul>
      {courseGoals.map((goal) => (
        <li>
          <CourseGoal key={goal.id} title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
