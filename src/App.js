import { useEffect, useState } from "react";
import BEES from "./components/BEES";
import "./styles.css";
import getData from "./utils/utils";

export default function App() {
  const [bees, setBees] = useState([]);

  /* Generally we get such data from backend, 
  so just to create that effect, data is wrapped 
  inside a promise and same is being called using useEffect */

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setBees(data);
      } catch (e) {
        console.log(e.name, e.message);
      }
    }
    fetchData();
  }, []);

  const resetHandler = () => {
    setBees(
      bees.map((bee) => {
        return { ...bee, health: 100 };
      })
    );
  };

  return (
    <div className="App">
      {bees.length === 0 && <p>Loading!!!</p>}
      {bees.length > 0 &&
        bees.map(({ id, name, health, url }) => {
          return (
            <BEES
              key={id}
              id={id}
              name={name}
              health={health}
              setBees={setBees}
              url={url}
            />
          );
        })}
      {bees.length > 0 && (
        <button onClick={resetHandler}>Reset Bee Health</button>
      )}
    </div>
  );
}
