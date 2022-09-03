import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapper from "./components/Common/Wrapper";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Notes from "./pages/Notes";
import Archives from "./pages/Archives";
import Fallback from "./pages/Fallback";
import NoteSearch from "./components/Notes/NoteSearch";

function App() {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Header />
          <NoteSearch />
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route exact path="/notes" element={<Notes />} />
            <Route exact path="/archives" element={<Archives />} />
            <Route path="*" element={<Fallback />} />
          </Routes>
        </Wrapper>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
