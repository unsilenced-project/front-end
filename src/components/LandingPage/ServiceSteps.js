import React from "react";
import {
  ServicesContainer,
  Services,
  Service,
  ToggleBtn,
  HandsFa
} from "./ServiceStyles";
import { H2 } from "../../components/generalStyles/reusables";
import Fade from "react-reveal/Fade";

export default function services() {
  // const toggleParagragh = e => {
  //   e.preventDefault();
  //   const btn = e.target;
  //   const el = btn.parentElement.querySelector("p");
  //   const height = getComputedStyle(el).getPropertyValue("max-height");
  //   if (height === "100px") {
  //     el.classList.add("show-all");
  //     btn.textContent = "Less...";
  //     btn.setAttribute("aria-expanded", true);
  //   } else {
  //     el.classList.remove("show-all");
  //     btn.textContent = "More...";
  //     btn.setAttribute("aria-expanded", false);
  //   }
  // };

  return (
    <ServicesContainer>
      <H2>Our Core Services</H2>
      <Services>
        <Service>
          <Fade left>
            <article>
              <h3>
                <span>
                  <HandsFa />{" "}
                </span>
                Step 1
              </h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                zjzjz"
              </p>
              {/* <ToggleBtn href="#" aria-expanded="false" onClick={toggleParagragh}>
              More...
            </ToggleBtn> */}
            </article>
          </Fade>
        </Service>

        <Service>
          <Fade right>
            <article>
              <h3>
                <span>
                  <HandsFa />{" "}
                </span>
                Step 2
              </h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              {/* <ToggleBtn href="#" aria-expanded="false" onClick={toggleParagragh}>
              More...
            </ToggleBtn> */}
            </article>
          </Fade>
        </Service>
        <Service>
          <Fade left>
            <article>
              <h3>
                <span>
                  <HandsFa />{" "}
                </span>
                Step 3
              </h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              {/* <ToggleBtn href="#" aria-expanded="false" onClick={toggleParagragh}>
              More...
            </ToggleBtn> */}
            </article>
          </Fade>
        </Service>
        <Service>
          <Fade right>
            <article>
              <h3>
                <span>
                  <HandsFa />{" "}
                </span>
                Step 4
              </h3>
              <p>
                Multitude they say is strength, at Tieme Ndo, we believe in the
                power of numbers. Hence, we have designed a formidable structure
                which enables the farmers to leverage on the power of numbers
                through our farmers' cooperative society. Farmers who enrol in
                the Cooperative program have more opportunities to more loans
                and assistance within the cooperative society.
              </p>
              {/* <ToggleBtn href="#" aria-expanded="false" onClick={toggleParagragh}>
              More...
            </ToggleBtn> */}
            </article>
          </Fade>
        </Service>
      </Services>
    </ServicesContainer>
  );
}
