import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, isLoading, error } = useSWR(`/api/random-character`, fetcher);
  console.log(data);

  if (isLoading) {
    return "is Loading";
  }

  if (error || data === undefined) {
    return "error";
  }

  const { firstName, lastName, twitterName, geohash } = data;

  return (
    <>
      <h1>Hello from the other side...</h1>
      <div>
        {firstName}
        <br></br>
        {lastName}
        <br></br>
        {twitterName}
        <br></br>
        {geohash}
      </div>
    </>
  );
}
