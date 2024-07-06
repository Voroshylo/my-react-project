

import Alert from "./Alert";
import Button from "./Buttons"
import Obj from './Objekt'

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

      <Obj></Obj>
</>
    
  );
};
export default App