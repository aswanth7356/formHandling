import './App.css'
import { useForm } from 'react-hook-form'

function App() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>FORM</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form onSubmit={handleSubmit()} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>

          <div style={{ marginBottom: '10px' }}>
            <input
              {...register('firstName', {
                required: "First name is required",
              })}
              placeholder='First Name'
              style={{ width: '100%', padding: '8px' }}
            />
            {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName.message}</p>} {/* Error message */}
          </div>

          <div style={{ marginBottom: '10px' }}>
            <input
              {...register('lastName', { required: true })}
              placeholder='Last Name'
              style={{ width: '100%', padding: '8px' }}
            />
            {errors.lastName && <p style={{ color: 'red' }}>Last name is required.</p>}
          </div>

          <div style={{ marginBottom: '10px' }}>
            <input
              {...register('age', {
                required: "Age is required",
                valueAsNumber: true,
                validate: (value) => value > 0 || "Age must be a positive number",
              })}
              type='number'
              placeholder='Age'
              style={{ width: '100%', padding: '8px' }}
            />
            {errors.age && <p style={{ color: 'red' }}>Age is required</p>}
          </div>

          <div>
            <input type="submit" value="Submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none' }} />
          </div>
        </form>
      </div>

    </>
  )
}

export default App
