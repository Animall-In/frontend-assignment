import './App.css';
import { getCoordinate } from './utils/checkCoordinatesDistance';
import {useEffect, useState} from 'react';

import Post from './Post';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    async function renderElements(){
      axios.get('https://animall-backend-assesment.herokuapp.com/data')
      .then(res => {
        console.log(typeof(res.data.data[0].animalType));
        const newData = res.data.data;
        setData(newData);
      })
    }
    renderElements();
    getCoordinate();
  },[])
  return (
    <div className="App">
        <div className="App-header">
            <img src="https://static-assets.animall.in/static/images/animall-logo-2021.png" alt="Animall" width="147" height="51"/>
        </div>
        <div className="holder">
            {data.map((post,index) => {
                return (<Post key={index} data={post} />)
            })
            }
        </div>
    </div>
  );
}

export default App;
