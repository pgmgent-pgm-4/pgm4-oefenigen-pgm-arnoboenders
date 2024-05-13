import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_ALL_TODOS } from "./graphql/queries";

function App() {
  const { loading, error, data } = useQuery(GET_ALL_TODOS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);
  return (
    <div className="App">
      {data.todos.map((todo) => (
        <div>
          <h2>{todo.title}</h2>
          <p>id: {todo.id}</p>
          <p>date: {todo.completionDate}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
