import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data } = useSWR(`/api/random-character`, fetcher);
  console.log(data);

  return (
    <>
      <h1>Hello from the other side...</h1>
      <div>
        {data.firstName}
        <br></br>
        {data.lastName}
        <br></br>
        {data.twitterName}
        <br></br>
        {data.geohash}
      </div>
    </>
  );
}
