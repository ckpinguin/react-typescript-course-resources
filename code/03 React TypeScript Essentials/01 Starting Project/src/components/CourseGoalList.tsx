import { CourseGoal as Goal } from "../types";
import CourseGoal from "./CourseGoal";

interface CourseGoalListProps {
  courseGoals: Goal[];
  onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({
  courseGoals,
  onDeleteGoal,
}: CourseGoalListProps) {
  return (
    <ul>
      {courseGoals.map((goal) => (
        <li>
          <CourseGoal
            key={goal.id}
            id={goal.id}
            title={goal.title}
            onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
