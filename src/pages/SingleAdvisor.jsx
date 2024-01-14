// import supabase from "../services/supaBase";
import {  useState, useEffect } from "react";

import { useMutation, useQueryClient} from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { NavLink, useNavigate  } from "react-router-dom";
import Loader from "../ui/Loader";
import { deleteAdvisor } from "../services/apiAdvisors";
import { useSingleAdvisorData } from "../features/advisors/useSingleAdvisor";
// import useNavigateWithMessage from "../hooks/useNaviagationWithMessage";
import { removeCompanyName } from "../utils/helpers";
import toast from "react-hot-toast";

const SingleAdvisor = () => {

  const { id } = useParams();
  const queryClient = useQueryClient()
  const { isLoading, data, isError, error } = useSingleAdvisorData(id);

  const navigate = useNavigate();

  const [advisorInfo, setAdvisorInfo] = useState({
    name: '',
    company: '',
    website: '',
    img: '',
    tag: '',
    legal: ''
  });


  function navigateWithMessage(msg, path, length) {
    setTimeout(() => {
      toast.success(msg)
      navigate(path)
    },length)
  }

  const {mutate, isLoading: isDeleting} =  useMutation({
    mutationFn: deleteAdvisor,
    onSuccess: () => {
    queryClient.invalidateQueries({queryKey: ["advisors"]});
    navigateWithMessage(`Deleted ${advisorInfo.name}`, "/advisors", 500)
  },
    onError: (err) => toast.error(err.message)
  })

  useEffect(() => {
    if (data && data.length > 0) {
      const { name, company, website, img, tag, legal } = data[0];
      setAdvisorInfo({
        name,
        company,
        website,
        img,
        tag,
        legal
      });
    }
  }, [data]);




  function handleDelete(e) {
    e.preventDefault()
    const confirmed = confirm(`Are you sure you want to delete ${advisorInfo.name}`)
    if(confirmed) {
      mutate(id)
    } 
  }


  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      {advisorInfo === undefined ? (
        <Loader />
      ) : (
<div className="single-advisor-wrapper">
<p className="single-text single-text-name">{advisorInfo.name}</p>
<p className="single-text single-text-company">{advisorInfo.company}</p>
<a
  className="single-text single-text-website"
  rel="noreferrer"
  target="_blank"
  href={`${advisorInfo.website}`}
>
  {advisorInfo.website}
</a>

<div className="single-advisor-img-container">
  <img className="single-advisor-img" src={`${advisorInfo.img}`} />
  <div
    style={{
      width: "100%",
    }}
  >
    <img
      style={{
        width: "80%",
        margin: "0 auto",
        display: "block",
        textAlign: "center",
      }}
      src={`/images/${advisorInfo.tag}_SM.png`}
    />
  </div>
</div>

<p className="single-text-legal">{removeCompanyName(advisorInfo.legal, advisorInfo.company)}</p>

<div className="btn-container">
  <NavLink
      className="home-link btn-green"
      to={`/advisors/edit/${id}`}
    >
      Edit
  </NavLink>
  <button onClick={(e) => handleDelete(e)} className="home-link btn-delete" to={`/advisors`}>
    Delete
  </button>

  <NavLink className="home-link" to={`/advisors`}>
    Back
  </NavLink>
</div>
</div> 
      )}
    </>
  );
};

export default SingleAdvisor;


