import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../../components/Button/Button";
import type { RestaurantData } from "../../types";
import "./RestaurantForm.css";

interface RestaurantFormProps {
  action: (restaurantData: RestaurantData) => Promise<void>;
}

const RestaurantForm: React.FC<RestaurantFormProps> = ({ action }) => {
  const initialRestaurantData: RestaurantData = {
    name: "",
    adress: "",
    foodType: "",
    imageUrl: "",
    description: "",
    isVisited: false,
    servingsAmount: undefined,
    waitTime: undefined,
    customerService: undefined,
    priceCategory: undefined,
    rating: undefined,
    visitDate: "",
  };

  const [restaurantData, setRestaurantData] = useState(initialRestaurantData);

  const isVisited = restaurantData.isVisited === true;

  const changeRestaurantData = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newValue = event.target.value;

    setRestaurantData((restaurantData) => ({
      ...restaurantData,
      [event.target.id]: newValue,
    }));
  };

  const changeIsVisited = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked;

    setRestaurantData((restaurantData) => ({
      ...restaurantData,
      isVisited: newValue,
    }));
  };

  const changeRating = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value === "") {
      setRestaurantData((restaurantData) => ({ ...restaurantData, rating: 0 }));
      return;
    }

    let parsedRating = parseFloat(value);

    if (isNaN(parsedRating)) {
      return;
    }

    if (parsedRating > 5) {
      parsedRating = 5;
    }

    parsedRating = Math.round(parsedRating * 10) / 10;

    setRestaurantData((restaurantData) => ({
      ...restaurantData,
      rating: parsedRating,
    }));
  };

  const isFormValid =
    restaurantData.name !== "" &&
    restaurantData.adress !== "" &&
    restaurantData.description !== "" &&
    restaurantData.imageUrl !== "" &&
    restaurantData.foodType !== "";

  const navigate = useNavigate();

  const onSubmitForm = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    const cleanedData = { ...restaurantData };

    if (!cleanedData.isVisited) {
      delete cleanedData.visitDate;
      delete cleanedData.servingsAmount;
      delete cleanedData.waitTime;
      delete cleanedData.customerService;
      delete cleanedData.priceCategory;
      delete cleanedData.rating;
    } else {
      if (!cleanedData.visitDate) delete cleanedData.visitDate;
      if (!cleanedData.servingsAmount) delete cleanedData.servingsAmount;
      if (!cleanedData.waitTime) delete cleanedData.waitTime;
      if (!cleanedData.customerService) delete cleanedData.customerService;
      if (!cleanedData.priceCategory) delete cleanedData.priceCategory;
      if (cleanedData.rating === 0) delete cleanedData.rating;
    }

    await action(cleanedData);
    navigate("/");
  };

  return (
    <form className="restaurant-form" onSubmit={onSubmitForm}>
      <div className="restaurant-form__groups">
        <h3 className="restaurant-form__info">
          Completa los siguientes campos para añadir un nuevo restaurante:
        </h3>
        <div className="restaurant-form__group">
          <label htmlFor="name" className="restaurant-form__text">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            className="restaurant-form__control"
            value={restaurantData.name}
            onChange={changeRestaurantData}
            required
          />
        </div>
        <div className="restaurant-form__group">
          <label htmlFor="adress" className="restaurant-form__text">
            Dirección:
          </label>
          <input
            type="text"
            id="adress"
            className="restaurant-form__control"
            value={restaurantData.adress}
            onChange={changeRestaurantData}
            required
          />
        </div>
        <div className="restaurant-form__group">
          <label htmlFor="foodType" className="restaurant-form__text">
            Tipo de comida:
          </label>
          <input
            type="text"
            id="foodType"
            className="restaurant-form__control"
            value={restaurantData.foodType}
            onChange={changeRestaurantData}
            required
          />
        </div>
        <div className="restaurant-form__group">
          <label htmlFor="imageUrl" className="restaurant-form__text">
            Link url de la imagen:
          </label>
          <input
            type="url"
            id="imageUrl"
            className="restaurant-form__control"
            value={restaurantData.imageUrl}
            onChange={changeRestaurantData}
            required
          />
        </div>
        <div className="restaurant-form__group">
          <label htmlFor="description" className="restaurant-form__text">
            Descripción:
          </label>
          <textarea
            id="description"
            className="restaurant-form__control restaurant-form__control--text-area"
            value={restaurantData.description}
            onChange={changeRestaurantData}
            required
          />
        </div>
        <div className="restaurant-form__group restaurant-form__group--checkbox">
          <label htmlFor="isVisited" className="restaurant-form__text">
            ¿Has visitado este restaurante?
          </label>
          <input
            type="checkbox"
            id="isVisited"
            className="restaurant-form__checkbox"
            checked={isVisited}
            onChange={changeIsVisited}
            required
          />
        </div>
        <span className="restaurant-form__info restaurant-form__info--optionals">
          Campos opcionales:
        </span>
        <div className="restaurant-form__group">
          <label htmlFor="visitDate" className="restaurant-form__text">
            Fecha de la visita:
          </label>
          <input
            type="date"
            id="visitDate"
            className="restaurant-form__control"
            value={restaurantData.visitDate ?? ""}
            onChange={changeRestaurantData}
            disabled={!isVisited}
          />
        </div>
        <div className="restaurant-form__group">
          <label htmlFor="servingsAmount" className="restaurant-form__text">
            Cantidad de las raciones:
          </label>
          <select
            id="servingsAmount"
            className="restaurant-form__control"
            value={restaurantData.servingsAmount ?? ""}
            onChange={changeRestaurantData}
            disabled={!isVisited}
          >
            <option value="">Selecciona una opción</option>
            <option value="Poca">Poca</option>
            <option value="Normal">Normal</option>
            <option value="Generosa">Generosa</option>
          </select>
        </div>
        <div className="restaurant-form__group">
          <label htmlFor="waitTime" className="restaurant-form__text">
            Tiempo de espera:
          </label>
          <select
            id="waitTime"
            className="restaurant-form__control"
            value={restaurantData.waitTime ?? ""}
            onChange={changeRestaurantData}
            disabled={!isVisited}
          >
            <option value="">Selecciona una opción</option>
            <option value="Poco">Poco</option>
            <option value="Normal">Normal</option>
            <option value="Mucho">Mucho</option>
          </select>
        </div>
        <div className="restaurant-form__group">
          <label htmlFor="customerService" className="restaurant-form__text">
            Trato recibido:
          </label>
          <select
            id="customerService"
            className="restaurant-form__control"
            value={restaurantData.customerService ?? ""}
            onChange={changeRestaurantData}
            disabled={!isVisited}
          >
            <option value="">Selecciona una opción</option>
            <option value="Muy malo">Muy malo</option>
            <option value="Malo">Malo</option>
            <option value="Regular">Regular</option>
            <option value="Bueno">Bueno</option>
            <option value="Muy bueno">Muy bueno</option>
          </select>
        </div>
        <div className="restaurant-form__group">
          <label htmlFor="priceCategory" className="restaurant-form__text">
            Precio:
          </label>
          <select
            id="priceCategory"
            className="restaurant-form__control"
            value={restaurantData.priceCategory ?? ""}
            onChange={changeRestaurantData}
            disabled={!isVisited}
          >
            <option value="">Selecciona una opción</option>
            <option value="Bajo">Bajo</option>
            <option value="Medio">Medio</option>
            <option value="Alto">Alto</option>
          </select>
        </div>
        <div className="restaurant-form__group">
          <label htmlFor="rating" className="restaurant-form__text">
            Puntuación (sobre 5):
          </label>
          <div className="restaurant-form__rating-control">
            <input
              type="number"
              min={0}
              max={5}
              step={0.1}
              id="rating"
              className="restaurant-form__control restaurant-form__control--rating"
              value={restaurantData.rating ?? ""}
              onChange={changeRating}
              disabled={!isVisited}
            />
            <span className="max-rating">/5</span>
            <img
              src="/icons/Star-icon.svg"
              alt="star icon"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
      <Button
        type="submit"
        action={() => {}}
        classModifierName="form"
        disabled={!isFormValid}
      >
        Añadir
      </Button>
    </form>
  );
};

export default RestaurantForm;
