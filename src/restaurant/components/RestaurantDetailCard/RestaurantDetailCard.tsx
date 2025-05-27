import type React from "react";
import type { Restaurant } from "../../types";
import Button from "../../../ui/components/Button/Button";
import useRestaurants from "../../hooks/useRestaurants";
import "./RestaurantDetailCard.css";

interface RestaurantDelailCardProps {
  restaurant: Restaurant;
}

const RestaurantDetailCard: React.FC<RestaurantDelailCardProps> = ({
  restaurant: {
    id,
    name,
    adress,
    foodType,
    description,
    imageUrl,
    imageAlt,
    isVisited,
    visitDate,
    servingsAmount,
    customerService,
    waitTime,
    priceCategory,
    rating,
  },
}) => {
  const checkIcon = isVisited
    ? "/icons/Visited-green.svg"
    : "/icons/Visited-grey.svg";

  const toggleButtonAriaLabel = isVisited
    ? "marcar como no visitado"
    : "marcar como visitado";

  const optionalData =
    servingsAmount || waitTime || customerService || priceCategory;

  const { updateRestaurant } = useRestaurants();

  return (
    <article className="detailed-restaurant">
      <header className="detailed-restaurant__header">
        <h2 className="detailed-restaurant__name">{name}</h2>
        {rating && (
          <div className="detailed-restaurant__rating-container">
            <img
              src="/icons/Star-icon.svg"
              alt="icono de una estrella amarilla de cinco puntas"
            ></img>
            <span>{rating}/5</span>
          </div>
        )}
      </header>
      <div className="detailed-restaurant__required-info">
        <div className="detailed-restaurant__image-container">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="detailed-restaurant__image"
            width={432}
            height={243}
          />
          <Button
            action={() => updateRestaurant(id)}
            classModifierName="visit-state"
            aria-label={toggleButtonAriaLabel}
          >
            <img
              src={checkIcon}
              width={35}
              height={35}
              className="button__check-icon"
              alt=""
              aria-hidden={true}
            />
          </Button>
        </div>
        <div className="required-info__details">
          <div className="detailed-restaurant__adress">
            <img src="/icons/Location-light-icon.svg" alt="icono de un mapa" />
            <span className="detailed-restaurant__text">{adress}</span>
          </div>
          <div className="detailed-restaurant__food">
            <img
              src="/icons/Food-light-icon.svg"
              alt="icono de dos cubiertos cruzados"
            />
            <span className="detailed-restaurant__text">{foodType}</span>
          </div>
        </div>
        <p className="detailed-restaurant__description">{description}</p>
        {isVisited && (
          <div className="detailed-restaurant__bottom-info">
            {visitDate && (
              <span className="detailed-restaurant__visit-date">
                {visitDate}
              </span>
            )}
            {optionalData && (
              <div className="detailed-restaurant__optional-info">
                {servingsAmount && (
                  <div className="detailed-restaurant__servings">
                    <img
                      src="/icons/servings-icon.svg"
                      alt="icono de una ración de comida"
                    />
                    <span className="detailed-restaurant__text">
                      {servingsAmount}
                    </span>
                  </div>
                )}
                {waitTime && (
                  <div className="detailed-restaurant__wait-time">
                    <img src="/icons/wait-icon.svg" alt="icono de un reloj" />
                    <span className="detailed-restaurant__text">
                      {waitTime}
                    </span>
                  </div>
                )}
                {customerService && (
                  <div className="detailed-restaurant__service">
                    <img
                      src="/icons/service-icon.svg"
                      alt="icono de un camarero"
                    />
                    <span className="detailed-restaurant__text">
                      {customerService}
                    </span>
                  </div>
                )}
                {priceCategory && (
                  <div className="detailed-restaurant__price">
                    <img
                      src="/icons/price-icon.svg"
                      alt="icono de una etiqueta con el símbolo del dolar"
                    />
                    <span className="detailed-restaurant__text">
                      {priceCategory}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default RestaurantDetailCard;
