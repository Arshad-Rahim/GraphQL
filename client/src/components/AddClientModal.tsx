import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_CLIENT } from "../mutation/clientMutation";
import { GET_CLIENTS } from "../queries/clientQueries";

export default function AddClientModal() {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');

  const [addClient] = useMutation(ADD_CLIENT,{
    variables:{name,email,phone},
    update(cache,{data:{addClient}}){
      const { clients } = cache.readQuery({
        query: GET_CLIENTS,
      });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      });
    }
  })

  const onSubmit = (e)=>{
    e.preventDefault();
    if(name =='' || email =='' || phone ==""){
      return alert("Please Fill   out all the fields")
    }
    addClient();

    setName('');
    setEmail("");
    setPhone('');
  }


  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Client
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Client
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <label htmlFor="">Name</label>
                <br />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter the name"
                />
                <br />
                <br />
                <label htmlFor="">Email</label>
                <br />

                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter the email"
                />
                <br />
                <br />
                <label htmlFor="">Phone Number</label>
                <br />

                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter the phone number"
                />
                <br />
                <br />
                
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" data-bs-dismiss="modal" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

