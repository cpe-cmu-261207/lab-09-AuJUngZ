import {
  IconBallpen,
  IconBrandFacebook,
  IconMail,
  IconRecordMail,
} from "@tabler/icons";
import React from "react";
import MainLayout from "../components/MainLayout";

export default function contact() {
  return (
    <MainLayout>
      <h2 className="text-center bg-white rounded-2">Contact</h2>
      <div className="text-center">
        <p className="d-flex justify-content-center align-item-center">
          <IconBallpen />
          <span className="fw-semibold">Name : </span>
          Nuttapong Thepphithak
        </p>
        <p className="d-flex justify-content-center align-item-center">
          <IconMail />
          <span className="fw-semibold">Email : </span>
          <a
            href="mailto:natthaphong_th@cmu.ac.th"
            style={{ textDecoration: "none" }}
          >
            natthaphong_th@cmu.ac.th
          </a>
        </p>
        <p className="d-flex justify-content-center align-item-center">
          <IconBrandFacebook />
          <span className="fw-semibold">Facebook : </span>
          <a
            href="https://www.facebook.com/auuujung/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            A'Au Nuttapong
          </a>
        </p>
      </div>
    </MainLayout>
  );
}
