import { type FormEvent } from "react";

export default function NewGoal() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    new FormData(e.currentTarget);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>Your goal</label>
        <input id="goal" type="text" name="goal" />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" name="summary" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
