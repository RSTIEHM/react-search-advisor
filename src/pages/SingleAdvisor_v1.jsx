import supabase from "../services/supaBase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Loader from "../ui/Loader";
import { useSingleAdvisorData } from "../features/advisors/useSingleAdvisor";


const SingleAdvisor = () => {



  const { id } = useParams();
  const [advisor, setAdvisor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("")

  // useSingleAdvisorData()
  // ONLY USING supaBASE NO ReactQuery ===================================
  async function getAdvisor(id) {
    const { data, error } = await supabase.from('advisors').select().eq('id', id);
    if (error) {
      console.log(error);
      throw new Error('Could not load Data');
    }
    return data;
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await getAdvisor(id);
        setAdvisor(result[0]);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [id]);


  // LOADING

  // ERROR 


  // DATA

  return (
    <>
      <div className="single-advisor-wrapper">
      <p className="single-text single-text-name">{advisor.name}</p>
      <p className="single-text single-text-company">{advisor.company}</p>
      <a
        className="single-text single-text-website"
        rel="noreferrer"
        target="_blank"
        href={`website`}
      >
        {advisor.website}
      </a>

      <div className="single-advisor-img-container">
        <img className="single-advisor-img" src={`/images/${advisor.img}`} />
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
            className=""
            src={`/images/${advisor.tag}_SM.png`}
          />
        </div>
      </div>

      <p className="single-text-legal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
        temporibus dolorem, ut eos tempore nemo deleniti eveniet alias
        accusantium beatae cupiditate dolores nostrum quis maxime dolorum?
        Aliquid voluptatum sapiente odit?
      </p>

      <div className="btn-container">
        <NavLink className="home-link" to={`/advisors`}>
          Back
        </NavLink>
        <NavLink className="home-link btn-green" to={`/advisors/edit/${id}`}>
          Edit
        </NavLink>
      </div>
      </>
      ) : "Problems"}

      </>
    )}
      </div>
    </>
  );
};

export default SingleAdvisor;
