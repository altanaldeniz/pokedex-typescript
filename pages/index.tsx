import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Pokemon } from '../typings';

type Props = {
  pokemon: Pokemon[];
};

export default function Home({ pokemon }: Props) {
  return (
    <div>
      <Layout title="Pokedex">
        <ul>
          {pokemon.map((item, index) => (
            <li key={index}>
              <Link href={`/pokemon?id=${index + 1}`}>
                <div className="border-gray my-2 flex cursor-pointer items-center rounded-md border bg-gray-200 p-4 text-lg capitalize">
                  <img
                    className="mr-3 h-20 w-20"
                    src={item.image}
                    alt={item.name}
                  />
                  <span className="mr-2">
                    {index + 1}. {item.name}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
    const data = await res.json();
    const pokemon = data.results.map((result: object, index: number) => {
      const paddedId = ('00' + (index + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
      return {
        ...result,
        image,
      };
    });
    return {
      props: { pokemon },
    };
  } catch (err) {
    console.error(err);
    return { notFound: true };
  }
};
