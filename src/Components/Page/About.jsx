import React from "react";
import Navbar from "./../../../public/Navbar";
import "./css/about.css";
import Footer from "./../../../public/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about_header">
        <div className=" about_showcase">
          <div className="about_left">
            <img
              src="https://images7.alphacoders.com/116/thumb-1920-1165584.jpg"
              alt="spi"
            />
          </div>
          <div className="about_middle">
            <div className="mt-3">
              <img
                src="https://images.moviesanywhere.com/5a7e82e7749d6dd8e447fcfeec50c064/55462afc-41ad-4322-ad46-1caca29fcc36.webp?h=375&resize=fit&w=250"
                alt=""
              />
              <p className="ms-5 my-3">
                {" "}
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text"></i>
                <div className="my-4 rounded-2 text-black text-center bg-white fw-bolder w-50">
                  2h 28 min
                </div>
              </p>
            </div>
            <p className=" fs ms-5">
              PRICING SUBJECT TO CHANGE. Confirm current pricing with applicable
              retailer. All transactions subject to applicable license terms and
              conditions.
            </p>
            <div className="button">
              <button className="btn btn-primary rounded-5 w-75 ">
                See Reatailes{" "}
              </button>
              <button className="btn btn-secondary rounded-5 w-75 ">
                Preview
              </button>
              <button className="btn btn-secondary rounded-5 w-75 ">
                + Wishlist
              </button>
            </div>
            <p></p>
          </div>
          <div className="about_right text-dark">
            <p className="w-75 pe-5 ms-5 pt-5  fs">
              For the first time in the cinematic history of Spider-Man, our
              friendly neighborhood hero is unmasked and no longer able to
              separate his normal life from the high-stakes of being a Super
              Hero. When he asks for help from Doctor Strange the stakes become
              even more dangerous, forcing him to discover what it truly means
              to be Spider-Man.
            </p>
            <p className="text-secondary ms-5">
              Director:<p>Jon Watts</p>
            </p>
            <p className="text-secondary ms-5">
              Writer:<p>Chris McKenna, Erik Sommers</p>
            </p>
            <p className="text-secondary ms-5">
              Cast:
              <p>
                Tom Holland, Zendaya, Benedict Cumberbatch, Jon Favreau, Jacob
                Batalon
              </p>
            </p>
          </div>
          <section>
           <img  src="https://images.moviesanywhere.com/23ab5fb9c488d3504ae8870b24ab99a5/69e6c1fc-c393-42cb-8ca5-cca58dcf6aa8.webp?h=375&resize=fit&w=250" alt="" />
           <img src="https://images.moviesanywhere.com/19451f09463b439a7ec9937a29c37064/8b82ebaf-750d-4589-9425-e9726ee2a371.webp?h=375&resize=fit&w=250" alt="" />
           <img src="https://images.moviesanywhere.com/fcac9bfa9b5e157cc517d7f0c95a6db6/4f98fc44-0e81-4eab-8ea6-27f8bac2542a.webp?h=375&resize=fit&w=250" alt="" />
           <img src="https://images.moviesanywhere.com/13421a5712257645b569175472983f39/7964cad0-bccf-4d88-8d4c-3dae3301de2b.webp?h=375&resize=fit&w=250" alt="" />
           <img src="https://images.moviesanywhere.com/4677177f6f0595289bc3e767e7b47459/1d6c6c73-ab1e-4453-969c-6a4e965ebb37.webp?h=375&resize=fit&w=250" alt="" />
           <img src="https://images.moviesanywhere.com/d5e4e446e3375179feddabc3ae9a8198/b452bc54-2d2e-4c01-a50d-2901b7d3d9ab.webp?h=375&resize=fit&w=250" alt="" />
           <img src="https://images.moviesanywhere.com/959ef1bcb5c9a8e31e384f8d20384efa/7b57798c-b6d2-4b46-8487-bc0ca59934ec.webp?h=375&resize=fit&w=250" alt="" />
          </section>
         
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
