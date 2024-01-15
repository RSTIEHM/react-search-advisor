import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAdvisors } from "../features/advisors/useAdvisors";
import Loader from "../ui/Loader";

const SearchBar = () => {
  const { isLoading, error, advisors } = useAdvisors();
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [query, setQuery] = useState("");

  const [filteredAdvisor, setFilteredAdvisor] = useState([]);

  function handleFocus() {
    if (filteredAdvisor.length > 0) {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }
  }

  function handleChange(e) {
    if (e.target.value === "") {
      setIsFocused(false);
      setIsTyping(false);
      setQuery("");
    } else {
      setIsFocused(true);
      setIsTyping(true);
      setQuery(e.target.value);
    }
  }

  useEffect(() => {
    const handleSearch = () => {
      if (advisors) {
        const filteredResults = advisors.filter((advisor) => {
          return (
            advisor.name.toLowerCase().includes(query.toLowerCase()) ||
            advisor.company.toLowerCase().includes(query.toLowerCase())
          );
        });
        setFilteredAdvisor(filteredResults);
      }
    };
    handleSearch();
  }, [query, advisors]);

  useEffect(() => {
    setFilteredAdvisor(advisors);
  }, [advisors]);

  // LOAD
  if (isLoading) return <Loader />;
  // ERR
  if (error) {
    console.log(error);
  }

  return (
    <>
      {advisors.length === 0 ? (
        <Loader />
      ) : (
        <div className="search-input-container">
          <input
            value={query}
            onChange={(e) => handleChange(e)}
            onBlur={() => handleFocus()}
            onFocus={() => setIsFocused(!isFocused)}
            className="search-input"
            type="text"
            placeholder="Search By Name Or Company..."
          />

          {isFocused && isTyping && query.length > 1 && (
            <div 
            className="absolute">
              {filteredAdvisor.length === 0 ? (
                <div className="">
                  <p className="search-advisor-anchor">No Advisor Found?</p>
                </div>
              ) : (
                filteredAdvisor.map((advisor) => {
                  return (
                    <Link
                      key={advisor.id}
                      onClick={() => handleFocus()}
                      className="search-advisor-anchor"
                      to={`/advisors/${advisor.id}`}
                    >
                      <div className="">
                        <p className="search-advisor-anchor">
                          {advisor.name} - {advisor.company}
                        </p>
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SearchBar;
