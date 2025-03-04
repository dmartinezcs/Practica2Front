
function log(){
  console.log("Clicked");
};
type Question = {
  category: "",
  question: "In the Broadway musical \"Cats,\" costumed actors romp around a set designed to look like a what?",
  answer: "Junkyard"
};


let answer="abab";
export default function Home() {
  console.log("Esto se está ejecutando en el servidor");

  try {
    const characters = await Axios.get<Data>(
      "https://rickandmortyapi.com/api/character",
    );


  return (
    
    <div class="Header">
      <h1>Trivia</h1>
      <br></br>
    <div class="Question">
      Aqui va la pregunta
        <br></br>
    <div class="Answer">
        <label for="myText"/>
        <input id="myText" type="text" style="background: transparent; outline: 0;"/>
        <br></br>
    <div class="Answer button">
        <button onclick="checkanswer();">Enviar</button>       
        <button onclick="log();"></button>
    </div>
    </div>
    </div>
    </div>
  );
} 

