import Btn from "./com/Btn";

function App() {
  return (
    <div className="App">
      <h1>ポケモン図鑑でパートナーを見つけよう</h1>
      <Btn href={`/monster`}></Btn>
    </div>
  );
}

export default App;
