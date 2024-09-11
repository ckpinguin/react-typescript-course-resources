import Input from "./components/Input";
import Form, { type FormHandle } from "./components/Form";
import Button from "./components/Button";
import { useRef } from "react";

function App() {
  function handleSave(data: unknown) {
    const customForm = useRef<FormHandle>(null);

    const extractedData = data as { name: string; age: string }; // extracted form-values are always strings!
    console.log(extractedData);
    customForm.current?.clear();
  }
  return (
    <main>
      <Form onSave={handleSave}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
