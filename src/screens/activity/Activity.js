import React from "react";
import { useQuery } from "react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";
import { Button } from "@mui/material";
export default function Activity() {
  const { isLoading, data } = useQuery("activities", async () => {
    const querySnapshot = await getDocs(collection(db, "Activity"));
    return querySnapshot.docs.map((doc) => doc.data());
  });
  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: 30 }}>Activities</h2>
      <div style={{ marginBottom: 30, marginTop: 30 }} className="pdfContainer">
        {data.map((item) => {
          return (
            <a
              href={item?.pdfUrl}
              className="pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <iframe
                src={item?.pdfUrl}
                scrolling={false}
                width="200px"
                height="230px"
                style={{ marginBottom: 10, overflow: "hidden" }}
              ></iframe>
              <Button variant="outlined">Open</Button>
            </a>
          );
        })}
      </div>
    </div>
  );
}
