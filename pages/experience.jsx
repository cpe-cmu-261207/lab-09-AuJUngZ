import React from "react";
import MainLayout from "../components/MainLayout";

export default function experience() {
  return (
    <MainLayout>
      <h1 className="text-center">Experience</h1>
      <div className="d-flex justify-content-center gap-3">
        <div className="card" style={{ maxWidth: "15rem" }}>
          <img src="/certificate.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Dev Lab Certificate</h5>
            <p className="card-text">
              Dev lab is a website for practicing programming problems. If you
              pass 20 or more questions, you will get a certificate.
            </p>
            <a
              href="https://www.borntodev.com/devlab/certificate_online/03d5301ed4fec1b13ed46c7868566531"
              target="_blank"
              className="btn btn-primary"
            >
              Visit to the Website
            </a>
          </div>
        </div>
        <div className="card" style={{ maxWidth: "15rem" }}>
          <img src="/scratch.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Mini Project on Scratch</h5>
            <p className="card-text">
              During the first year of study, I've been working on a small
              project about the game which is on the scratch platform.
            </p>
            <a
              href="https://scratch.mit.edu/projects/563240990/"
              target="_blank"
              className="btn btn-primary"
            >
              Visit to the Website
            </a>
          </div>
        </div>
        <div className="card" style={{ maxWidth: "15rem" }}>
          <img src="/cmu.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">CMU Certificate</h5>
            <p className="card-text">
              I am a student with good grades so this certidicate is guaranteed.
            </p>
            <a
              href="https://o365cmu-my.sharepoint.com/:b:/g/personal/natthaphong_th_cmu_ac_th/EQ2tuEVl5PRMgyFza2BBr3cB4tIkgVdoszcNBK9tuj-U1w?e=6NvM8D"
              target="_blank"
              className="btn btn-primary"
            >
              Visit to the Website
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
