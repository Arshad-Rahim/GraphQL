import { useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import { GET_CLIENTS } from "../queries/clientQueries";
import { IClient } from "../interface/clientInterface";
import "../styles/style.css"; // Import the CSS file

export default function Client() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <p className="loading-text">Loading...</p>;
  if (error) return <p className="error-text">Something went wrong</p>;

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Clients</h2>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.clients.map((client: IClient) => (
                <ClientRow key={client.id} client={client} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
