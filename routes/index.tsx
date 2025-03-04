export default function Home() {
    console.log("Esto se está ejecutando en el servidor");
    return (
      <div>
        Go to trivia
        <br></br>
  
        <button onClick={"location.href='http://localhost:8000/trivia';"} >
        Start Trivia
        </button>
      </div>
    );
  } 
  