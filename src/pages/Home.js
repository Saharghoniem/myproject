import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import img1 from "../images/222.jpg";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>HOME Page</title>
        <meta name="description" content="HOMEEEEEEEEEEEE" />
      </Helmet>

      <Header />
      <div className="container">
        <div className="child child1">
          <h5>main concept</h5>
          <br/>
          <p>Featured</p>
          <p>Partners</p>
          <p>Teamwork</p>
          <p>Productivity</p>
          <p>Product Management</p>
          <p>Marketing & Sales</p>
          <p>Productivity</p>
          <p>Business Strategy</p>
          

        </div>
        <div className="child child2">
        <h5>ready to work </h5>
        <br/>

        <img src={img1} alt=""/>
         <p>About this collection
There are a million tiny decisions on the road to developing and launching a new product. How will you differentiate yourself from your competitors? What are your objectives and key results? What are the product milestones? How is the product received by customers?

With great power comes great responsibility. As a product manager, you’re tasked with creating a product roadmap that expertly walks the line between the needs of the customer and the business. Start a step ahead with this collection of product management templates that will help you navigate the product launch process from inception to deployment.</p>
         
        </div>
        <div className="child child3">
          <h5>pricing</h5>
          <br/>
          <p>Free	</p>
          <p>Standard	</p>
          <p>Premium	</p>
          <p>Enterprise</p>
        
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
