import SearchButton from "../../components/searchButton/SearchButton";
import "./home.css";

export default function Home() {
  return (
    <div className="homeroot">
      <div className="homewrapper">
        <h1>De quelle ville voulez-vous voir la température ?</h1>
      <div className="component">
        <SearchButton />
        </div>
      </div>
      
    </div>
  );
}
