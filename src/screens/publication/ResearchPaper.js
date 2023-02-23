import React from "react";
import pdf1 from "../../assets/pdf/1  MBSM Project 30 Oct. 2020.pdf";
import pdf2 from "../../assets/pdf/2  MBSM Project 30 Oct. 2020 (1).pdf";
import pdf3 from "../../assets/pdf/Marathi_Survey on Online Education - Report V1.pdf";
import Card from "react-bootstrap/Card";
import PdfImage from "../../assets/images/pdfImage.png";

export default function ResearchPaper() {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
        Research Papers
      </h2>
      <div className="pdfContainer">
        <div style={{display:"flex",flexWrap:"wrap",marginBottom:20}}>
          <Card style={{ width: "9rem", height: "fit-content", margin: 10 }}>
            <a href={pdf1}>
              <Card.Img variant="top" src={PdfImage} />
            </a>
          </Card>
          <Card style={{ width: "9rem", height: "fit-content", margin: 10 }}>
            <a href={pdf2}>
              <Card.Img variant="top" src={PdfImage} />
            </a>
          </Card>
          <Card style={{ width: "9rem", height: "fit-content", margin: 10 }}>
            <a href={pdf3}>
              <Card.Img variant="top" src={PdfImage} />
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
}
