import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import third from "../images/third.jpg"
const Expand = () => {
  return (
    <>
      <Helmet>
        <title>Expand Page</title>
        <meta name="description" content="ExpandTTTTTTTTTTTTTTTTTTTT" />
        <style type="text/Expand">{`
   
 
        
    `}</style>
      </Helmet>
      <Header />
      <p>96% of customers say our integrations are superior</p>
<h5>Designed for depth and speed—and it shows. Try Confluence with Slack, Jira, Trello, Microsoft, or 3,000 others to see for yourself.

according to Atlassian's customer survey</h5>
<img src={third} alt="" />


      <Footer />
    </>
  );
};

export default Expand;
