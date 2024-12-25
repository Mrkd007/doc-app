import "./main.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { userLoggedIn } from "./utils/helperFunctions";
import RegisterLogin from "./pages/RegisterLogin";
import About from "./pages/About";
import Appointments from "./pages/Appointments";
import Doctors from "./pages/Doctors";
import Profile from "./pages/Profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { checkAccess } from "./RBAC/access";
import { ROUTES } from "./utils/constants";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/appointments' element={<Appointments />} />
					<Route path='/doctors' element={!checkAccess(ROUTES.DOCTORS) ? <Navigate to='/' /> : <Doctors /> } /> // checkAccess will return false if the user does not have access to the route, only allowed to admin
					<Route path='/profile' element={!userLoggedIn() ? <Navigate to='/' /> : <Profile />} /> // userLoggedIn will return false if the user is not logged in, profile can be accessed only if user is logged in
					<Route path='/login' element={<RegisterLogin type='login' />} />
					<Route path='/adminlogin' element={<RegisterLogin type='doctor' />} />
					<Route path='/register' element={<RegisterLogin type='register' />} />
					{/* <Route exact path='/contact' element={userLoggedIn ? <Navigate to='/login' /> : <Contact /> } /> */}
				</Routes>
			</div>
		</QueryClientProvider>
	);
}

export default App;
