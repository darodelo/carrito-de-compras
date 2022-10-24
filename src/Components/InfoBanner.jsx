import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import "../Styles/infoBanner.css";



const InfoBanner = () => {


  return (
    <div className='info-banner'>
        <div>
            <LocalShippingIcon fontSize="large" style={{ color: 'white' }} />
            <p>Envíos a todo el país</p>
        </div>
        
        <div>
            <AccessTimeIcon fontSize="large" style={{ color: 'white' }} />
            <p>Atención 24hs</p>

        </div>
        
        <div>
            <CreditScoreIcon fontSize="large" style={{ color: 'white' }} />
            <p>Pago seguro</p>
        </div>

    </div>
  )
}

export default InfoBanner