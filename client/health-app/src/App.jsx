import { Route, Routes } from "react-router-dom";
import { SignUp } from './components/Signup';
import { Login } from './components/Login'; 
import { Logo } from "./graphics/MainLogo";
import { Title } from './components/Title';
import { Profile } from "./components/Profile";

function App() {
  

  return (
    <>
      <main className="min-h-screen bg-gradient-to-t from-slate-200 to-slate-400">
          <Title />
          <div className="grid place-items-center pt-14">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/direct" element={<DirectForm />} />
              <Route path="/direct/output" element={<DirectOutput />} />
              
            </Routes>
          </div>
      </main>
    </>
  )
}

export default App
