import React from 'react'

import chicco from '../../assets/images/registry/chicco.png'
import pack from '../../assets/images/registry/pack.png'
import brown from '../../assets/images/registry/brown.png'
import lawn from '../../assets/images/registry/lawn.png'
import twig from '../../assets/images/registry/twig.png'
import giulia from '../../assets/images/registry/giuliavc.jpg'

class Anniversary extends React.Component {
  render() {
    return (
      <>
        <h2 className="major">Baby Registry</h2>
        <span className="image main"><img src={giulia} alt="" /></span>
        <p>We are so excited to have our daughter Giulia join our family! If you would like to buy her a gift or make a contribution, here is all the information you need.</p>
        
        <h3><a href="https://www.amazon.com/baby-reg/seth-cutler-june-2021-washington/1K4MZ6O6P7UWU">Amazon Registry</a></h3>
        <p><a href="https://www.amazon.com/baby-reg/seth-cutler-june-2021-washington/1K4MZ6O6P7UWU ">Click here</a> to access our Amazon baby registry.</p>

        <h3>Cover our costs</h3>

        <p>If you haven't found something you like on the registry, or would like to make a contribution that we use for a later purchase for Giulia, <a href="https://paypal.me/pools/c/8A2UR3u5Gs">please contribute here.</a>
        </p>

        <p>Finally, as can happen in adoptions, Giulia's arrival was sudden and we had to buy these items very quickly. If you would like to gift us one of these items,
          please write to <a href="mailto:sethandraff@gmail.com">sethandraff@gmail.com</a> before sending us a money gift so that we know what item it's for!
          Alternatively, you can also <a href="https://paypal.me/pools/c/8A2UR3u5Gs">make a contribution</a> without specifying the item.</p>
        
        <table className="registry">
          <tbody>
            <tr>
              <td>
                <a className="image" href="https://www.target.com/p/chicco-bravo-travel-system/-/A-16720026"><img src={chicco} alt="" /></a>
              </td>
              <td><a href="https://www.target.com/p/chicco-bravo-travel-system/-/A-16720026">
                Chicco Bravo 3-in-1 Quick Fold Travel System</a>
                <br/>
                <strong>$379.99</strong>
              </td>
              <td>AVAILABLE</td>
            </tr>
            <tr>
              <td>
                <a className="image" href="https://www.target.com/p/baby-trend-lil-snooze-deluxe-ii-nursery-center-sockorama/-/A-75003740"><img src={pack} alt="" /></a>
              </td>
              <td><a href="https://www.target.com/p/baby-trend-lil-snooze-deluxe-ii-nursery-center-sockorama/-/A-75003740">
                Baby Trend Lil Snooze Deluxe II Nursery Center</a>
                <br/>
                <strong>$89.99</strong>
              </td>
              <td>AVAILABLE</td>
            </tr>
            <tr>
              <td>
                <a className="image" href="https://www.target.com/p/dr-brown-s-options-all-in-one-baby-bottle-and-bottle-warmer-gift-set/-/A-75565147"><img src={brown} alt="" /></a>
              </td>
              <td><a href="https://www.target.com/p/dr-brown-s-options-all-in-one-baby-bottle-and-bottle-warmer-gift-set/-/A-75565147">
                Dr. Brown's Options+ All in One Baby Bottle and Bottle Warmer Gift Set</a>
                <br/>
                <strong>$89.99</strong>
              </td>
              <td>AVAILABLE</td>
            </tr>
            <tr>
              <td>
                <a className="image" href="https://www.target.com/p/boon-lawn-drying-rack/-/A-79593453?preselect=13600340"><img src={lawn} alt="" /></a>
              </td>
              <td><a href="https://www.target.com/p/boon-lawn-drying-rack/-/A-79593453?preselect=13600340">
                Boon Lawn Drying Rack</a>
                <br/>
                <strong>$19.99</strong>
              </td>
              <td>AVAILABLE</td>
            </tr>
            <tr>
              <td>
                <a className="image" href="https://www.target.com/p/boon-twig-countertop-drying-rack-white/-/A-14296752"><img src={twig} alt="" /></a>
              </td>
              <td><a href="https://www.target.com/p/boon-twig-countertop-drying-rack-white/-/A-14296752">
                Boon Twig Countertop Drying Rack - White</a>
                <br/>
                <strong>$4.99</strong>
              </td>
              <td>AVAILABLE</td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }
}

export default Anniversary