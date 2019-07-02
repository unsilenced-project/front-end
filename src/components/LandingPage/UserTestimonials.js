import React from "react";
import {
  Section,
  Container,
  Article,
  TextBox,
  Image,
  P
} from "./TestimonialsStyles";
import { H2 } from "../../components/generalStyles/reusables";
import { white_color } from "../../components/generalStyles/variables";
import data from "./Testimonialsdata";
import Bounce from "react-reveal/Bounce";

export default function Testimonials() {
  let isReversed = false;
  return (
    <Section>
      <H2 lineColor={white_color} color={white_color}>
        Opinions about the app
      </H2>
      <Container>
        <Bounce bottom>
          {data.map((testimony, i) => {
            if (i % 2 === 0) {
              isReversed = true;
            } else isReversed = false;
            return (
              <Article reversed={isReversed} key={i}>
                <TextBox>
                  <P>{testimony.text}</P>
                  <P author="true">{testimony.author}</P>
                </TextBox>
                <Image src={testimony.img} alt={testimony.alt} />
              </Article>
            );
          })}
        </Bounce>
      </Container>
    </Section>
  );
}
