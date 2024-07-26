
import Axios from "./Axios";
import Alert from "./Alert";
import Button from "./Buttons"
import Routers from "../components/nav/Routers";
import { Routes, Route } from "react-router-dom";
// import Axios from 'path/to/pages/Axios'
// import Alert from 'path/to/pages/Alert'
// import Button from 'patch/to/pages/Button'




const App = () => {
  return (
    <>
      <Routers/>
      {/* <Routes> */}
      <Alert variant='info'>
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
      <Button>
      </Button>
        <Axios />
        {/* <Route path="/" element={<Alert />} />
        <Route path="/about" element={<Button />} />
        <Route path="/products" element={<Axios />} />
        <Route path="*" element={<NotFound />} />
        </Routes> */}
</>
    
  );
};
export default App