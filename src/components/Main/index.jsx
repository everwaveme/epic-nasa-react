import { useState, useEffect } from "react";
import axios from "axios";
import { apiKey } from "../../apiKey";
import DataList from "../DataList";

function Main() {
  const url = 'https://api.nasa.gov/EPIC/api/natural/?api_key=';
  
  const [data, setData] = useState([]);
  const [date, setDate] = useState('');
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className="main">
      <div className="container">
        {!isLoading ? (
          <>
            <DataList data={data} date={date} />
          </>
        ) : (
          <p className="data-loading">
            📡 Загрузка данных со спутника...
          </p>
        )}
      </div>
    </div>
  );
}

export default Main;