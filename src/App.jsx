import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Layout from "./components/Layout/Layout";
import ProtectedRoute from "./ProtectedRoute";
//upMenu
import Institutions from "./pages/SidePages/ManageSidepPages/Institutions";
import Faculties from "./pages/SidePages/ManageSidepPages/Faculties";
import Province from "./pages/SidePages/ManageSidepPages/Province";
import Cafedras from "./pages/SidePages/ManageSidepPages/Cafedras";
import Apps from "./pages/SidePages/ManageSidepPages/Apps";
import AppSolutions from "./pages/SidePages/ManageSidepPages/AppSolutions";
import Classificators from "./pages/SidePages/ManageSidepPages/Classificators";
import Nations from "./pages/SidePages/ManageSidepPages/Nations";
import Countries from "./pages/SidePages/ManageSidepPages/Countries";
//downMenu
import Student from "./pages/SidePages/JobSidePages/Student";
import Leave from "./pages/SidePages/JobSidePages/Leave";
import Application from "./pages/SidePages/JobSidePages/Application";
import Diploma from "./pages/SidePages/JobSidePages/Diploma";
import Report from "./pages/SidePages/JobSidePages/Report";
import Teacher from "./pages/SidePages/JobSidePages/Teacher";
import Action from "./pages/SidePages/JobSidePages/Action";
//filterMenu
import Filter_1 from "./pages/SidePages/FilterSidePages/Filter_1";
import Filter_2 from "./pages/SidePages/FilterSidePages/Filter_2";
//add
import AddHighSchools from "./components/Add/AddHighSchools";
import AddCafedras from "./components/Add/AddCafedras";
import AddDegrees from "./components/Add/AddDegrees";
import AddClassificators from "./components/Add/AddClassificators";
import HighSchoolDetails from "./components/HighSchoolDetails/HighSchoolDetails.jsx";
import AddFaculties from "./components/Add/AddFaculties.jsx";
import AddNations from './components/Add/AddNations.jsx'
//add each
import AddEachApp from "./components/AddEach/AddEachApp.jsx";
import AddEachCafedra from "./components/AddEach/AddEachCafedra.jsx";
import StudentDetails from "./components/StudentDetails/StudentDetails.jsx";
import AddStudents from "./components/Add/AddStudents.jsx";
import Basket from "./pages/SidePages/Basket/Basket.jsx";
import CafedraDetails from "./components/CafedraDetails/CafedraDetails.jsx";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout>
          <Home />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/insta",
    element: (
      <Layout>
        <Institutions />
      </Layout>
    ),
  },
  {
    path: "/faculties",
    element: (
      <Layout>
        <Faculties />
      </Layout>
    ),
  },
  {
    path: "/towns",
    element: (
      <Layout>
        <Province />
      </Layout>
    ),
  },
  {
    path: "/cafedra",
    element: (
      <Layout>
        <Cafedras />
      </Layout>
    ),
  },
  {
    path: "/apps",
    element: (
      <Layout>
        <Apps />
      </Layout>
    ),
  },
  {
    path: "/apparating",
    element: (
      <Layout>
        <AppSolutions />
      </Layout>
    ),
  },
  {
    path: "/classific",
    element: (
      <Layout>
        <Classificators />
      </Layout>
    ),
  },
  {
    path: "/nations",
    element: (
      <Layout>
        <Nations />
      </Layout>
    ),
  },
  {
    path: "/country",
    element: (
      <Layout>
        <Countries />
      </Layout>
    ),
  },
  {
    path: "/student",
    element: (
      <Layout>
        <Student />
      </Layout>
    ),
  },
  {
    path: "/leave",
    element: (
      <Layout>
        <Leave />
      </Layout>
    ),
  },
  {
    path: "/application",
    element: (
      <Layout>
        <Application />
      </Layout>
    ),
  },
  {
    path: "/diploma",
    element: (
      <Layout>
        <Diploma />
      </Layout>
    ),
  },
  {
    path: "/report",
    element: (
      <Layout>
        <Report />
      </Layout>
    ),
  },
  {
    path: "/teacher",
    element: (
      <Layout>
        <Teacher />
      </Layout>
    ),
  },
  {
    path: "/action",
    element: (
      <Layout>
        <Action />
      </Layout>
    ),
  },
  {
    path: "/filter",
    element: (
      <Layout>
        <Filter_1 />
      </Layout>
    ),
  },
  {
    path: "/filter_2",
    element: (
      <Layout>
        <Filter_2 />
      </Layout>
    ),
  },
  {
    path: "/basket",
    element: (
      <Layout>
        <Basket />
      </Layout>
    ),
  },
  {
    path: "/add-high-school",
    element: (
      <Layout>
        <AddHighSchools />
      </Layout>
    ),
  },
  {
    path: "/insta/:id/add-faculty",
    element: (
      <Layout>
        <AddFaculties />
      </Layout>
    ),
  },
  {
    path: "/insta/:id/cafedra",
    element: (
      <Layout>
        <AddEachCafedra />
      </Layout>
    ),
  },
  {
    path: "/insta/:id/apps",
    element: (
      <Layout>
        <AddEachApp />
      </Layout>
    ),
  },
  {
    path: "/add-cafedras",
    element: (
      <Layout>
        <AddCafedras />
      </Layout>
    ),
  },
  {
    path: "/add-nations",
    element: (
      <Layout>
        <AddNations />
      </Layout>
    ),
  },
  {
    path: "/add-degrees",
    element: (
      <Layout>
        <AddDegrees />
      </Layout>
    ),
  },
  {
    path: "/add-classificators",
    element: (
      <Layout>
        <AddClassificators />
      </Layout>
    ),
  },
  {
    path: "/add-students",
    element: (
      <Layout>
        <AddStudents />
      </Layout>
    ),
  },
  {
    path: "/insta/:id",
    element: (
      <Layout>
        <HighSchoolDetails />
      </Layout>
    ),
  },
  {
    path: "/cafedra/:id",
    element: (
      <Layout>
        <CafedraDetails />
      </Layout>
    ),
  },
  {
    path: "/student/:id",
    element: (
      <Layout>
        <StudentDetails />
      </Layout>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
