export default function Home() {
    console.log("Esto se está ejecutando en el servidor");
    return (
      <div>
        Has fallado la pregunta <br/>   
  
        <button onClick={"location.href='http://localhost:8000/trivia';"} >
            Volver a jugar
      </button>
      </div>
    );
  }
  