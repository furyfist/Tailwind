import './App.css'


function App() {

  return (
   <div className=' bg-blue-900' >
       <div className='container flex  flex-col items-center justify-center min-h-screen space-y-4' >
          <div className='logo flex' >
              <img src="" alt="logo here" />
              <p>  - webinar.gg</p>
          </div>

          <div className='Verify-age'>
            <p>Verify your age</p>

          </div>

          <div className='confirm date birth date'>
            <p>Please confirm your Age</p>

          </div>

          <div className='Input Dob flex flex-col space-y-1'>
            <input type="text" placeholder='Enter Your Birth Date' />
            <button className='bg-green-600'>Continue</button>
          </div>
       </div>
   </div> 
) 
}

export default App
