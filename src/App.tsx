import Btn from "./com/Btn";

function App() {
  return (
    <div className="App">
      <div>
        <h1>ポケモン図鑑でパートナーを見つけよう</h1>
        <Btn href={`/monster`} text={"Get Start"}></Btn>
      </div>
    </div>
  );
}

export default App;
