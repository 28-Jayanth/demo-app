import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(false);
  const abc = "This is Jayanth";
  const d = "This is sowmya";
  const click = () => {
    setValue(!value);
  };
  return (
    <div className="App">
      {<h1 className={value ? "app-h1" : "app-h"}>{value ? abc : d}</h1>}
      <button id="button" onClick={click}>
        click
      </button>
      <table  className="tabl">
        <thead>
          <tr>
            <th>col 1</th>
            <th>col 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <tr>
                <td>
                  1
                </td>
                <td>
                  1.5
                </td>
              </tr>
            </td>
            <td>2</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
      <h1 style={{color:"red"}}>
      color
      </h1>
    </div>
  );
}

export default App;
