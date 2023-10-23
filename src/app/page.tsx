import PetsTabel from "./components/petsTabel";

const dataFetch = async () => {
  const fetchData = await fetch("http://localhost:3000/api/pets", {
    next: { revalidate: 0 },
  });
  const data = await fetchData.json();
  return data;
};

export default async function Home() {
  let data = await dataFetch();
console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PetsTabel />
      {data.map((e: any, i: number) => {
        return (
          <>
            <h1 key={i}> {e.name}</h1> <h1 key={i}> {e.owner}</h1>
          </>
        );
      })}
    </main>
  );
}
