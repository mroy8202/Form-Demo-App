import { useState } from 'react'
import './App.css'

function App() {

  const[formData, setFormData] = useState( {firstName : "", lastName: "", email: "", country: "", address: "", city: "", state: "", zip: "", comments: false, candidates: false, offers: false, mode: ""} )
  // console.log(formData)

  function changeHandler(event) {
    const {name, value, checked, type} = event.target
    setFormData( (prevFormData) => {
      return {
        ...prevFormData, 
        [name] : type === "checkbox" ? checked : value
      }
    } );
  }

  function SubmitHandler(event) {
    event.preventDefault();
    console.log("Finally Printing Form's data.")
    console.log(formData)
  }

  return (
    <div className='App'>
      <form className='form' onSubmit={SubmitHandler}>

        {/* FIRST NAME */}
        <div className='form-element'>
          <label htmlFor='firstName' className='label'>First Name</label>
          <input className='input-text' type='text' onChange={changeHandler} placeholder='Mritunjay' name='firstName' id='firstName' value={formData.firstName} />
        </div>

        {/* LAST NAME */}
        <div className='form-element'>
          <label htmlFor='lastName' className='label'>Last Name</label>
          <input className='input-text' type='text' onChange={changeHandler} placeholder='Roy' name='lastName' id='lastName' value={formData.lastName} />
        </div>

        {/* Email */}
        <div className='form-element'>
          <label htmlFor='email' className='label'>Email Address</label>
          <input className='input-text' type='email' onChange={changeHandler} placeholder='mroy8202@gmail.com' name='email' id='email' value={formData.email} />
        </div>

        {/* Dropdown menu: Country */}
        <div className='form-element'>
          <label htmlFor='country' className='label'>Country</label>
          <select className='input-text' onChange={changeHandler} name='country' id='country' value={formData.country}>
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>
            <option value="China">China</option>
            <option value="Russia">Russia</option>
            <option value="Afganistan">Afganistan</option>
            <option value="Australia">Australia</option>
            <option value="Iran">Iran</option>
            <option value="Israel">Israel</option>
          </select>
        </div>
        
        {/* Street Address */}
        <div className='form-element'>
          <label htmlFor='address' className='label'>Street Address</label>
          <input className='input-text' type='text' onChange={changeHandler} placeholder='Jagdeo Path' name='address' id='address' value={formData.address} />
        </div>

        {/* City */}
        <div className='form-element'>
          <label htmlFor='city' className='label'>City</label>
          <input className='input-text' type='text' onChange={changeHandler} placeholder='Patna' name='city' id='city' value={formData.city} />
        </div>

        {/* State / Province */}
        <div className='form-element'>
          <label htmlFor='state' className='label'>State / Province</label>
          <input className='input-text' type='text' onChange={changeHandler} placeholder='Bihar' name='state' id='state' value={formData.state} />
        </div>

        {/* Zip / Postal Code */}
        <div className='form-element'>
          <label htmlFor='zip' className='label'>State / Province</label>
          <input className='input-text' type='text' onChange={changeHandler} placeholder='800001' name='zip' id='zip' value={formData.zip} />
        </div>
        
        {/* CheckBoxes */}
        <div className='form-element'>
          <p className='sub-head email-sub-head'>By Email</p>

          <div className='checkbox'>
            <div>
              <input className='checkbox-button' type='checkbox' onChange={changeHandler} name='comments' checked={formData.comments} id='comments' />
            </div>
            <div>
              <label htmlFor='comments' className='label'>Comments</label>
              <p>Get notified when someone posts a comment on a posting.</p>
            </div>
          </div>

          <div className='checkbox'>
            <div>
              <input className='checkbox-button' type='checkbox' onChange={changeHandler} name='candidates' checked={formData.candidates} id='candidates' />
            </div>
            <div>
              <label htmlFor='candidates' className='label'>Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className='checkbox'>
            <div>
              <input className='checkbox-button' type='checkbox' onChange={changeHandler} name='offers' checked={formData.offers} id='offers' />
            </div>
            <div>
              <label htmlFor='offers' className='label'>Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </div>

        {/* Radio Buttons */}
        <div className='form-element'>
          <p className='sub-head'>Push Notifications</p>
          <p className='desc'>These are delivered via SMS to your mobile phone.</p>

          <div className='radio-div'>
            <div className='radio'>
              <input className='radio-button' type='radio' onChange={changeHandler} name='mode' value="everything-radio" id='everything-radio' checked={formData.mode === "everything-radio"} />
              <label htmlFor='everything-radio' className='label'>Everything</label>
            </div>

            <div className='radio'>
              <input className='radio-button' type='radio' onChange={changeHandler} name='mode' value="everything-email" id='everything-email' checked={formData.mode === "everything-email"} />
              <label htmlFor='everything-email' className='label'>Same as Email</label>
            </div>

            <div className='radio'>
              <input className='radio-button' type='radio' onChange={changeHandler} name='mode' value="everything-notifications" id='everything-notifications' checked={formData.mode === "everything-notifications"} />
              <label htmlFor='everything-notifications' className='label'>No push notifications</label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className='form-element'>
          <button>Save</button>
        </div>

      </form>
    </div>
  );
}

export default App
