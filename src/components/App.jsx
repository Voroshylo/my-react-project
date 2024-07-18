
import Axios from "./Axios";
import Alert from "./Alert";
import Button from "./Buttons"
import Player from "./Huks";




const App = () => {
  return (
    <>
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
      <Player/>
</>
    
  );
};
export default App