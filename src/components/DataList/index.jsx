import { useState, useEffect } from "react";
import axios from "axios";
import { apiKey } from "../../apiKey";
import DataItem from "../DataItem";



function DataList() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const url = 'https://api.nasa.gov/EPIC/api/natural/?api_key=';
  const urlDate = date.slice(0, 10).split('-').join('/');
  const outputDate = date.slice(0, 10).split('-').reverse().join('-');

  console.log(outputDate);



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
    <div className="data">
      <div className="container">
        <ul className="data-list">
          {isLoading ? (
            <p>Загрузка данных с сервера...</p>
          ) : (
            data.map(item => <DataItem date={date} item={item} />)
          )}
        </ul>
      </div>
    </div>
  );
}

export default DataList;