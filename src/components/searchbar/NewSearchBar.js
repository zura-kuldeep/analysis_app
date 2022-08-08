import classes from "./NewSearchBar.module.css";

const NewSearchBar = ({ searchQuery, setSearchQuery })=> {
  return (
    <>
    <div className={classes["search__container"]}>
    <input className={classes["search__input"]} type="text" placeholder="Search Case"  value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}/>
    </div>
    </>
  );
};
export default NewSearchBar;
