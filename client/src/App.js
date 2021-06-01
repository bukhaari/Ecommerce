
import HeaderApp from './components/Header/header';
import NavbarApp from './components/Navbar/navbar';
import './app.css'
function App() {
  return (
    <>
      <NavbarApp />
      <main className="">
        <div className="row">
          <div className="col-12">
            <HeaderApp />
          </div>
        </div>

      </main>
    </>
  );
}

export default App;
