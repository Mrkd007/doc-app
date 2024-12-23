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

function App() {
	return (
		<div>
			<Routes>
				{/* <Route
          exact
					path='/'
					element={userLoggedIn ? <Navigate to='/login' /> : <Home /> }
				/> */}
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/appointment' element={<Appointment />} />
				<Route path='/appointments' element={<Appointments />} />
				<Route path='/doctors' element={<Doctors />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/login' element={<RegisterLogin type='login'/>} />
				<Route path='/register' element={<RegisterLogin type='register'/>} />
				<Route exact path='/contact' element={userLoggedIn ? <Navigate to='/login' /> : <Contact /> } />
			</Routes>
		</div>
	);
}

export default App;
