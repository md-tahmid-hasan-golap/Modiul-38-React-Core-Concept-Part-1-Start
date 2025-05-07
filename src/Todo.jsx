export default function ToDo(props) {
  return (
    <div
      style={{
        backgroundColor: "yellowgreen",
        borderRadius: "5px",
        padding: "20px",
      }}
    >
      <li>Task : {props.task}</li>
    </div>
  );
}
