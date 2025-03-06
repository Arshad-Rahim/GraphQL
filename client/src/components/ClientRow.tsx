import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutation/clientMutation";
import { GET_CLIENTS } from "../queries/clientQueries";
import "../styles/style.css"; // Import the CSS file

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: clients.filter((c) => c.id !== deleteClient.id) },
      });
    },
  });

  return (
    <tr className="table-row">
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button
          className="delete-button"
          onClick={() => deleteClient({ variables: { id: client.id } })}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
