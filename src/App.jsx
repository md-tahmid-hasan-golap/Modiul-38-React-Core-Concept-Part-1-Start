import "./App.css";
import ToDo from "./Todo";
import Actor from "./Actor";

function App() {
  const actors = ["shakib", "manna", "riyaj", "sabnur"];
  return (
    <>
      {actors.map((actor) => (
        <Actor actor={actor}></Actor>
      ))}
      <h1>React core concept</h1>

      <ToDo task="Learn react"></ToDo>
      {/* 
      <Developer name="Golap" lang="python"></Developer>
      <Developer name="Shafayat" lang="js"></Developer>
      <Developer name="Abir" lang="c++"></Developer>
      <Player player="Shakib Al" runs="11"></Player>
      <Player player="Masrafi bin" runs="21"></Player>
      <Salami resion="Eid" ammount="2000"></Salami>
      <Salami resion="Exam" ammount="3000"></Salami>
      <Salami resion="Bidai" ammount="1000"></Salami> */}
    </>
  );
}

function Salami({ resion, ammount }) {
  return (
    <div className="students">
      <h2>Salami For : {resion}</h2>
      <p>Ammount : {ammount}</p>
    </div>
  );
}
function Player(props) {
  console.log(props);
  return (
    <div className="students">
      <h3>Name : {props.player} </h3>
      <p>Runs : {props.runs}</p>
    </div>
  );
}
function Person() {
  const age = 21;
  return <p>I am a person {age}</p>;
}

function Developer(props) {
  console.log(props);
  return (
    <div
      style={{
        border: "2px solid blue",
        borderRadius: "10px",
        marginTop: "10px",
      }}
    >
      <p>Developer : {props.name}</p>
      <p>Technologhy : {props.lang}</p>
    </div>
  );
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
