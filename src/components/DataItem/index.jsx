

function DataItem({ urlDate, outputDate, item }) {
  const linkImg = `https://epic.gsfc.nasa.gov/archive/natural/${urlDate}/png/${item.image}.png`;
  const mainImg = `https://epic.gsfc.nasa.gov/archive/natural/${urlDate}/jpg/${item.image}.jpg`;

  return (
    <li key={item.identifier} className="data-item">
      <div class="data-pic">
        <a href={linkImg} className="data-pic-link" target="_blank">
          <img src={mainImg} alt="Земля из космоса" className="data-img" />
        </a>
      </div>
    </li>
  );
}

export default DataItem;