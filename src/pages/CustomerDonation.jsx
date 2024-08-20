//import React from 'react'

import "../styles/CustomerDonation.css"
import { Link } from "react-router-dom";
const CustomerDonation = () => {
  return (
    <>
    <main id="Mainsection">
        <section className="galaxy2">
        {/* COlumn1 */}
            <div id="COlumn1">
            
                <img src="/CustomerDonation.png" alt="img" id="CustomerDonationImg" />
                
                <Link to="/CustomerDonationLastPage">
                <div className="CharityBtn">
                    <button className="myCharityBtn">Charity ABC</button>
                </div>
                </Link>
                
            


            </div>

             {/* COlumn2 */} 
            <div id="COlumn2">
            <div className="GoBackBtn">
            
            <Link to="/Donations">
              <button>Go Back</button>
            </Link>
          </div>
          {/* navbar (card/mpesa) */}
          <nav className="nav">
            <div className="label1">Card</div>
            <div className="label2">Mpesa</div>
          </nav>

          {/* Form */}
          <div className="formData">
            <form>
                <input type="number" name="" placeholder="Card Number" className="Inputs" required />
                <input type="text" name="" placeholder="CVV" className="Inputs" required />
                <div>
                <input type="text" name="" placeholder="Month" className="Inputs1" required />
                <input type="text" name="" placeholder="Year" className="Inputs2" required />
                </div>
                <input type="text" name="" placeholder="Amount" className="Inputs" required />
                <button type="submit" className="SubmitBtn">Donate</button>
            </form>
          </div>
          <div>
            <p className="DonateCharity">Donate To Charity Abc</p>
          </div>
            </div>
        </section>
    </main>
      
    </>
  )
}

export default CustomerDonation
