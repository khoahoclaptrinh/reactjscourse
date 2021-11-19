import faker from "faker";

function App() {
  const person = {
    id: 1,
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  };

  return <div>create a new component </div>;
}

export default App;
