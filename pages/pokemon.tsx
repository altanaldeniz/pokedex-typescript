import { GetServerSideProps } from 'next';
import Layout from '../components/Layout';
import { PokemonDetail } from '../typings';

type Props = {
  pokemon: PokemonDetail;
};

export default function Pokemon({ pokemon }: Props) {
  return (
    <Layout title={pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}>
      <div>
        <h1 className="mb-2 text-center text-4xl capitalize">{pokemon.name}</h1>
        <img className="mx-auto" src={pokemon.image} alt={pokemon.name} />
        <span className="p-2">Weight: {pokemon.weight}</span>
        <span className="p-2">Height: {pokemon.height} </span>
        <h2 className="mt-6 mb-2 text-2xl">Types</h2>
        {pokemon.types.map((type, index) => (
          <p key={index}>{type.type.name}</p>
        ))}
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query.id;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await res.json();
    const paddedId = ('00' + id).slice(-3);
    pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
    return {
      props: { pokemon },
    };
  } catch (err) {
    console.error(err);
    return { notFound: true };
  }
};
