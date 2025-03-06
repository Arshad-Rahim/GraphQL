import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom"
import { GET_PROJECT } from "../queries/projectQueries";
import ClientInfo from "../components/ClientInfo";

export default function ProjectDetails() {
  

  const {id}  = useParams();
  const {loading,error,data} = useQuery(GET_PROJECT,{
    variables:{id}
  });

  if(loading) return <h3>Loading...</h3>

  if(error) return <h4>Something went wrong</h4>

  if(data){

  return (

    
    <>
      <div className="card">
        <h4 className="card-title">{data.project.name}</h4>
        <h6>
          {data.project.description}
        </h6>
        <p className="card-status">
          Status: <b>{data.project.status}</b>
        </p>

        <ClientInfo client = {data.project.client}/>

        <a className="btn btn-dark" href={`/`}>
          Go to Home
        </a>
      </div>
    </>
  );
  
  }

}
