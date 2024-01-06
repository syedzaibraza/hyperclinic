import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import ChooseDoctor from "../src/components/select/ChooseDoctor";
import ServicesCategory from "../src/components/select/ServicesCategory";
import Layouts from "../src/layouts/Layouts";

const Service = () => {
  const Labs = [
    {
      name: "CHUGHTAI LAB",
      logoUrl:
        "https://scontent.flhe33-1.fna.fbcdn.net/v/t39.30808-6/362205072_660319302801681_5756643647973392849_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=bNOfoJWHvo8AX_Qp3Bl&_nc_ht=scontent.flhe33-1.fna&oh=00_AfBwtPSs1GvNc0KrA7QYl3CWvT1OfWiwlSj24kalbUAPfg&oe=659A34D1",
      description:
        "Chughtai Lab is the leading diagnostic lab in Pakistan. The lab was founded by Dr A S Chughtai in 1983 with a singular focus on the needs of patients. Today, with a team of more than 30 pathologists and more than 200 lab scientists, Chughtai Lab serves patients in more than 100 cities across Pakistan through a network of regional labs and more than 300 collection centers.",
      websiteUrl: "https://chughtailab.com/",
    },
    {
      name: "CITI LAB",
      logoUrl:
        "https://scontent.flhe33-1.fna.fbcdn.net/v/t39.30808-6/265261656_3049938551911458_922292811317602974_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=UPCVeHOOqDQAX_cH0O9&_nc_ht=scontent.flhe33-1.fna&oh=00_AfBd26674ua9LYQf6BB_EH3Gw_JMV7egQ22s0gEG8g9jmQ&oe=6598B26D",
      description:
        "Founded in 1989, Citi Lab and Research Centre offers high-quality diagnostics with a network of labs and collection points across Pakistan's provinces. Utilizing fully automated instruments, the lab provides over 1000 tests, excelling in molecular diagnostics and hematologic/histopathology cancers. Recognized with ISO 9001:2008 and ISO 15189:2015 certifications.",
      websiteUrl: "https://citilab.org.pk/",
    },
    {
      name: "CLIN LAB",
      logoUrl:
        "https://play-lh.googleusercontent.com/TtIYosDgTBCKACNQ627Wcibqtl80tjeA3KlBgeQErcBgOV_qDgF0fRmRJBfaBqHrDP4",
      description:
        "Founded in 1984 in Lahore, Pakistan, CLINLAB, led by CEO Dr. Tauqeer Akhtar, offers advanced diagnostic services, including ultrasounds and HD-X-Ray. Renowned for its top-tier laboratory facilities and customer satisfaction, it operates near Jinnah Hospital and a new sample collection center at Multan Chungi, Wahdat Road, Lahore.",
      websiteUrl: "https://clinlab.pk/",
    },

    {
      name: "Salman Chughtai's Lab",
      logoUrl:
        "https://scontent.flhe33-1.fna.fbcdn.net/v/t39.30808-6/306794777_490507076422107_4144221721383890840_n.png?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=LfhDb-fGDjoAX_1xKpy&_nc_ht=scontent.flhe33-1.fna&oh=00_AfALqAwjhz96XrMo3lpJ5_TRuGCJLmloLCgKz0hx5O4WHA&oe=659952B4",
      description:
        "Established in 2008 by Salman Chughtai, Salman Chughtai's Lab provides diagnostic and research services with affordable, high-quality laboratory testing. Catering to diverse clientele, it operates 24/7, including weekends and holidays, staffed with healthcare professionals dedicated to patient services.",
      websiteUrl: "https://salmanchughtaislab.com/",
    },
    {
      name: "Metro City Lab",
      logoUrl:
        "https://scontent.flhe33-1.fna.fbcdn.net/v/t39.30808-6/305236125_500139195450345_926124685532604470_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=lqEX6JOlNPoAX8_C-z4&_nc_ht=scontent.flhe33-1.fna&oh=00_AfBRce7uvep3YYynkmlEB4tcdAagpxKYbuet77gUHzTTNg&oe=6598A331",
      description:
        "Metro City Lab (MCL) is the major corporate part of Maya Health Services (MHS) Private Limited and is a project of HC Pvt. Ltd., United Kingdom. Being a first-class pathology lab facility, we are committed to serving the community by providing high quality and accurate testing at affordable prices. We are dedicated to facilitating you best by providing quality services through an efficient network of collection centers in your near area and most importantly at your doorsteps.",
      websiteUrl: "https://www.metrocitylab.pk/",
    },
    {
      name: "Alpha Diagnostic Center",
      logoUrl:
        "https://scontent.flhe33-1.fna.fbcdn.net/v/t39.30808-6/277739239_295286762727551_4256903776545592204_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=t1rH8qscxmUAX-_oFZw&_nc_ht=scontent.flhe33-1.fna&oh=00_AfB_adiAlpFpIUrOd5axe00erA1yizA6qY1i5_zl9S6kMA&oe=659888A1",
      description:
        "Founded by Dr. Muhammad Hashim Khan, with extensive experience in radiology, Alpha Diagnostic Center in Lahore offers personalized, high-quality radiology and pathology services. Featuring state-of-the-art equipment, the center provides multiple services under one roof by consultants with over 15 years' experience, including affordable interventional radiology, ensuring swift and reliable results.",
      websiteUrl: "https://alphadc.com.pk/",
    },
    {
      name: "Al Razi Hospital Lab",
      logoUrl:
        "https://scontent.flhe33-1.fna.fbcdn.net/v/t39.30808-6/366634123_716260820514095_5324572466782300243_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=vc-J0kkIPHwAX_o0lZO&_nc_ht=scontent.flhe33-1.fna&oh=00_AfBbKt0TQAaPpRdRNsvsf9Ro5RD5CmgsBJmtVe-5XxvlZw&oe=659996C9",
      description:
        "AL-RAZI INTERNATIONAL LAB, equipped with cutting-edge technology, excels in Endocrinology, Hematology, Clinical Pathology, Molecular Biology, Microbiology, and Histopathology. It enhances client experience with web-based, SMS, and WhatsApp reporting, including free urgent reporting, and offers free home sample collection, continually evolving its high-quality services.",
      websiteUrl: "https://www.alrazilab.com/",
    },
    {
      name: "Innova Labs and Diagnostics",
      logoUrl:
        "https://scontent.flhe33-1.fna.fbcdn.net/v/t39.30808-6/312880738_500766218730394_207109192581264250_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=x3ZpOiPWzSAAX_-uesg&_nc_ht=scontent.flhe33-1.fna&oh=00_AfBa70Gl5Jua4gEfwf00gMsTAXGq_-HLSpV8WaMrY3BmNA&oe=659A6201",
      description:
        "Innova, equipped with advanced technology, specializes in Endocrinology, Hematology, Clinical Pathology, Molecular Biology, Microbiology, and Histopathology. It offers enhanced client services with web-based, SMS, WhatsApp reporting, and free urgent reporting options. Additionally, it provides free home sample collection, ensuring continuous evolution in its innovative diagnostic services.",
      websiteUrl: "https://innovalab.com.pk/",
    },
    {
      name: "NxGen Labs",
      logoUrl:
        "https://scontent.flhe33-1.fna.fbcdn.net/v/t39.30808-6/230177211_153386510154131_990537456838497407_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=7_qzj4pQAwgAX8lqFT6&_nc_ht=scontent.flhe33-1.fna&oh=00_AfCso3G4k_wUY_wMHorUV8aqU6mPSkeI-OuwIc9utpk72w&oe=6598FAEE",
      description:
        "Established in 2021, Waleed Tech's NxGen human testing lab offers state-of-the-art, error-free testing, targeting less privileged communities. Addressing chronic diseases, it provides high-quality, low-cost diagnostics. The lab's dedicated team of skilled professionals ensures quality service with strict quality control and assurance practices.",
      websiteUrl: "https://www.nxgenlabs.com.pk/",
    },
    {
      name: "Mughal Labs Diagnostics and Research",
      logoUrl:
        "https://scontent.flhe33-1.fna.fbcdn.net/v/t39.30808-6/378701470_609170964747395_6254953717038813312_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=FbKosz5trscAX8n31pN&_nc_ht=scontent.flhe33-1.fna&oh=00_AfA2gaR39yMifPJUF9fcLDSKnv6kvG81W3AXGScxyBZrRA&oe=659971EE",
      description:
        "Mughal Labs, established in February 2020 by Mughal Eye Hospital Trust, offers over 700 affordable, non-profit lab tests. Expanding with 25+ collection centers and 6 locations in Lahore for free medical OPD since August 2021, it aims to aid financially challenged patients and ensure early diagnosis.",
      websiteUrl: "https://mughallabs.com/",
    },
  ];

  return (
    <Layouts footer={2}>
      <PageBanner title={"Labs"} pageName="Labs" />
      <section className="services-area section-gap-top-less bg-color-grey">
        <div className="container">
          <div className="row justify-content-center service-loop">
            {Labs.map((item, index) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-8 " key={index}>
                  <div className="shadow mt-30 ">
                    <img src={item.logoUrl} alt="Image" className="w-100 " />
                    <div className="box-content bg-color-white p-3 border-0 rounded">
                      <div className="content text-center">
                        <h4 className="title">
                          <Link href={item.websiteUrl}>
                            <a>{item.name}</a>
                          </Link>
                        </h4>
                        {/* <p>Quis autem reprehe nderit voluptate</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="appointment-section">
        <div className="appointment-form-three bg-color-secondary">
          <div
            className="appointment-image"
            style={{
              backgroundImage:
                "url(https://seeva.vercel.app/assets/img/appointment/04.jpg)",
            }}
          ></div>
          <div className="form-wrap">
            <div className="section-heading text-center heading-white mb-60">
              <span className="tagline">Make an Appointment</span>
              <h2 className="title">
                Fill-up The From to Get Our Medical Services{" "}
              </h2>
            </div>
            <form onSubmit={(e) => e.preventDefault()} action="#">
              <div className="row">
                <div className="col-sm-6">
                  <div className="input-field">
                    <input type="text" placeholder="Your Full Name" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-field">
                    <input type="email" placeholder="Email Address" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-field">
                    <ChooseDoctor />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-field">
                    <ServicesCategory />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-field">
                    <input type="date" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-field">
                    <input type="text" placeholder="Phone Number" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-field">
                    <button
                      type="submit"
                      className="template-btn template-btn-primary"
                    >
                      Make an Appointment <i className="far fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <!--====== Appointment Section End ======--> */}

      {/* <!--====== Feature Section Start ======--> */}
      {/* <section className="feature-section section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-7 col-lg-6 order-lg-last">
              <div className="feature-img text-center text-lg-right">
                <img src="assets/img/section-img/feature-img.jpg" alt="Image" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="feature-text mt-md-50">
                <div className="section-heading mb-30">
                  <span className="tagline">How Can We Help</span>
                  <h2 className="title">
                    Flexible & Responsive to Changing Needs
                  </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium totam rem aperieaqueys epsa
                  quae abillo inventore veritatis et quase
                </p>
                <div className="row">
                  <div className="col-lg-5 col-sm-6">
                    <div
                      className="simple-icon mt-40 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="icon">
                        <i className="flaticon-stethoscope"></i>
                      </div>
                      <h4 className="title">Professional Doctors</h4>
                      <p>Sed perspiciatis unde omnis natus error</p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6">
                    <div
                      className="simple-icon mt-40 wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="icon">
                        <i className="flaticon-checkup"></i>
                      </div>
                      <h4 className="title">Very Friendly Environment</h4>
                      <p>Sed perspiciatis unde omnis natus error</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layouts>
  );
};
export default Service;
