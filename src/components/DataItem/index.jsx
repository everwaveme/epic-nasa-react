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

      <div class="data-info">
        <p class="data-info-date">{outputDate}</p>
        <p class="data-info-desc">
          Это изображение было получено камерой EPIC (Earth Polychromatic Imaging Camera) с борта космического
          аппарата NOAA DSCOVR агентства NASA.
        </p>

        <ul class="data-info-list">
          <li class="data-info-item">
            <p class="data-info-title">
              Кватернионы
            </p>
            <p class="data-info-text">
              <span class="data-info-text-accent">q0: </span>
              {item.attitude_quaternions.q0}
            </p>
            <p class="data-info-text">
              <span class="data-info-text-accent">q1: </span>
              {item.attitude_quaternions.q1}
            </p>
            <p class="data-info-text">
              <span class="data-info-text-accent">q2: </span>
              {item.attitude_quaternions.q2}
            </p>
            <p class="data-info-text">
              <span class="data-info-text-accent">q3: </span>
              {item.attitude_quaternions.q3}
            </p>
          </li>

          <li class="data-info-item">
            <p class="data-info-title">
              Геоцентрические координаты
            </p>
            <p class="data-info-text">
              <span class="data-info-text-accent">широта: </span>
              {item.centroid_coordinates.lat}
            </p>
            <p class="data-info-text">
              <span class="data-info-text-accent">долгота: </span>
              {item.centroid_coordinates.lon}
            </p>
          </li>

          <li class="data-info-item">
            <p class="data-info-title">
              Позиция аппарата DSCOVR
            </p>
            <p class="data-info-text">
              <span class="data-info-text-accent">x: </span>
              {item.dscovr_j2000_position.x}
            </p>
            <p class="data-info-text">
              <span class="data-info-text-accent">y: </span>
              {item.dscovr_j2000_position.y}
            </p>
            <p class="data-info-text">
              <span class="data-info-text-accent">z: </span>
              {item.dscovr_j2000_position.z}
            </p>
          </li>

          <li class="data-info-item">
            <p class="data-info-title">
              Позиция Солнца
            </p>
            <p class="data-info-text">
              <span class="data-info-text-accent">x: </span>
              {item.sun_j2000_position.x}
            </p>
            <p class="data-info-text">
              <span class="data-info-text-accent">y: </span>
              {item.sun_j2000_position.y}
            </p>
            <p class="data-info-text">
              <span class="data-info-text-accent">z: </span>
              {item.sun_j2000_position.z}
            </p>
          </li>

          <li class="data-info-item">
            <p class="data-info-title">
              Расстояние аппарата DSCOVR до Земли
            </p>
            <p class="data-info-text">
              ~1 600 000 км
            </p>
          </li>

          <li class="data-info-item">
            <p class="data-info-title">
              Расстояние аппарата DSCOVR до Солнца
            </p>
            <p class="data-info-text">
              ~148 000 000 км
            </p>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default DataItem;