import { useState } from "react";
import { NavLink } from "react-router-dom";
const form = {
  name: "",
  company: "",
  website: "",
  tag: "",
  legal: "",
};

let legals = {
  "RIS-SIS":
    "Investment Advisory Services offered through Sound Income Strategies, LLC, an SEC Registered Investment Advisory Firm. [companyName] and Sound Income Strategies, LLC are not associated entities. [companyName] is a franchisee of Retirement Income Source, LLC. Sound Income Strategies, LLC and Retirement Income Source, LLC are associated entities.",
  RIS: "Investment Advisory Services offered through [companyName], a Minnesota registered Investment Advisory Firm. [companyName] is a franchisee of Retirement Income Source, LLC.",
  SIS: "Investment Advisory Services offered through Sound Income Strategies, LLC, an SEC Registered Investment Advisory Firm. Sound Income Strategies and Sound Income Strategies, LLC are not associated entities.",
};

const CreateAdvisor = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [state, setState] = useState(form);
  const [errors, setErrors] = useState([]);

  function handleSelectChange(e) {
    let category = e.target.value;
    if (category === "IND") {
      setIsShowing(true);
    } else {
      setIsShowing(false);
    }
    handleInputChange(e);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    let newlegal = "";
    let userErrors = [];

    // =============== CHECK IF LEGAL IS CUSTOM ============
    // if (state["tag"] === "RIS-SIS") {
    //   alert(state["tag"]);
    // }
    switch (state) {
      case state["tag"] === "RIS-SIS":
        newlegal = "RIS-SIS LEGAL HEAR";
        // legal = legals["tag"];
        break;
      case state["tag"] === "RIS":
        newlegal = "RIS LEGAL HEAR";
        // legal = legals["tag"];
        break;
      case state["tag"] === "SIS":
        newlegal = "RIS LEGAL HEAR";
        // legal = legals["tag"];
        break;
      default:
        console.log("MOVE ON");
        break;
    }

    setState((prevData) => ({
      ...prevData,
      legal: newlegal,
    }));

    // if (state["tag"] === "IND" && state["legal"] === "") {
    //   errors.push("legal");
    // } else {
    //   state["legal"] = deflegal;
    // }

    for (let key in state) {
      if (state[key] === "" && key !== "tag" && key !== "legal") {
        setErrors((prevData) => ({
          ...prevData,
          key,
        }));
        // errors.push(key);
      }
    }
    console.log(errors);
    console.log(state);
  }

  return (
    <section className="form-container">
      {errors.length > 0 && <p>Errors Here</p>}
      <h1>Create Advisor</h1>
      <form>
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleInputChange}
            className="form-input"
            type="text"
            name="name"
            placeholder="Enter Full Name"
            value={state.name}
          />
          {name}
        </div>
        <div className="input-container">
          <label htmlFor="name">Company</label>
          <input
            onChange={handleInputChange}
            className="form-input"
            type="text"
            name="company"
            placeholder="Enter Company"
            value={state.company}
          />
        </div>
        <div className="input-container">
          <label htmlFor="name">Website</label>
          <input
            onChange={handleInputChange}
            className="form-input"
            type="text"
            name="website"
            placeholder="Enter Website URL"
            value={state.website}
          />
        </div>
        <div className="input-container">
          <label htmlFor="name">Tag </label>
          <select onChange={(e) => handleSelectChange(e)} name="tag">
            <option value="RIS-SIS">RIS-SIS</option>
            <option value="RIS">RIS</option>
            <option value="SIS">SIS</option>
            <option value="IND">AA</option>
          </select>
        </div>
        {isShowing && (
          <div className="input-container">
            <label htmlFor="legal">
              Legal {isShowing && <em>(AA Must have a custom legal)</em>}
            </label>
            <textarea
              onChange={handleInputChange}
              name="legal"
              value={state.legal}
              rows="200"
              className="form-input form-input__text-area"
            >
              Please Enter Legal....
            </textarea>
          </div>
        )}

        <NavLink className="btn btn-submit" to={`/advisors`}>
          Cancel
        </NavLink>
        <button onClick={handleSubmit} className="btn btn-submit" type="submit">
          Update
        </button>
      </form>
    </section>
  );
};

export default CreateAdvisor;
