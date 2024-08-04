import { getServerSession } from "next-auth";
import Login from "@/components/Login";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import requests from "@/utils/request"; // Adjust the path as necessary
import Hero from "@/components/Hero";
import Row from "@/components/Row";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) return <Login />;

  // Fetch data from the API endpoints
  const [
    trending,
    moviePosters,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchMoviePosters).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return (
    <>
      <main className="relative bg-gradient-to-b from-gray-900/10 to-[#010511]">
        <Hero moviePosters={moviePosters} />
        <section className="container pb-32">
          <Row title="Trending Now" movies={trending.results} />
          <Row title="Top Rated" movies={topRated.results} />
          <Row title="Action Movies" movies={actionMovies.results} />
          <Row title="Comedy Movies" movies={comedyMovies.results} />
          <Row title="Horror Movies" movies={horrorMovies.results} />
          <Row title="Romance Movies" movies={romanceMovies.results} />
          <Row title="Documentaries" movies={documentaries.results} />
        </section>
      </main>
    </>
  );
}
