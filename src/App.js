import './App.css';
import MainDashBoard from './components/DashBoardComponents/MainDashBoard';
import Login from './components/Login/Login';
import AddQuestionModal from './components/Modals/AddQuestionModal';
import DeleteAnalysisModal from './components/Modals/DeleteAnalysisModal';
import QuizInterFaceModal from './components/Modals/QuizInterFaceModal';
import QuizTypeModal from './components/Modals/QuizTypeModal';
import CompletedQuizmodal from './components/Modals/CompletedQuizmodal';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
       {/* <BrowserRouter> */}
    {/* <Login/> */}
    {/* <MainDashBoard/> */}
    {/* <DeleteAnalysisModal/> */}
    {/* <QuizTypeModal/> */}
    {/* <AddQuestionModal/> */}
    {/* <QuizInterFaceModal/> */}
{/* <CompletedQuizmodal/>     */}
<Main/>
{/* </BrowserRouter> */}
    </div>
  );
}

export default App;
