import { Link } from "react-router";
import Button from "../../../components/Button/Button";
import useRestaurants from "../../hooks/useRestaurants";
import type { Restaurant } from "../../types";
import "./RestaurantCard.css";

interface RestaurantCardProps {
  restaurant: Restaurant;
  position: number;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant: {
    id,
    name,
    adress,
    foodType,
    imageUrl,
    imageAlt,
    isVisited,
    rating,
  },
  position,
}) => {
  const loadingType = position <= 1 ? "eager" : "lazy";

  const checkIcon = isVisited
    ? "/icons/Visited-green.svg"
    : "/icons/Visited-grey.svg";

  const toggleButtonAriaLabel = isVisited
    ? "marcar como no visitado"
    : "marcar como visitado";

  const { updateRestaurant, removeRestaurant } = useRestaurants();

  return (
    <article className="restaurant">
      <div className="restaurant__top-info">
        <h3 className="restaurant__name">{name}</h3>
        <Button
          action={() => updateRestaurant(id)}
          classModifierName="visit-state"
          aria-label={toggleButtonAriaLabel}
        >
          <img
            src={checkIcon}
            width={35}
            height={35}
            alt=""
            aria-hidden={true}
          />
        </Button>
      </div>
      <div className="restaurant__image-container">
        <img
          className="restaurant__image"
          src={imageUrl}
          alt={imageAlt}
          width={354}
          height={200}
          loading={loadingType}
        />
        <Link to={id} className="restaurant__detail-link">
          Ver más
        </Link>
      </div>
      <div className="restaurant__bottom-info">
        <div className="restaurant__info-container">
          <div className="restaurant__info">
            <img
              className="restaurant__location-icon"
              src="/icons/Location-icon.svg"
              alt="location map icon"
              width={20}
              height={20}
            />
            <span>{adress}</span>
          </div>
          <div className="restaurant__info">
            <img
              className="restaurant__food-icon"
              src="/icons/Food-icon.svg"
              alt="crossed knife and spoon icon"
              width={20}
              height={20}
            />
            <span>{foodType}</span>
          </div>
          {rating && (
            <div className="restaurant__info">
              <img
                className="restaurant__star-icon"
                src="/icons/Star-icon.svg"
                alt="gold star icon"
                width={20}
                height={20}
              />
              <span>{`${rating}/5`}</span>
            </div>
          )}
          {!rating && (
            <div className="restaurant__info restaurant__info--empty"></div>
          )}
        </div>
        <div className="restaurant__buttons-container">
          <Button
            classModifierName="delete"
            action={() => {
              removeRestaurant(id);
            }}
            aria-label="borrar restaurante"
          >
            <img
              src="/icons/Trash-icon.svg"
              alt=""
              aria-hidden={true}
              width={18}
              height={20}
            />
          </Button>
          <Link
            to={`modify-restaurant/${id}`}
            className="restaurant__modify-link"
            aria-label="modificar restaurante"
          >
            <img
              src="/icons/Edit-icon.svg"
              alt=""
              aria-hidden={true}
              width={18}
              height={20}
            />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default RestaurantCard;
