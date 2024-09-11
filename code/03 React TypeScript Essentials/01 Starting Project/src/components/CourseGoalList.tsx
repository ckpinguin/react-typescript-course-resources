import { type ReactNode } from "react";
import { CourseGoal as Goal } from "../types";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

interface CourseGoalListProps {
  courseGoals: Goal[];
  onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({
  courseGoals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (courseGoals.length === 0) {
    return <InfoBox mode="hint">No goals found. Maybe add one?</InfoBox>;
  }

  let warningBox: ReactNode;

  if (courseGoals.length > 4) {
    warningBox = (
      <InfoBox mode="warning">
        You have a lot of goals. Don't pressure yourself too much.
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
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
    </>
  );
}
