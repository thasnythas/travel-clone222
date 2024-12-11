import React from 'react'

function Service() {
  return (
   <>
 <h1 className='d-flex text-center justify-content-center mt-5 p-5'><u>Our Service</u></h1>
      <div className='d-flex justify-content-between'>
        <div className='card shadow-lg mt-5  p-3' style={{ width: "400px" }}>
          <img 
            src="https://travelassistancepre.com/wp-content/uploads/2023/08/nbv.webp" 
            alt="Service Image" 
           
          /><h3>Customized Itineraries:</h3>
          <p>Plan every aspect of your trip with personalized itineraries that cater to your interests and schedule.</p>
        </div>
        <div className='card shadow-lg mt-5 ms-2 p-3' style={{ width: "400px" }}>
          <img 
            src="https://travelassistancepre.com/wp-content/uploads/2023/08/hjfdxgg.webp" 
            alt="Service Image" style={{width:"200px" ,height:"250px"}}
            className="d-block w-100"
          />
<h3>Accommodation Arrangements</h3>
<p>Secure the best places to stay, ensuring comfort and convenience throughout your journey.</p>


        </div>
        <div className='card shadow-lg mt-5 me-2 p-3' style={{ width: "400px" }}>
          <img 
            src="https://travelassistancepre.com/wp-content/uploads/2023/08/mesut-kaya-eOcyhe5-9sQ-unsplash-15.jpg" 
            alt="Service Image" 
            className="d-block w-100"
          />
          <h3>Travel Consultation</h3>
          <p>Receive expert advice and tips for a smooth and enjoyable travel experience.</p>
        </div>
      </div>
      <div className='d-flex justify-content-center p-5 mt-5'>
        <div className='row align-items-center' style={{ width: '100%' }}>
          {/* Image Column */}
          <div className='col-md-6 text-center'>
            <img 
              src="https://travelassistancepre.com/wp-content/uploads/2023/08/nbv.webp" 
              alt="Customized Itineraries" 
              className='img-fluid rounded shadow-lg' 
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>

          {/* Text Column */}
          <div className='col-md-6'>
            <h1 className='text-center'>Customized Itineraries</h1>
            <p className='text-justify'>
              At Travel Assistance Pre, your adventure begins with a meticulously crafted itinerary designed just for you. 
              Whether you dream of exploring bustling cities, serene beaches, or hidden gems off the beaten path, I tailor 
              each itinerary to match your unique preferences, budget, and schedule. From the moment you depart to your safe return, 
              every detail is considered to ensure a seamless and unforgettable journey. Enjoy a well-balanced mix of must-see 
              attractions and personalized recommendations that transform your trip into an extraordinary experience.
            </p>
          </div>
        </div>
      </div>
      {/* Second Section */}
      <div className='d-flex justify-content-center p-5 mt-5'>
        <div className='row align-items-center' style={{ width: '100%' }}>
          {/* Text Column */}
          <div className='col-md-6'>
            <h1 className='text-center'>Accommodation Arrangements</h1>
            <p className='text-justify'>
            Finding the perfect accommodation can make or break your travel experience.
             With extensive knowledge and connections in the hospitality industry, I help you secure 
             the best lodging options that suit your needs and budget. Whether it’s a luxurious hotel, a cozy bed and breakfast, or an affordable hostel, I ensure you stay in comfort and style. With my assistance, you can rest easy knowing that your accommodations will be as delightful as the destinations you explore, \
            providing a welcoming retreat at the end of each day.
            </p>
          </div>

          {/* Image Column */}
          <div className='col-md-6 text-center'>
            <img 
              src="https://travelassistancepre.com/wp-content/uploads/2023/08/hjfdxgg.webp" 
              alt="Exclusive Travel Experiences" 
              className='img-fluid rounded shadow-lg' 
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>



      

      <div className='d-flex justify-content-center p-5 mt-5'>
        <div className='row align-items-center' style={{ width: '100%' }}>
          {/* Image Column */}
          <div className='col-md-6 text-center'>
            <img 
              src="https://travelassistancepre.com/wp-content/uploads/2023/08/mesut-kaya-eOcyhe5-9sQ-unsplash-15.jpg" 
              alt="Customized Itineraries" 
              className='img-fluid rounded shadow-lg' 
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>

          {/* Text Column */}
          <div className='col-md-6'>
            <h1 className='text-center'>Travel Consultation</h1>
            <p className='text-justify'>
            Navigating the complexities of travel planning can be daunting, but with professional travel 
            consultation services from Travel Assistance Pre, you’re never alone. I offer personalized guidance 
            and expert advice on a wide range of topics, including destination selection, activity planning, and travel logistics. Benefit from insider tips, local knowledge, and tailored recommendations that enhance your travel experience. My goal is to make your journey as smooth and enjoyable as possible, equipping you with the information 
            and confidence needed for a remarkable adventure.
            </p>
          </div>
        </div>
      </div>

   
   </>
  )
}

export default Service