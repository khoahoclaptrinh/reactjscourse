const Person = (props) => {
  let person = props.personList;
  //let personCallBack = props.parentCallback;

  //console.log(props);
  const sendData = (person) => {
    props.parentCallback(person);
  };

  return (
    <li
      style={{
        border: "1px solid #000",
        marginBottom: "20px",
        width: "35%",
        textAlign: "center",
        listStyle: "none",
      }}
    >
      <p>Full name: {person.name}</p>
      <p>Full name: {person.email}</p>
      <p>
        <img
          src={person.avatar}
          alt={person.name}
          onClick={() => {
            sendData(person);
          }}
        />
      </p>
    </li>
  );
};

export default Person;
