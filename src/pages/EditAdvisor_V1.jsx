// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Loader from "../ui/Loader";
import { useSingleAdvisorData } from "../features/advisors/useSingleAdvisor";
import { editAdvisor } from "../services/apiAdvisors";
import { removeCompanyName } from "../utils/helpers";

const EditAdvisor = () => {


  const { id } = useParams();
  const { isLoading, data, isError, error } = useSingleAdvisorData(id);
  const {register, handleSubmit, reset, getValues, formState} = useForm()
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  const { name, company, website, img, tag, legal } = data[0];
  let finalLegal = legal;
  finalLegal = removeCompanyName(finalLegal, company);

  return (
    <>
      {data.length === 0 ? (
        <Loader />
      ) : (
        <section className="form-container">
          <div className="edit-form-header">
            <h1>Edit {name}</h1>
            <img className="advisor-img edit-form-img" src={`/images/${img}`} />
          </div>

          <form>
            <div className="input-container">
              <label htmlFor="name">Name</label>
              <input
                value={name}
                className="form-input"
                type="text"
                name="name"
                placeholder="Enter Full Name"
              />
            </div>
            <div className="input-container">
              <label htmlFor="name">Company</label>
              <input
                value={company}
                className="form-input"
                type="text"
                name="company"
                placeholder="Enter Company"
              />
            </div>
            <div className="input-container">
              <label htmlFor="name">Website</label>
              <input
                value={website}
                className="form-input"
                type="text"
                name="website"
                placeholder="Enter Website URL"
              />
            </div>
            <div className="input-container">
              <label htmlFor="name">Tag {tag}</label>
              <select name="tag" id="">
                <option value="RIS-SIS">RIS-SIS</option>
                <option value="RIS">RIS</option>
                <option value="SIS">SIS</option>
                <option value="IND">AA</option>
              </select>
            </div>
            <div className="input-container">
              <label htmlFor="legal">Legal</label>
              <textarea
                name="legal"
                value={finalLegal}
                rows="550"
                className="form-input form-input__text-area"
              ></textarea>
            </div>
            <NavLink className="btn btn-submit" to={`/advisors/${id}`}>
              Cancel
            </NavLink>
            <button className="btn btn-submit" type="submit">
              Update
            </button>
          </form>
        </section>
      )}
    </>
  );
};

export default EditAdvisor;
