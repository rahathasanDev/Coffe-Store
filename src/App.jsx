import { useLoaderData } from "react-router-dom";
import CoffeCard from "./Components/CoffeCard";
import "./App.css";


function App() {
  const coffees = useLoaderData();
  return (
    <div className="m-20 ">
      <h1 className="text-6xl text-center font-bold font-serif ">
        Cold Coffes:{coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4 mt-5 ">
        {
          coffees.map(coffee => <CoffeCard
            key={coffee._id}
            coffee={coffee}></CoffeCard>)
        }
      </div>

    </div>
  )
}

export default App;
