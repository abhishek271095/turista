import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Navigation from "./Navbar";

function About() {
  return (
    <div className="about">
      <div className=" text-left ">
        <Container fluid className="">
          <Container>
            <h4
              className="text-center text-light  "
              style={{ paddingTop: "100px" }}
            >
              About{" "}
            </h4>
            <h4 className="text-center text-light display-3 pt-5">
              Designed by space matrix architects <br />& planners architects{" "}
            </h4>
            <p className="text-center  text-secondary pt-5">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              ornare tempus aliquet. Pellentesque finibus, est et iaculis
              suscipit, dolor nulla commodo dui, nec ultricies arcu nisl
              tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices
              eget risus. Ut lobortis pellentesque pretium. Praesent
              sollicitudin vestibulum iaculis. Mauris a finibus orci. Quisque
              ipsum nunc, efficitur sit amet blandit ut, aliquam quis dui.
              Phasellus interdum leo eu ipsum malesuada, et interdum diam
              egestas. Maecenas pretium fermentum tortor ac tincidunt. Curabitur
              consectetur dolor libero, at aliquam est ornare eleifend. Aliquam
              at finibus dolor.”
            </p>

            <Button
              variant="outline-light"
              className="mx-auto d-block w-25 p-2 mt-4"
            >
              Light
            </Button>
          </Container>
        </Container>
      </div>
    </div>
  );
}
export default About;
