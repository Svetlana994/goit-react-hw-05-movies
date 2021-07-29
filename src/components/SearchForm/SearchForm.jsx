import { Form, Input, Button } from "./SearchForm.styled";

function SearchForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formValue = e.target.elements.input.value;
    if (formValue.trim() === "") {
      return;
    }
    onSubmit(formValue);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="input"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <Button type="submit">Search</Button>
    </Form>
  );
}

export default SearchForm;
