import { useState, useEffect } from "react";
import axios from "axios";
import { apiKey } from "../../apiKey";
import DataList from "../DataList";


function Main() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const url = 'https://api.nasa.gov/EPIC/api/natural/?api_key=';
  

  console.log(data);


  useEffect(() => {
    axios.get(url + apiKey)
      .then(response => {
        if (response.status === 200) {
          setData(response.data);
          setDate(response.data[0].date);
          setIsLoading(false);
        }
        //сделать проброс и отлов ошибок
      })
  }, [])


  //пробросить даты в DataItem
  return (
    <div className="main">
      <div className="container">

        {isLoading ? (
          <p className="data-loading">📡 Загрузка данных со спутника...</p>
        ) : (
          <DataList data={data} date={date}/>
        )}

      </div>
    </div>
  );
}

export default Main;