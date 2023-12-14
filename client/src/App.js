import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";

// ignore eslint
const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				clients: {
					// keyArgs: false,
					merge(existing, incoming) {
						return incoming;
					},
				},
				projects: {
					// keyArgs: false,
					merge(existing, incoming) {
						return incoming;
					},
				},
			},
		},
	},
});

const client = new ApolloClient({
	// use this uri https://project-manager-z4iq.onrender.com/ for production and
	uri:
		process.env.NODE_ENV === "development"
			? "http://localhost:5000/graphql"
			: "https://project-manager-z4iq.onrender.com/graphql",
	// uri: "http://localhost:5000/graphql",
	cache: cache,
});

function App() {
	return (
		<>
			<ApolloProvider client={client}>
				<Router>
					<Header />
					<div className="container">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/projects/:id" element={<Project />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</div>
				</Router>
			</ApolloProvider>
		</>
	);
}

export default App;
