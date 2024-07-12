import "./App.css";
import Header from "./Header";
import JobListing from "./JobListing";
function App() {
  return (
    <div className="font-main h-screen">
      <Header />
      <div className="bg-bg-color pt-8 px-6 pb-64">
        <JobListing />
      </div>
    </div>
  );
}

export default App;
