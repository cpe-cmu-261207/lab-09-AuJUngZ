import React from "react";
import MainLayout from "../components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div
        className="d-flex justify-content-center align-items-center mx-auto gap-3"
        style={{ maxWidth: "700px" }}
      >
        <div>
          <img
            src="/profile.jpg"
            className="rounded-circle"
            width="250px"
            height="250px"
          />
        </div>
        <div>
          <p className="fw-bold fs-4">Nuttapong Thepphithak</p>
          <p className="text-muted">
            Hi, I'm AuJung. I'm a web developer. I'm a student at Chiang Mai
            University. This is my first project website. I hope you enjoy it.
            You can give me feedback or advice. I'm not very good at design. But
            I try to do it as best as I can.
          </p>
        </div>
      </div>
      <h3 className="text-center">My skills</h3>
      <div className="d-flex justify-content-center m-3 gap-2">
        <div className="card" style={{ maxWidth: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">C++ language</h5>
            <p className="card-text">
              C++ for me, I think I can write it easily without worrying too
              much.
            </p>
            <div className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                90%
              </div>
            </div>
          </div>
        </div>
        <div className="card" style={{ maxWidth: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Java language</h5>
            <p className="card-text">
              If I read from c++ and saw java, it's probably not different
              because it's almost the same, but if I had to choose which one I
              was good at, it would be c++.
            </p>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
          </div>
        </div>
        <div className="card" style={{ maxWidth: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Web Developer</h5>
            <p className="card-text">
              Building this website is just the beginning. Still not very
              skilled Give it a little more time and it'll be fine.
            </p>
            <div className="progress">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: "20%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                20%
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
