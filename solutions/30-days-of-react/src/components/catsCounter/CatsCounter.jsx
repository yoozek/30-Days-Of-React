import Axios from "axios";
import React, { useEffect, useState } from "react";

export default function CatsCounter() {
  const catsBreedApiUrl = "https://api.thecatapi.com/v1/breeds";

  const [catsData, setCatsData] = useState({ cats: [] });

  useEffect(() => {
    fetchCatsFromApi();
  }, []);

  const fetchCatsFromApi = async function () {
    const response = await Axios.get(catsBreedApiUrl);
    const data = await response.data;

    setCatsData({
      cats: data,
      breedCount: data.length,
      avgWeight: calculateAvg(data.map((x) => x.weight.metric.split(" - "))),
      avgLifetime: calculateAvg(data.map((x) => x.life_span.split(" - "))),
    });
  };

  return (
    <div>
      <h1>30 days of react</h1>
      <h3>Cats paradise</h3>
      <p>There are {catsData.breedCount} cat breeds</p>
      <p>
        On average cat can weight about {catsData.avgWeight} and live{" "}
        {catsData.avgLifetime} years
      </p>
      <div className="catsWrapper">
        {catsData.cats.map((cat) => <CatCard cat={cat} />)}
      </div>
    </div>
  );
}

const CatCard = (props) => {
  const cat = props.cat;

  return (
    <div class="cat-card">
      {/* <div class="cat-card-image">
        <img src={cat.img} loading="lazy" alt="Abyssinian" />
      </div> */}
      <div class="cat-card-body">
        <div>
          <h1 class="cat-name">{cat.name}</h1>
          <p class="cat-origin">
            <strong>{cat.origin}</strong>
          </p>
        </div>
        <div class="cat-attributes">
          <p>
            <span>Temperament:</span> {cat.temperament}
          </p>
          <p>
            <span>Life Span:</span> {cat.life_span} years
          </p>
          <p>
            <span>Weight:</span> {cat.weight.metric} Kg
          </p>
        </div>
        <div class="cat-desc">
          <p>
            <span>Description</span>
          </p>
          <p>
            {cat.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const calculateAvg = (data) =>
  data
    .map((x) => (Number(x[0]) + Number(x[1])) / 2)
    .reduce((total, amount, index, array) => {
      total += amount;
      if (index === array.length - 1) {
        return (total / array.length).toFixed(2);
      } else {
        return total;
      }
    });
