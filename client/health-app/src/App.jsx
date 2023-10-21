import { InputForm } from "./components/inputform"; 

function App() {
  

  return (
    <>
      <main className="min-h-screen bg-gradient-to-t from-slate-200 to-slate-400">
        <section>
          <header className="text-4xl pt-4 text-extrabold text-center"> 
            <h1>Welcome to the app</h1>
          </header>
        </section>

        <section className="grid place-items-center pt-28">  
          <InputForm />
        </section>
      </main>
    </>
  )
}

export default App
