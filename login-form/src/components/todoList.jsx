const Heading = (props) => {
  console.log(props);
  return <h1>{props.title}</h1>;
};

const List = () => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
};

const Summary = () => {
  return (
    <div>
      <p>Summary</p>
    </div>
  );
};
const TodoList = () => {
  return (
    <div>
      <Heading title="First Heading" />
      <Heading title="Second Heading" />
      <List />
      <Summary />
      <p>TodoList</p>
    </div>
  );
};

export default TodoList;
