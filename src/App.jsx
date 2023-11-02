import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";
import Card from "./components/Card";

const App = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",

  });
  const [error, setError] = useState(false);
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Nombre",
      label: "Nombre de la mascota",
      required: true,
    },
    {
      id: 2,
      name: "type",
      type: "text",
      placeholder: "Tipo",
      label: "Tipo de mascota",
      required: true,
    }

  ];
  const [showCard, setShowCard] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((values.name.length > 3 && values.name[0] !==" ") && (values.type.length > 5)) {
      setShowCard(true);
      setError(false);
    }else{
      setShowCard(false);
      setError(true);
    }
    
  };

  const onChange = (e) => {
    setShowCard(false);
    setValues({ ...values, [e.target.name]: e.target.value });
    
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Formulario</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
      {showCard && <Card data={values} />}
      {error && <h4>Por favor chequea que la información sea correcta</h4>}

    </div>
  );
};

export default App;
