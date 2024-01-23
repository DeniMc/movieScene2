export default function Results({ results }) {
    return (
      <div>
        {results && results.length > 0 ? (
          results.map((result) => (
            <div key={result.id}>
              <h2>{result.original_title}</h2>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    );
  }