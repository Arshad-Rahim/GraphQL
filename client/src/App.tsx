import {ApolloProvider,ApolloClient,InMemoryCache} from '@apollo/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from './pages/Home';
import { BrowserRouter as Router,Routes, Route,  } from "react-router-dom";
import Page404 from './pages/Page404';
import ProjectDetails from './pages/ProjectDetails';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  // cache: new InMemoryCache(),
  // instead of ithin pakeram aan mukalil cache set cheytheth delete cheytheppolethe warning mattan
  cache,
});

function App() {

  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projectDetails/:id" element={<ProjectDetails />}></Route>
            <Route path="*" element={<Page404 />}></Route>
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App
