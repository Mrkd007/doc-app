import "./main.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { userLoggedIn } from "./utils/helperFunctions";
import RegisterLogin from "./pages/RegisterLogin";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import Appointments from "./pages/Appointments";
import Doctors from "./pages/Doctors";
import Profile from "./pages/Profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/appointment' element={<Appointment />} />
					<Route path='/appointments' element={<Appointments />} />
					<Route path='/doctors' element={<Doctors />} />
					<Route path='/profile' element={!userLoggedIn ? <Navigate to='/' /> : <Profile />} />
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
