import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Unauthorized = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section>
      <h1>Unauthorized</h1>
      <br />
      <p>You do not have access to the requested page.</p>
      <div>
        <Button onClick={goBack}>Go back</Button>
      </div>
    </section>
  );
};

export default Unauthorized;
