import { ChangeEvent, useEffect, useState } from "react";
import { Movie } from "./types/Movie";
import { Lista } from "./components/Lista";

const App = () => {
  const [movies, loadMovies] = useState<Movie[]>([]);
  const [error, showError] = useState(false);

  const bringMovies = async () => {
    try {
      let response = await fetch("https://api.b7web.com.br/cinema/");
      let json = await response.json();
      loadMovies(json);
    } catch (e) {
      showError(true);
    }
  };

  return (
    <div>
      <h1 style={{ color: "#fff" }}>Fazendo requisições no React.js</h1>
      <button onClick={bringMovies}>Carregar Filmes</button> <br />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {movies &&
          !error &&
          movies.map((movie, index) => (
            <Lista titulo={movie.titulo} avatar={movie.avatar} />
          ))}

        {error && (
          <h1 style={{ color: "#fff" }}>
            Aconteceu algum erro, tente novamente mais tarde
          </h1>
        )}
      </div>
    </div>
  );
};

export default App;
