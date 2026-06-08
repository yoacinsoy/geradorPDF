// app/preview/page.js

"use client";

import { PDFViewer } from "@react-pdf/renderer";
import Curriculo2 from "@/components/curriculo2";
import modeloPDF2 from "@/components/modeloPDF2";

export default function Preview() {
    return (
        <PDFViewer
            style={{
                width: "100%",
                height: "100vh",
            }}
        >
            <modeloPDF2 />
        </PDFViewer>
    );
}
