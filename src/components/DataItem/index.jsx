function DataItem({ urlDate, outputDate, item }) {

  const linkImg = `https://epic.gsfc.nasa.gov/archive/natural/${urlDate}/png/${item.image}.png`;
  const mainImg = `https://epic.gsfc.nasa.gov/archive/natural/${urlDate}/jpg/${item.image}.jpg`;

  return (
    <li className="data-item">
      <div className="data-pic">
        <a href={linkImg} className="data-pic-link" target="_blank">
          <img src={mainImg} alt="Земля из космоса" className="data-img" />
        </a>
      </div>

      <div className="data-info">
        <p className="data-info-date">{outputDate}</p>
        <p className="data-info-desc">
          Это изображение было получено камерой EPIC (Earth Polychromatic Imaging Camera) с борта космического
          аппарата NOAA DSCOVR агентства NASA.
        </p>

        <ul className="data-info-list">
          <li className="data-info-item">
            <p className="data-info-title">
              Кватернионы
            </p>
            <p className="data-info-text">
              <span className="data-info-text-accent">q0: </span>
              {item.attitude_quaternions.q0}
            </p>
            <p className="data-info-text">
              <span className="data-info-text-accent">q1: </span>
              {item.attitude_quaternions.q1}
            </p>
            <p className="data-info-text">
              <span className="data-info-text-accent">q2: </span>
              {item.attitude_quaternions.q2}
            </p>
            <p className="data-info-text">
              <span className="data-info-text-accent">q3: </span>
              {item.attitude_quaternions.q3}
            </p>
          </li>

          <li className="data-info-item">
            <p className="data-info-title">
              Геоцентрические координаты
            </p>
            <p className="data-info-text">
              <span className="data-info-text-accent">широта: </span>
              {item.centroid_coordinates.lat}
            </p>
            <p className="data-info-text">
              <span className="data-info-text-accent">долгота: </span>
              {item.centroid_coordinates.lon}
            </p>
          </li>

          <li className="data-info-item">
            <p className="data-info-title">
              Позиция аппарата DSCOVR
            </p>
            <p className="data-info-text">
              <span className="data-info-text-accent">x: </span>
              {item.dscovr_j2000_position.x}
            </p>
            <p className="data-info-text">
              <span className="data-info-text-accent">y: </span>
              {item.dscovr_j2000_position.y}
            </p>
            <p className="data-info-text">
              <span className="data-info-text-accent">z: </span>
              {item.dscovr_j2000_position.z}
            </p>
          </li>

          <li className="data-info-item">
            <p className="data-info-title">
              Позиция Солнца
            </p>
            <p className="data-info-text">
              <span className="data-info-text-accent">x: </span>
              {item.sun_j2000_position.x}
            </p>
            <p className="data-info-text">
              <span className="data-info-text-accent">y: </span>
              {item.sun_j2000_position.y}
            </p>
            <p className="data-info-text">
              <span className="data-info-text-accent">z: </span>
              {item.sun_j2000_position.z}
            </p>
          </li>

          <li className="data-info-item">
            <p className="data-info-title">
              Расстояние аппарата DSCOVR до Земли
            </p>
            <p className="data-info-text">
              ~1 600 000 км
            </p>
          </li>

          <li className="data-info-item">
            <p className="data-info-title">
              Расстояние аппарата DSCOVR до Солнца
            </p>
            <p className="data-info-text">
              ~148 000 000 км
            </p>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default DataItem;