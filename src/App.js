import { useEffect, useState } from 'react';
import BeerCard from "./BeerCard"
import './App.css';

function App() {

  const [beers, setBeers] = useState([])
  // useState is a React Hook. This hook will return two thins, the stateful value *variable* ,
  //  and a function to set that state *setSomething*

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers").then((response) => {
      return response.json()
    }).then((data) => {
      setBeers(data)
    })
  }, [])  // useEffect will help it to only run it once, not in a loop. the [] will 
  // useEffect is a react hook. This hook will enable us to use React Lifescycle methods, like in a class component
  // It is capable of doing a componentDidMount, componentDidUpdate, and a componentDidUnmount
  // It takes 2 arguments, a callback function *()=>{}*, and a dependency array *[]*
  // The dependecy Array, when empty, will run only once.
  // If we list a state variable inside the dependency array, then the component will update every time that state changes



  return (
    <div className="App">
      {beers.map((beer, index) => {
        return <BeerCard key={index} beerProps={beer} />
      })}
    </div>
  );
}

export default App;
