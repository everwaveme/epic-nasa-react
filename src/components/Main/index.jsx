import { useState, useEffect } from "react";
import axios from "axios";
import { apiKey } from "../../apiKey";
import DataList from "../DataList";

function Main() {
  const url = 'https://api.nasa.gov/EPIC/api/natural/?api_key=';

  const [data, setData] = useState([]);
  const [date, setDate] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios.get(url + apiKey)
      .then(response => {
        if (response.status === 200) {
          setData(response.data);
          setDate(response.data[0].date);
          setIsLoading(false);
        } else {
          throw new Error('Потеряли связь со спутником... Пожалуйста, обновите страницу 🤕')
        }
      })
      .catch(err => {
        setIsError(true);
        setErrorMessage(err.message);
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
          !isError ? (
            <p className="data-loading">
              👽 Загрузка данных со спутника...
            </p>
          ) : (
            <p className="data-error">
              {errorMessage}
            </p>
          )
        )}
      </div>
    </div>
  );
}

export default Main;