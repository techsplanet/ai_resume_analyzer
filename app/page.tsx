import Navbar from "@/components/Navbar";
import ResumeCard from "@/components/ResumeCard";
import { resumes } from "@/constant";
import React from "react";

const Home = () => {
  return (
    <main>
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track Your Application & Resume Rating</h1>
          <h2>Review your submissions and check AI-powered feedback.</h2>
        </div>
        {resumes.length > 0 && (
        <section className="resumes-section">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </section>
      )}
      </section>
      
    </main>
  );
};

export default Home;
