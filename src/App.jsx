import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Submit handler
  const onSubmit = (data) => {
    console.log(data);  
    reset();  
  };

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>FORM</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>

          <div style={{ marginBottom: '10px' }}>
            <input
              {...register('firstName', { required: "First name is required" })}
              placeholder="First Name"
              style={{ width: '100%', padding: '8px' }}
            />
            {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName.message}</p>}
          </div>

          <div style={{ marginBottom: '10px' }}>
            <input
              {...register('lastName', { required: "Last name is required" })}
              placeholder="Last Name"
              style={{ width: '100%', padding: '8px' }}
            />
            {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName.message}</p>}
          </div>

          <div style={{ marginBottom: '10px' }}>
            <input
              {...register('age', {
                required: "Age is required",
                valueAsNumber: true,
                validate: (value) => value > 0 || "Age must be a positive number",
              })}
              type="number"
              placeholder="Age"
              style={{ width: '100%', padding: '8px' }}
            />
            {errors.age && <p style={{ color: 'red' }}>{errors.age.message}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none' }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
