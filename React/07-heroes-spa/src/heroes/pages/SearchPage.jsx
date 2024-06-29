import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import { getHeroesByName } from "../helpers";
import { HeroesCard } from "../components/HeroesCard";

export default function SearchPage() {
  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const { q = "" } = queryString.parse(location.search);
  // console.log(q);

  const heroes = getHeroesByName(q);
  // const showSearch = q.length === 0;
  // const showError = q.length > 0 && heroes.length === 0;

  const onSearchSubmit = (e) => {
    e.preventDefault();

    // if (searchText.trim() === "")  return

    navigate(`?q=${searchText}`);

    // console.log({ searchText });
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching...</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-info mt-2">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === "" ? (
            <div className="alert alert-primary">Search a Hero</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">
                No hero with <b>{q}</b>
              </div>
            )
          )}

          {heroes.map((hero) => (
            <HeroesCard key={hero.id} hero={hero} />
          ))}

          {/* <div
            className="alert alert-primary"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a Hero
          </div>

          <div
            className="alert alert-danger"
            style={{ display: showError ? "" : "none" }}
          >
            No hero with <b>{q}</b>
          </div> */}
        </div>
      </div>
    </>
  );
}
