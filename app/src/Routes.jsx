import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import SmartAdmitintro from "pages/SmartAdmitintro";
import StudentProfile from "pages/StudentProfile";
import Universityfinder from "pages/Universityfinder";
import AcademicsHub from "pages/AcademicsHub";
import SummerSchoolLearningOpportunities from "pages/SummerSchoolLearningOpportunities";
import Home1 from "pages/Home1";
import SignUp from "pages/SignUp";
import ApplicationTracker from "pages/ApplicationTracker";
import EssayBuilderOne from "pages/EssayBuilderOne";
import Counsellorcenter from "pages/Counsellorcenter";
import Tutor from "pages/Tutor";
import SmartAdmitDream from "pages/SmartAdmitDream";
import Experience from "pages/Experience";
import EssayBuilderTwo from "pages/EssayBuilderTwo";
import LogIn from "pages/LogIn";
import StudentProfileblank from "pages/StudentProfileblank";
import Resume from "pages/Resume";
import SmartAdmitAcademicSnapshot from "pages/SmartAdmitAcademicSnapshot";
import ExtracurricularsTracker from "pages/ExtracurricularsTracker";
import ExtracurricularsTrackerTwo from "pages/ExtracurricularsTrackerTwo";
import EssayBuilderThree from "pages/EssayBuilderThree";
import MyPreferences from "pages/MyPreferences";
import Universityshortlist from "pages/Universityshortlist";
import SmartAdmitTestScoresOne from "pages/SmartAdmitTestScoresOne";
import SmartAdmitTestScoresTwo from "pages/SmartAdmitTestScoresTwo";
import SmartAdmitTestScoresThree from "pages/SmartAdmitTestScoresThree";
import EssayBuilderFour from "pages/EssayBuilderFour";
import EssayBuilderFive from "pages/EssayBuilderFive";
import SmartAdmitTestScores1a from "pages/SmartAdmitTestScores1a";
import Universitycompare from "pages/Universitycompare";
import UniversitycompareTwo from "pages/UniversitycompareTwo";
import SmartAdmitBeyondOne from "pages/SmartAdmitBeyondOne";
import SmartAdmitBeyondTwo from "pages/SmartAdmitBeyondTwo";
import EssayBuilderSix from "pages/EssayBuilderSix";
import SmartAdmitBeyond1a from "pages/SmartAdmitBeyond1a";
import EssayBuilderSeven from "pages/EssayBuilderSeven";
import SmartAdmitSummerOne from "pages/SmartAdmitSummerOne";
import SmartAdmitSummerTwo from "pages/SmartAdmitSummerTwo";
import SmartAdmitSummer1a from "pages/SmartAdmitSummer1a";
import SmartAdmitResults from "pages/SmartAdmitResults";
import StudentProfileOne from "pages/StudentProfileOne";
import StudentProfileTwo from "pages/StudentProfileTwo";
import StudentProfileThree from "pages/StudentProfileThree";
import StudentProfileFour from "pages/StudentProfileFour";
import StudentProfileFive from "pages/StudentProfileFive";
import StudentProfileSix from "pages/StudentProfileSix";
import StudentProfileSeven from "pages/StudentProfileSeven";
import StudentProfileEight from "pages/StudentProfileEight";
import StudentProfileNine from "pages/StudentProfileNine";
import StudentProfileTen from "pages/StudentProfileTen";
import StudentProfileEleven from "pages/StudentProfileEleven";
import StudentProfileTwelve from "pages/StudentProfileTwelve";
import StudentProfileThirteen from "pages/StudentProfileThirteen";
import StudentProfileFourteen from "pages/StudentProfileFourteen";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "smartadmitintro",
      element: <SmartAdmitintro />,
    },
    {
      path: "studentprofile",
      element: <StudentProfile />,
    },
    {
      path: "universityfinder",
      element: <Universityfinder />,
    },
    {
      path: "academicshub",
      element: <AcademicsHub />,
    },
    {
      path: "summerschoollearningopportunities",
      element: <SummerSchoolLearningOpportunities />,
    },
    {
      path: "home1",
      element: <Home1 />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "applicationtracker",
      element: <ApplicationTracker />,
    },
    {
      path: "essaybuilderone",
      element: <EssayBuilderOne />,
    },
    {
      path: "counsellorcenter",
      element: <Counsellorcenter />,
    },
    {
      path: "tutor",
      element: <Tutor />,
    },
    {
      path: "smartadmitdream",
      element: <SmartAdmitDream />,
    },
    {
      path: "experience",
      element: <Experience />,
    },
    {
      path: "essaybuildertwo",
      element: <EssayBuilderTwo />,
    },
    {
      path: "login",
      element: <LogIn />,
    },
    {
      path: "studentprofileblank",
      element: <StudentProfileblank />,
    },
    {
      path: "resume",
      element: <Resume />,
    },
    {
      path: "smartadmitacademicsnapshot",
      element: <SmartAdmitAcademicSnapshot />,
    },
    {
      path: "extracurricularstracker",
      element: <ExtracurricularsTracker />,
    },
    {
      path: "extracurricularstrackertwo",
      element: <ExtracurricularsTrackerTwo />,
    },
    {
      path: "essaybuilderthree",
      element: <EssayBuilderThree />,
    },
    {
      path: "mypreferences",
      element: <MyPreferences />,
    },
    {
      path: "universityshortlist",
      element: <Universityshortlist />,
    },
    {
      path: "smartadmittestscoresone",
      element: <SmartAdmitTestScoresOne />,
    },
    {
      path: "smartadmittestscorestwo",
      element: <SmartAdmitTestScoresTwo />,
    },
    {
      path: "smartadmittestscoresthree",
      element: <SmartAdmitTestScoresThree />,
    },
    {
      path: "essaybuilderfour",
      element: <EssayBuilderFour />,
    },
    {
      path: "essaybuilderfive",
      element: <EssayBuilderFive />,
    },
    {
      path: "smartadmittestscores1a",
      element: <SmartAdmitTestScores1a />,
    },
    {
      path: "universitycompare",
      element: <Universitycompare />,
    },
    {
      path: "universitycomparetwo",
      element: <UniversitycompareTwo />,
    },
    {
      path: "smartadmitbeyondone",
      element: <SmartAdmitBeyondOne />,
    },
    {
      path: "smartadmitbeyondtwo",
      element: <SmartAdmitBeyondTwo />,
    },
    {
      path: "essaybuildersix",
      element: <EssayBuilderSix />,
    },
    {
      path: "smartadmitbeyond1a",
      element: <SmartAdmitBeyond1a />,
    },
    {
      path: "essaybuilderseven",
      element: <EssayBuilderSeven />,
    },
    {
      path: "smartadmitsummerone",
      element: <SmartAdmitSummerOne />,
    },
    {
      path: "smartadmitsummertwo",
      element: <SmartAdmitSummerTwo />,
    },
    {
      path: "smartadmitsummer1a",
      element: <SmartAdmitSummer1a />,
    },
    {
      path: "smartadmitresults",
      element: <SmartAdmitResults />,
    },
    {
      path: "studentprofileone",
      element: <StudentProfileOne />,
    },
    {
      path: "studentprofiletwo",
      element: <StudentProfileTwo />,
    },
    {
      path: "studentprofilethree",
      element: <StudentProfileThree />,
    },
    {
      path: "studentprofilefour",
      element: <StudentProfileFour />,
    },
    {
      path: "studentprofilefive",
      element: <StudentProfileFive />,
    },
    {
      path: "studentprofilesix",
      element: <StudentProfileSix />,
    },
    {
      path: "studentprofileseven",
      element: <StudentProfileSeven />,
    },
    {
      path: "studentprofileeight",
      element: <StudentProfileEight />,
    },
    {
      path: "studentprofilenine",
      element: <StudentProfileNine />,
    },
    {
      path: "studentprofileten",
      element: <StudentProfileTen />,
    },
    {
      path: "studentprofileeleven",
      element: <StudentProfileEleven />,
    },
    {
      path: "studentprofiletwelve",
      element: <StudentProfileTwelve />,
    },
    {
      path: "studentprofilethirteen",
      element: <StudentProfileThirteen />,
    },
    {
      path: "studentprofilefourteen",
      element: <StudentProfileFourteen />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
