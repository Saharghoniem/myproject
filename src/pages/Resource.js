import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import second from "../images/second.jpg"

const Resource = () => {
  return (
    <>
      <Helmet>
        <title>Resource Page</title>
        <meta name="description" content="Resource" />
      </Helmet>

      <Header />

      <img src={second} alt=""/>
       <h5>This is one area where you can really showcase what your company has done and where it  <br/>would like to take itself in the future. Invite the reader into your legacy. Show them the world <br/>
        that you're trying to build with your team.

Description of the business,  <br/>including the mission and/or vision.
Product descriptions <br/>
Description of services
History,expansion, and growth
Public relations <br/>
Advertising
Industry information
Safety, health, and environmental  <br/>policies
Core team details
Client portfolio
</h5>
      <Footer />
    </>
  );
};

export default Resource;
