import Btn from "../com/Btn";

function App() {
  return (
    <div className="App">
      <div>
        <h1>ポケモン図鑑でパートナーを見つけよう</h1>

        <div className="btn-wrap">
          <h1 className="btn-title">
            <div>Get</div>
            <div>Start</div>
          </h1>
          <Btn href={`/monster`} allow={"→"}></Btn>
        </div>
      </div>
    </div>
  );
}

export default App;
