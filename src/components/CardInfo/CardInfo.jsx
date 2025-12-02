import { useState } from "react";
import gambarTes from "../../assets/images/grafis/aritmia.png";
import gambarTes2 from "../../assets/images/grafis/ekg.png";
import gambarTes3 from "../../assets/images/grafis/patolog.png";

import "./cardInfo.scss";

const dataCards = [
  {
    id: 1,
    img: gambarTes,
    title: "Rapid Diagnostic Software for Electrocardiogram Result Analysis",
    desc: "My team and I participated in the “Student Creativity Program Proposal” competition by submitting a proposal titled “Rapid Electrocardiogram Result Diagnostic Software”.",
    moreText1:
      "Based on WHO data from 2015, 70% of deaths worldwide are caused by Non-Communicable Diseases (NCDs), and 45% of those deaths are attributed to cardiovascular diseases. Several studies have shown that ECG signals can be used to identify cardiac conditions as well as individual identity with very high accuracy. This study consists of six stages: problem formulation, data exploration, data selection and preparation, model training and validation, model evaluation, and finally model deployment.",
    moreText2:
      "The results indicate that men are more susceptible to heart disease compared to women. Contributing factors include increasing age, the number of cigarettes smoked per day, and systolic blood pressure. Meanwhile, total cholesterol does not show a significant effect on the likelihood of developing heart disease. Using logistic regression, the model achieved an accuracy of 0.857, demonstrating that this algorithm can accurately predict whether an individual is at risk of developing heart disease.",
  },
  {
    id: 2,
    img: gambarTes2,
    title:
      "AI-HEART : Artificial Intelligence to Support Telemedicine at YARSI Hospital During the Pandemic",
    desc: "This proposal was prepared by my team and me, the same team that developed the “Rapid Electrocardiogram Result Diagnostic Software” proposal. In this proposal, we submitted our work to the GEMASTIK 2021 scientific competition, adopting the same theme that focused on disease management—particularly heart-related conditions—during the pandemic.",
    moreText1:
      "Electrocardiograms (ECG) are widely used non-invasive examinations for detecting heart disorders, but their limited availability in hospitals often results in long queues and difficulties for patients—especially during the pandemic, when healthcare systems were heavily overwhelmed. This situation highlights the need for technologies that enable remote monitoring and faster diagnostic processes. Previous studies also show that ECG signals hold strong potential for identifying both cardiac conditions and individuals, yet existing methods still face challenges such as excessive signal information and suboptimal classification accuracy.",
    moreText2:
      "In this research, we developed AI-based algorithms using neural networks and decision trees to predict cardiac rhythm abnormalities with improved accuracy. The models were trained on more than 10,000 high-quality medical records, processed using techniques such as one-hot encoding, standardization, and algorithm comparison to enhance performance. This approach is expected to support tele-ECG and tele-consultation systems, enabling faster early diagnosis while reducing the workload of medical professionals.",
  },
  {
    id: 3,
    img: gambarTes3,
    title:
      "Arrhythmia Classification Using Signal Denoising and Prediction of Undetected Electrocardiogram Rhythm",
    desc: "This paper was written as the final project for a learning program I participated in at my university. My team and I once again explored the theme of heart disease management, this time focusing specifically on arrhythmia classification and the prediction of undetected ECG signals.",
    moreText1:
      "An electrocardiogram (ECG) records the heart’s electrical activity and is a fast, safe, and non-invasive procedure. Although digital ECG interpretation is widely used, its accuracy is still limited—particularly for non-sinus rhythms—making manual review by physicians essential. Noise reduction plays an important role in improving ECG readability, as denoising helps clarify characteristic waveforms and supports more accurate arrhythmia detection. Previous studies have shown that while ECG classification is not yet fully precise, preprocessing through noise reduction significantly assists clinical diagnosis.",
    moreText2:
      "Our study aims to address the limitations of earlier research, particularly related to unread or undetected rhythms in noisy ECG segments. We propose to experiment with methods that remove noise and detect small or infrequent heartbeats within ECG blocks, an area that has received little attention in prior work. Through this approach, we hope to produce better performance metrics and highlight the importance of handling noise and subtle beats in ECG analysis. Ultimately, the goal is to support more accurate arrhythmia diagnosis, enable more appropriate treatment decisions, and contribute to improving patients’ quality of life.",
  },
];

const CardInfo = () => {
  const [openPopup, setOpenPopup] = useState(null);

  const openModal = (item) => setOpenPopup(item);
  const closeModal = () => setOpenPopup(null);

  return (
    <section className="cardInfo-section">
      <header>
        <h2>
          Scientific Papers
          <span className="subline">Research • Innovation • Collaboration</span>
        </h2>
      </header>

      <article className="card-grid">
        {dataCards.map((item) => (
          <div className="card" key={item.id}>
            <div className="cardImage">
              <img src={item.img} alt="img" />
            </div>

            <div className="cardDesc">
              <h3>{item.title}</h3>

              <div className="btnWrapper">
                <button className="readMoreBtn" onClick={() => openModal(item)}>
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </article>

      {/* POPUP MODAL */}
      {openPopup && (
        <div className="popupOverlay" onClick={closeModal}>
          <div className="popupBox" onClick={(e) => e.stopPropagation()}>
            <h3>{openPopup.title}</h3>
            <h2>{openPopup.desc}</h2>
            <p>{openPopup.moreText1}</p>
            <p>{openPopup.moreText2}</p>

            <button className="closeBtn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CardInfo;
