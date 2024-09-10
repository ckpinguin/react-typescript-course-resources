import React from "react"

interface CourseGoalProps {
  title: string
  children: React.ReactNode
}

export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>DELETE</button>
    </article>
  )
}
