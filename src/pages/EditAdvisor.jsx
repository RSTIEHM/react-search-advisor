import styled from "styled-components";
import { useState, useEffect } from "react";
import { useMutation, useQueryClient} from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate  } from "react-router-dom";
import Loader from "../ui/Loader";
import { editAdvisor } from "../services/apiAdvisors";
import { useSingleAdvisorData } from "../features/advisors/useSingleAdvisor";
import toast from "react-hot-toast";
import { removeCompanyName } from "../utils/helpers";


const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 650px) {
    align-items: start;
    height: 860px;
  }
`;

const FormSection = styled.section`
  max-width: 685px;
  width: 80%;
  min-width: 300px;
  margin:50px auto 65px auto;
  border-radius: 10px;
  border: 1px solid #aaaaaa9f;
  background-color: #d3dedd4d;
  box-shadow: 10px 5px 10px rgba(128, 128, 128, 0.173);
  padding: 2rem 2rem 2rem 2rem;
  @media (max-width: 650px) {
    width: 90%;
  }
`;


const EditAdvisor = () => {
  const queryClient = useQueryClient()
  const { id } = useParams();
  const { isLoading, data, isError, error } = useSingleAdvisorData(id);
  const [imageSelected, setImageSelected] = useState(null)


  const navigate = useNavigate();
  // Initialize useForm outside of useEffect ===============================
  const { register, handleSubmit, reset,  formState } = useForm();
  const {errors} = formState
  useEffect(() => {
    if (data && data.length > 0) {
      const { name, company, website, img, tag, legal } = data[0];

      // Set default values after data is available =======================
      reset({
        name,
        company,
        website,
        img,
        tag,
        legal: removeCompanyName(legal, company)
      });
    }
  }, [data, reset]); 

  function navigateWithMessage(path, length) {
    setTimeout(() => {
      navigate(path)
    },length)
  }



  const {mutate, isLoading: isEditing} =  useMutation({
    mutationFn: editAdvisor,
    onSuccess: () => {
      console.log("ON SUCCESS!!!!!!");
      queryClient.invalidateQueries({queryKey: ["advisors"]});
      toast.success("Advisor Updated")
      navigateWithMessage(`/advisors`, 500)
      console.log("EDITED")
    },
    onError: (err) => toast.error(err.message)
  })


   function onSubmit(data) {
    console.log(handleSubmit)
    // IF THE IMAGE IS A STRING(ALREADY EXISTS) OR IS AN ARRAY(FROM FILE UPLOADER)
    const image = typeof data.img === "string" ? data.img : data.img[0]
    console.log(data, "IN onSubmit")
    mutate({newAdvisor: {...data, img: image}, id})
  }


  function bigError(err) {
    console.log(err)
  }


  function handleImageChange(e) {
    const fileName = e.target.files[0]?.name || '';
    setImageSelected(fileName)
  }


  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }


  return (
    <>
      {data.length === 0 ? (
        <Loader />
      ) : (
      <FormWrapper>
        <FormSection>
          <form onSubmit={handleSubmit(onSubmit, bigError)}>
              <div className="edit-form-header">
                {/* <h1>Edit {formState?.dirtyFields.name ? getValues("name") : data[0].name}</h1> */}
                <h1>Edit Advisor </h1>
                <img
                className="advisor-img edit-form-img" 
                src={imageSelected ? `/images/${imageSelected}` :  data[0].img} alt="Advisor Image" 
                
                />
              </div>
              <div className="input-container">
                <label htmlFor="name">Name {errors?.name?.message && <span>This field is required</span>}</label>
                <input
                id="name"
                className="form-input"
                type="text"
                name="name"
                placeholder="Enter Full Name"
                disabled={isEditing}
                {...register("name",{
                  required: "This field is required"
              })}
            />
            </div>
            <div className="input-container">
              <label htmlFor="name">Company {errors?.name?.message && <span>This field is required</span>}</label>
              <input
                id="company"
                className="form-input"
                type="text"
                name="company"
                placeholder="Enter Company"
                disabled={isEditing}
                {...register("company", {
                  required: "This field is required"
                })}
              />
            </div>
            <div className="input-container">
              <label htmlFor="name">Website {errors?.name?.message && <span>This field is required</span>}</label>
              <input 
                id="website"
                className="form-input"
                type="text"
                name="website"
                placeholder="Enter Website URL"
                disabled={isEditing}
                {...register("website", {
                  required: "This field is required"
                })}
              />
            </div>
            <div className="input-container">
              <label htmlFor="name">Tag {errors?.name?.message && <span>This field is required</span>}</label>
              <select 
              {...register("tag", {
                  required: "This field is required"
                })} 
                name="tag" 
                id="tag"
                className="form-input"
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
                type="file"  
                id="img"
                disabled={isEditing}
                accept="image/*"
                {...register("img", {
                  required: false
                })}
                onChange={handleImageChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="legal">Legal {errors?.name?.message && <span>This field is required</span>}</label>
              <textarea 
                  {...register("legal", {
                    required: "This field is required"
                  })}
                  name="legal"
                  className="form-input form-input__text-area"
                  id="legal"
                  disabled={isEditing}
                >
                  Please Enter Legal....
              </textarea>
          </div>
          <NavLink className="btn btn-submit" to={`/advisors/${id}`}>
            Back
          </NavLink>
          <button  disabled={isEditing} className="btn btn-submit" type="submit">
            Update
          </button>
        </form>
          </FormSection>
        </FormWrapper>
      )}
    </>
  );
};

export default EditAdvisor;
