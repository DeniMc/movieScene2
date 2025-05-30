import Card from "./Card";

export default function Results({ results }) {
    return (
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto bg-[var(--accent-medium)] text-[var(--primary-dark)] py-4 ">
        {results && results.length > 0 ? (
          results.map((result) => (
            <Card key={result.id} result={result} />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    );
  }