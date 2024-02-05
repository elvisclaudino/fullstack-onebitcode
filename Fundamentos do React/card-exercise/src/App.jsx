import Card from "./components/Card/card";
import starwars from "./assets/poster-sw.jpg";
import wsb from "./assets/poster-wsb.jpg";
import rotj from "./assets/poster-rotj.jpg";
import Button from "./components/Button/Index";

function App() {
  return (
    <div className="app">
      <h1>Exercicio 2</h1>
      <Button text="Olá" />
      <Card src={starwars} title="Pôster: Star Wars (1977)" />
      <Card src={wsb} title="Pôster: Empire Strikes Back (1980)" />
      <Card src={rotj} title="Pôster: Return of the Jedi (1983)" />
    </div>
  );
}

export default App;
