//style
import styles from "./Footer.module.css";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className={`d-flex justify-content-around p-5 ${styles.footer_wrapper}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex flex-column  d-flex align-items-center">
            <h3>LOCATION</h3>
            <h5>2215 John Daniel Drive</h5>
            <h5>2215 John Daniel Drive</h5>
          </div>

          <div className="col-md-4 d-flex flex-column  d-flex align-items-center">
            <h3>AROUND THE WEB</h3>
            <div className="d-flex gap-3">
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faFacebook} />
              </div>
                  <div className={styles.icon}>
              <FontAwesomeIcon  icon={faInstagram} />
              </div>
                <div className={styles.icon}>
              <FontAwesomeIcon icon={faLinkedin} />
              </div>
                <div className={styles.icon}>
              <FontAwesomeIcon icon={faYoutube} />
              </div>
            </div>
          </div>

          <div className="col-md-4 d-flex flex-column  d-flex align-items-center">
            <h3>ABOUT FREELANCER</h3>
            <h6 className="text-center">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
