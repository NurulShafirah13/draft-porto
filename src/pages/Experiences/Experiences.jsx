import WorkInfo from "../../components/WorkInfo/WorkInfo";
import Sertif1 from "../../assets/images/sertif/sertif-sema1.JPG";
import Sertif2 from "../../assets/images/sertif/sertif-sema1.JPG";
import Sertif3 from "../../assets/images/sertif/sertif-sema1.JPG";
import WorkList from "../../components/WorkList/WorkList";

function Experiences() {
  //mengisi data saat manggil props dari komponen workInfo
  const workData = [
    {
      title: "UI Design Project",
      desc: "Designed an interactive contact form with smooth animations.",
      img: Sertif1,
    },
    {
      title: "Portfolio Website",
      desc: "Developed and deployed a personal portfolio with React + GSAP.",
      img: Sertif2,
    },
    {
      title: "Freelance Work",
      desc: "Handled client communication and visual design projects.",
      img: Sertif3,
    },
  ];

  const myWorks = [
    {
      company: "PT SPIL (Salam Pacific Indonesia Lines)",
      role: "Admin Account Receivable - Outsourcing Finance",
      date: "May – August 2025",
      details: [
        "Responsible for printing and verifying container guarantees, processing customer payments, giro closing through virtual accounts/manual input, as well as preparing vouchers in/out for invoice settlement, down payment refunds, manual container guarantee refunds, Bad Debt, CY-CY, THC, and OKI PPh 15 settlement and managing deposit refund triggers.",
        "Handled financial operations including employee overtime input, settlement of customer payments, and cancellation of invoices or payments while ensuring accuracy and compliance with company procedures.",
        "Compiled and presented weekly and specialized financial reports such as NF, THC SML, CY-CY, and Bad Debt to support decision-making and financial monitoring.",
      ],
    },
    {
      company: "Ministry of National Development Planning/Bappenas",
      role: "Junior Database Consultant - Clean River Project",
      date: "December 2023 – December 2024",
      details: [
        "Conducted comprehensive data compilation and documentation of various issues related to environment, technical matters, raw and clean water, social concerns, and government work plans related to river management in Indonesia.",
        "Recorded decisions and actions taken during meetings for the preparation of final river management reports, ensuring that all agreed actions were well-documented.",
        "Developed a prototype website for interactive information dissemination related to river management projects using React Js, with a focus on providing easy access to information for stakeholders.",
        "Developed visual dashboard for data and databases in river management using Looker Studio and python. This dashboard are used to display variables required by experts or provided by experts, facilitating analysis and decision-making processes."
      ],
    },
    {
      company: "BPJS Kesehatan",
      role: "Membership Administration - Internship Program from Kampus Merdeka 2022",
      date: "August – January 2023",
      details: [
        "Helped participants in verifying document completeness and requirements for enrollment.",
        "Gave email feedback to participants regarding their data including PPNPN, APBN & APBD, P3K, and PNS segment.",
        "Compiled and analyzed problematic data of participants used the membership application system.",
        "Conducted customer feedback surveys at BPJS branch office, Mobile Customer Sevice, and delivered presentation on Mobile JKN to various offices and general public.",
      ],
    },
  ];

  return (
    <section className="contact">
      <section>
        <WorkList title="Work Experiences" data={myWorks} />;
      </section>
      <section>
        <WorkInfo title="My Contact Works" data={workData} />
      </section>
    </section>
  );
}

export default Experiences;
