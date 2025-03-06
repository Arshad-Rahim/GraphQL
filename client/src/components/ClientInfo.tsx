
export default function ClientInfo({client}) {
  return (
    <>
      <div className="card">
        <h4 className="card-title">{client.name}</h4>
        <h6>{client.email}</h6>
        <p className="card-status">
          Phone: <b>{client.phone}</b>
        </p>

       
      </div>
    </>
  );
}
