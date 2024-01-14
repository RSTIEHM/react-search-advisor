import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient} from "@tanstack/react-query";
import { createAdvisor } from "../services/apiAdvisors";
import toast from "react-hot-toast";



const RIS_LEGAL = "Investment Advisory Services offered through Sound Income Strategies, LLC, an SEC Registered Investment Advisory Firm. [COMPANYNAME] and Sound Income Strategies, LLC are not associated entities. [COMPANYNAME] is a franchisee of Retirement Income Source, LLC. Sound Income Strategies, LLC and Retirement Income Source, LLC are associated entities."
const SIS_LEGAL = "Investment Advisory Services offered through Sound Income Strategies, LLC, an SEC Registered Investment Advisory Firm. [COMPANYNAME] and Sound Income Strategies, LLC are not associated entities."


const CreateAdvisor = () => {


  const queryClient = useQueryClient()
  const {register, handleSubmit, reset, formState} = useForm()
  const {errors} = formState

  console.log(errors, "FORM STATE")

  const {mutate, isLoading: isCreating} =  useMutation({
    mutationFn: createAdvisor,
    onSuccess: () => {
      toast.success("New Advisor Created")
      console.log("CREATE")
      queryClient.invalidateQueries({queryKey: ["cabins"]})
      reset()
    },
    onError: (err) => console.log(err)
  })
  const [isShowing, setIsShowing] = useState(false);



  // TOGGLES TEXTAREA FOR IND TAG ===================
  function handleSelectChange(e) {
    let category = e.target.value;
    if (category === "IND") {
      setIsShowing(true);
    } else {
      setIsShowing(false);
    }
  }

  function onSubmit(data) {
    if(data.tag === "RIS-SIS" || data.tag === "RIS") {
      data.legal = RIS_LEGAL
    } else if(data.tag === "SIS") {
      data.legal = SIS_LEGAL
    }

    // data.img = "default.jpg"
    console.log(data)
    mutate({...data, img: data.img[0]})
  }

  function onError(errors) {
    console.log(errors)
  }

  return (
    <section className="form-container">

      <h1>Create Advisor</h1>
      <form onSubmit={handleSubmit(onSubmit, onError)}>


        <div className="input-container">
          <label htmlFor="name">Name {errors?.name?.message && <span>This field is required</span>}</label>
          <input
            id="name"
            disabled={isCreating}
            className="form-input"
            type="text"
            name="name"
            placeholder="Enter Full Name"
            {...register("name",{
              required: "This field is required"
            })}
          />
        </div>

        <div className="input-container">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            disabled={isCreating}
            className="form-input"
            type="text"
            name="company"
            placeholder="Enter Company"
            {...register("company", {
              required: "This field is required"
            })}
          />
        </div>


        <div className="input-container">
          <label htmlFor="website">Website</label>
          <input 
            id="website"
            disabled={isCreating}
            className="form-input"
            type="text"
            name="website"
            placeholder="Enter Website URL"
            {...register("website", {
              required: "This field is required"
            })}
          />
        </div>


        <div className="input-container">
          <label htmlFor="tag">Tag </label>
          <select {...register("tag", {
              required: "This field is required"
            })} onChange={(e) => handleSelectChange(e)} 
            name="tag" 
            disabled={isCreating}
            id={"tag"}
            >

            <option value="RIS-SIS">RIS-SIS</option>
            <option value="RIS">RIS</option>
            <option value="SIS">SIS</option>
            <option value="IND">IND</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="img">Image </label>
            <input 
            name="img"
            disabled={isCreating} 
            type="file"  
            id="img"
            accept="image/*"
            {...register("img", {
              required: "This field is required"
            })}
            />
        </div>


        {isShowing && (
          <div className="input-container">
            <label htmlFor="legal">
              Legal {isShowing && <em>(IND Must have a custom legal)</em>}
            </label>
            <textarea 
               {...register("legal", {
                required: "This field is required"
              })}
              name="legal"
              disabled={isCreating}
              className="form-input form-input__text-area"
              id={"legal"}
            >
              Please Enter Legal....
            </textarea>
          </div>
        )}

        <NavLink className="btn btn-submit home-btn" to={`/advisors`}>
          Cancel
        </NavLink>
        <button  className="btn btn-submit home-btn" type="reset">
          Reset 
        </button>
        <button disabled={isCreating}  className="btn btn-submit home-btn" type="submit">
          Submit
        </button>

      </form>
    </section>
  );
};

export default CreateAdvisor;
