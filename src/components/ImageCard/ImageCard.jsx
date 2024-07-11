import PropTypes from "prop-types";
import styles from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  const { urls, alt_description } = image;

  return (
    <div className={styles.card} onClick={() => onClick(image)}>
      <img src={urls.small} alt={alt_description} className={styles.image} />
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;
