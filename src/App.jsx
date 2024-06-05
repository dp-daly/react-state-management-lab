import { useState } from 'react'
import './App.css'

const App = () => {

  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);

  function handleAddFighter(index) {
    //Get selectedFighter
    let selectedFighter = zombieFighters[index];
    //Deduct price from money
    let latestFunds = money - selectedFighter.price
    //Condition
    if (latestFunds < 0) {
      console.log("Insufficient funds")
      return
    } else {
    //Clone team state array
    const newTeam = structuredClone(team);
    //Push the index of the chosen fighter to that array
    newTeam.push(selectedFighter);
    //Set
    setMoney(latestFunds);
    setTeam(newTeam);
    }
  }

  return (
    <>
    <h1>Zombie Fighters</h1>
    <h3>Money: {money}</h3>
    <h3>Team Strength: </h3>
    <h3>Team Agility: </h3>
    <h3>Team:</h3>
    {team.map((member, index) => {
      return <li key={index}>{member.name}</li>
    })}
    <h3>Fighters:</h3>
    <ul>
      {zombieFighters.map((fighter, index) => {
        return (
        <div key={index}>
        <li><img src={fighter.img}/></li>
        <li><b>{fighter.name}</b></li>
        <li>{fighter.price}</li>
        <li>{fighter.strength}</li>
        <li>{fighter.agility}</li>
        <button onClick={() => handleAddFighter(index)}>Add</button>
        </div>
        )
      })}
    </ul>
    </>
  );
}

export default App

