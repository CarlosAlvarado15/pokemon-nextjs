import CardPokemon from "@/components/CardPokemon";

async function getData(url) {
  const response = await fetch(url);
  const data = response.json();
  return data;
}

export default async function Home() {
  const data = await getData("https://pokeapi.co/api/v2/pokemon?limit=15");
  const firtData = data.results;

  return (
    <div id="contenedor">
      <h1 style={{ color: "white", fontSize: "60px" }}>Poke-dex</h1>
      <div>
        {firtData.map((el, index) => (
          <CardPokemon key={index} url={el.url} />
        ))}
      </div>
    </div>
  );
}

/*import Link from "next/link";

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

async function CardPokemon({ url }) {
  import Link from "next/link";

  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

async function CardPokemon({ url }) {
  const dataPokemon = await getData(url);
  const imagePokemon = dataPokemon.sprites.front_default;
  // console.log();

  return (
    <Link href={`info/${dataPokemon.id}`}>
      <div className="cardPokemon cjas">
        <div>
          <img src={imagePokemon} alt="Spiderman" />
        </div>
        <h1>{dataPokemon.name}</h1>
        <p>{dataPokemon.id}</p>
      </div>
    </Link>
  );
}

export default CardPokemon;
const dataPokemon = await getData(url);
  const imagePokemon = dataPokemon.sprites.front_default;
  // console.log();

  return (
    <Link href={`info/${dataPokemon.id}`}>
      <div className="cardPokemon cjas">
        <div>
          <img src={imagePokemon} alt="Spiderman" />
        </div>
        <h1>{dataPokemon.name}</h1>
        <p>{dataPokemon.id}</p>
      </div>
    </Link>
  );
}
*/
