import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import LandingPage from "./Pages/LandingPage/LandingPage";
import CoursesPage from "./Pages/CoursesPage/CoursesPage";
import CoursesPreviewModePage from "./Pages/CoursesPreviewModePage/CoursesPreviewModePage";
import LearningModePage from "./Pages/LearningModePage/LearningModePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import OnBoardingPage from "./Pages/OnBoardingPage/OnBoardingPage";
import ProfessorDashBoardPage from "./Pages/ProfessorDashBoardPage/ProfessorDashBoardPage";
import UserAndDashBoardPage from "./Pages/UserAndDashBoardPage/UserAndDashBoardPage";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/CoursesPage" element={<CoursesPage />} />
        <Route
          path="/CoursesPreviewModePage"
          element={<CoursesPreviewModePage />}
        />
        <Route path="/LearningModePage" element={<LearningModePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/OnBoardingPage" element={<OnBoardingPage />} />
        <Route
          path="/ProfessorDashBoardPage"
          element={<ProfessorDashBoardPage />}
        />
        <Route
          path="/UserAndDashBoardPage"
          element={<UserAndDashBoardPage />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
