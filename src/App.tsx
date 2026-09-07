import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import About from "./pages/About";
import DoctorDetails from "./pages/DoctorDetails";
import ServicesLayout from "./pages/services/ServicesLayout";
import ServicesOverview from "./pages/services/ServicesOverview";
import Consultation from "./pages/services/Consultation";
import Laboratory from "./pages/services/Laboratory";
import Pharmacy from "./pages/services/Pharmacy";

import AppointmentsLayout from "./pages/appointments/AppointmentsLayout";
import BookAppointment from "./pages/appointments/BookAppointment";
import MyAppointments from "./pages/appointments/MyAppointments";
import AppointmentDetails from "./pages/appointments/AppointmentDetails";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/doctors" element={<Doctors />} />
         
         <Route path="/about" element={<About />} />

          <Route path="/doctors/:id" element={<DoctorDetails />} />

        
          <Route path="/services" element={<ServicesLayout />}>
  <Route index element={<ServicesOverview />} />
  <Route
    path="consultation"
    element={<Consultation />}
  />
  <Route
    path="laboratory"
    element={<Laboratory />}
  />
  <Route
    path="pharmacy"
    element={<Pharmacy />}
  />
</Route>

<Route path="/appointments" element={<AppointmentsLayout />}>
  <Route index element={<BookAppointment />} />
  <Route path="my" element={<MyAppointments />} />
  <Route path=":id" element={<AppointmentDetails />} />
</Route>

            <Route path="/contact" element={<Contact />} />

          <Route path="/profile" element={<Profile />} />

        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;