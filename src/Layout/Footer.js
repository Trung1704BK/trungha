import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='container'>
          <div className='social-media'>
            <div className='homepage'>
              <Link to='/'>
                <img src='/picture/logo.png' />
              </Link>
            </div>
            <br />
            <Link>
              <img src='https://caodang.fpt.edu.vn/wp-content/themes/poly-2015/images/ico-fb-landing.png' />
            </Link>

            <Link>
              <img src='https://caodang.fpt.edu.vn/wp-content/themes/poly-2015/images/ico-youtube-landing.png' />
            </Link>

            <Link>
              <img src='https://caodang.fpt.edu.vn/wp-content/uploads/icon-tiktok.png' />
            </Link>
          </div>
          <div className='system-student'>
            <h5>HỆ THỐNG VĂN PHÒNG TUYỂN SINH</h5>
            <div>Cơ sở Hà Nội</div>
            <p>
              <i class='fa-solid fa-location-dot' />
              {''} {''}
              Văn phòng Tuyển sinh: Tòa nhà FPT Polytechnic, phố Trịnh Văn Bô,
              phường Phương Canh, quận Nam Từ Liêm, TP Hà Nội
              <br />
              <i class='fa-solid fa-square-phone' /> {''} {''}(024) 8582 0808
            </p>
            <div>Cơ sở Hà Nội</div>
            <p>
              <i class='fa-solid fa-location-dot' />
              {''} {''}
              Văn phòng Tuyển sinh: Tòa nhà FPT Polytechnic, phố Trịnh Văn Bô,
              phường Phương Canh, quận Nam Từ Liêm, TP Hà Nội <br />
              <i class='fa-solid fa-square-phone' /> {''} {''}(024) 8582 0808
            </p>
            <div>Cơ sở Hà Nội</div>
            <p>
              <i class='fa-solid fa-location-dot' />
              {''} {''}
              Văn phòng Tuyển sinh: Tòa nhà FPT Polytechnic, phố Trịnh Văn Bô,
              phường Phương Canh, quận Nam Từ Liêm, TP Hà Nội
              <br />
              <i class='fa-solid fa-square-phone' /> {''} {''}(024) 8582 0808
            </p>
            <br />
          </div>
          <div className='HCM-student'>
            <div>Cơ sở Hà Nội</div>
            <p>
              <i class='fa-solid fa-location-dot' />
              {''} {''}
              Văn phòng Tuyển sinh: Tòa nhà FPT Polytechnic, phố Trịnh Văn Bô,
              phường Phương Canh, quận Nam Từ Liêm, TP Hà Nội
              <br />
              <i class='fa-solid fa-square-phone' /> {''} {''}(024) 8582 0808
            </p>
            <div>Cơ sở Hà Nội</div>
            <p>
              <i class='fa-solid fa-location-dot' />
              {''} {''}
              Văn phòng Tuyển sinh: Tòa nhà FPT Polytechnic, phố Trịnh Văn Bô,
              phường Phương Canh, quận Nam Từ Liêm, TP Hà Nội <br />
              <i class='fa-solid fa-square-phone' /> {''} {''}(024) 8582 0808
            </p>
            <div>Cơ sở Hà Nội</div>
            <p>
              <i class='fa-solid fa-location-dot' />
              {''} {''}
              Văn phòng Tuyển sinh: Tòa nhà FPT Polytechnic, phố Trịnh Văn Bô,
              phường Phương Canh, quận Nam Từ Liêm, TP Hà Nội <br />
              <i class='fa-solid fa-square-phone' /> {''} {''}(024) 8582 0808
            </p>
            <br />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
