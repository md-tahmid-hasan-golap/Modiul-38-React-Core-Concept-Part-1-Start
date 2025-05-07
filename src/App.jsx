import "./App.css";

function App() {
  return (
    <>
      <h1>React core concept</h1>
      <Student></Student>
      <Student></Student>
    </>
  );
}

function Person() {
  const age = 21;
  return <p>I am a person {age}</p>;
}

function Student() {
  return (
    <div className="student">
      <p className="p">Name :</p>
      <p>Dept :</p>
    </div>
  );
}

function Sports() {
  const play = "Cricket";
  return (
    <div>
      <h3>{play}</h3>
      <p>Playing & losing</p>
    </div>
  );
}

export default App;
