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
        <h2 className="major">Lista per Giulia</h2>
        <span className="image main"><img src={giulia} alt="" /></span>
        <p>Giulia è arrivata! E si è unita alla nostra famiglia arcobaleno. Se le volete fare un regalo qui troverete le informazioni necessarie.</p>
        
        <h3><a href="https://www.amazon.com/baby-reg/seth-cutler-june-2021-washington/1K4MZ6O6P7UWU">Lista nascita su Amazon</a></h3>
        <p><a href="https://www.amazon.com/baby-reg/seth-cutler-june-2021-washington/1K4MZ6O6P7UWU ">Clicca qui</a> per accedere alla lista nascita 
        su Amazon dove potete acquistare dei prodotti che verranno spediti direttamente a noi a Washington.</p>

        <h3>Contribuisci ai costi</h3>

        <p>Se non avete trovato nella lista qualcosa da comprarci, o volete fare un contributo che possiamo usare per futuri acquisti per Giulia, <a href="https://paypal.me/pools/c/8A2UR3u5Gs">potete contribuire qui.</a>
        </p>

        <p>Come può capitare nelle adozioni, l'arrivo di Giulia è stato inaspettato e abbiamo dovuto compare cose essenziali nel giro di poche ore! Se siete interessati a regalarci una di queste cose,
          scrivete a <a href="mailto:sethandraff@gmail.com">sethandraff@gmail.com</a> prima di contribuire, così sappiamo cosa ci avete regalato! Tutti i prezzi sono in dollari americani.
          Altrimenti, <a href="https://paypal.me/pools/c/8A2UR3u5Gs">potete contribuire</a> senza specificare un oggetto in particolare.</p>
        
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
              <td>DISPONIBILE</td>
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
              <td>DISPONIBILE</td>
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
              <td>DISPONIBILE</td>
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
              <td>DISPONIBILE</td>
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
              <td>DISPONIBILE</td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }
}

export default Anniversary