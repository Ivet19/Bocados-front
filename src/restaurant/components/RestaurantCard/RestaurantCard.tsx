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

  const checkIconColor = isVisited ? "green" : "grey";

  const { updateRestaurant } = useRestaurants();

  return (
    <article className="restaurant">
      <div className="restaurant__top-info">
        <h3 className="restaurant__name">{name}</h3>
        <Button
          action={() => updateRestaurant(id)}
          classModifierName="visit-state"
          isDisabled={false}
        >
          <img
            src={checkIcon}
            alt={`${checkIconColor} check icon`}
            width={35}
            height={35}
          />
        </Button>
      </div>
      <img
        className="restaurant__image"
        src={imageUrl}
        alt={imageAlt}
        width={354}
        height={200}
        loading={loadingType}
      />
      <div className="restaurant__bottom-info">
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
      </div>
    </article>
  );
};

export default RestaurantCard;
