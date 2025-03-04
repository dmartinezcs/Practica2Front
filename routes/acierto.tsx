export default function Home() {
    console.log("Esto se está ejecutando en el servidor");
    return (
      <div>
        ¡Felicidades! Has acertado<br/>
        la pregunta
        <br/>
        <button onClick={"location.href='http://localhost:8000/trivia';"} >
            Volver a jugar
      </button>
      </div>
    );
  }
  