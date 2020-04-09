import React, {useState, useEffect} from 'react';
import axios from 'axios'

export default function Home() {

    const [coins, setCoins] = useState([]);
    const id = localStorage.getItem('id')
    useEffect(() => {
        axios.get("http://localhost:3000/chain")
        .then(res => {
          console.log('resdata', res)
          console.log(id)
          setCoins(res.data)
        })
        .catch(err => console.log(err.response))
      }, []);



    return (
    <h2>Welcome {id}!!
        <p>Total Coins: {coins.length}</p>
        {/* <p>Transaction History: {coins.chain[1].transactions}</p> */}
    </h2>
    )

    // let data = "Learning how to write in a file."
  
    // fs.writeFile('Output.txt', data, (err) => { 
        
    //     if (err) throw err; 
    // }) 
}