import DataItem from "../DataItem";

function DataList({ data, date }) {
  const urlDate = date.slice(0, 10).split('-').join('/');
  const outputDate = date.slice(0, 10).split('-').reverse().join('-');

  return (
    <ul className="data-list">
      {data.map(item => {
        return (
          <DataItem urlDate={urlDate} outputDate={outputDate} item={item} />
        );
      })}
    </ul>
  );
}

export default DataList;