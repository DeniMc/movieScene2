import Results from "@/components/Results";
import SearchBox from "@/components/SearchBox";
import { Suspense } from "react";


const API_KEY = process.env.API_KEY;
 
 export default async function Home({searchParams}) {
  const genre = searchParams.genre || 'fetchTrending';
    const res = await fetch(
      `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`,
    {next: { revalidate: 10000 }}
);
const data = await res.json()
if (!res.ok){
  throw new Error('Failed to fetch data')
}
const results = data.results;

  
   return (
       <div className="bg-[var(--accent-medium)] text-[var(--primary-dark)]">
      {/* ✅ Suspense for client-side search */}
      <Suspense fallback={null}>
        <SearchBox />
      </Suspense>

      <Results results={results} />
    </div>
    )
 }
 
 