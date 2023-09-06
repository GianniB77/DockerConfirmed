import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {

  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    // Faites une requête GET à l'API
    axios.get('http://localhost:5000/piece')
      .then((response) => {
        // Mettez à jour le state avec les données de l'API        
        setData(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, []);

  return (
    <div>
      <h1>Les animes que j'ai vu :</h1>
      <ul>
        
        {data.map((item: any) => (
          <li key={item._id}>{item.nom}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
