import "bootstrap/dist/css/bootstrap.min.css";
import "../static/styles/hamburger.css";
import Page from "../layout/main";
import Nav from "../components/common/navbar";
import Showcase from "../components/screens/home/showcase";
import AboutSection from "../components/screens/home/about";

export default () => {
  return (
    <Page>
      <Nav />
      <Showcase />
      <AboutSection />

      <style>
        {`
            #page {
              background-color: #272727;
            }
          `}
      </style>
    </Page>
  );
};
