import React, { useState } from "react";
import { Button } from "@headlessui/react";
import { Link } from "react-router-dom";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

import { addOrder, openCart } from "../../../../features/cart/cartSlice";
import ConfirmButton from "../../../../components/confirmButton/ConfirmButton";
import { useAuth } from "../../../../context/AuthContext";
import getPriceWithCurrency from "../../../../utils/getPriceWithCurrency/getPriceWithCurrency";
import { DATE_FORMAT } from "../../../../const/dates";
import { ROUTES } from "../../../../routes/routes";
import styles from "./BookingPannel.module.scss";

const CLOSEST_DAYS = 5;

const BookingPannel = ({ apartment }) => {
  const { RangePicker } = DatePicker;

  const dispatch = useDispatch();

  const { user } = useAuth();

  const getDefaultValue = () => {
    let startDate = dayjs();
    let endDate = startDate.add(CLOSEST_DAYS, "days");

    for (const element of apartment.orders) {
      const orderStartDate = dayjs.unix(element.terms.start.seconds);
      const orderEndDate = dayjs.unix(element.terms.end.seconds);

      if (
        endDate.isBefore(orderStartDate) &&
        startDate.isBefore(orderStartDate)
      ) {
        break;
      }

      startDate = orderEndDate.add(1, "day");
      endDate = orderEndDate.add(CLOSEST_DAYS + 1, "day");
    }

    return [startDate, endDate];
  };
  const defaultValue = getDefaultValue();

  const [daysNumber, setDaysNumber] = useState(
    dayjs(defaultValue[1]).diff(dayjs(defaultValue[0]), "day")
  );

  const getDaysNumber = (value) => {
    if (!value) {
      return setDaysNumber(1);
    }
    setDaysNumber(value[1].diff(value[0], "day"));
  };

  const booked = apartment.orders.map((item) => {
    return {
      start: dayjs.unix(item.terms.start.seconds),
      end: dayjs.unix(item.terms.end.seconds),
    };
  });

  const disabledDate = (date) => {
    return booked.some((item) => {
      return (
        date.isBefore(item.end) && date.isAfter(item.start.subtract(1, "day"))
      );
    });
  };

  const [term, setTerm] = useState(defaultValue);

  const getTerm = (arr) => {
    setTerm(arr);
  };

  const handleMakeOrder = () => {
    dispatch(
      addOrder({
        id: uuidv4(),
        images: apartment.images,
        type: apartment.type,
        city: apartment.city,
        country: apartment.country,
        term: term.map((item) => dayjs(item).format(DATE_FORMAT)),
        length: daysNumber,
        price: getPriceWithCurrency(
          Math.round(daysNumber * Number(apartment.price.amount) * 1.16),
          apartment.price.currency
        ),
      })
    );
    dispatch(openCart());
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <span className={styles.bold}>
          {getPriceWithCurrency(
            apartment.price.amount,
            apartment.price.currency
          )}
        </span>
        ночь
      </div>
      <div className={styles.chooseWrapper}>
        <RangePicker
          placeholder={["Прибытие", "Выезд"]}
          className={styles.picker}
          size="large"
          format={DATE_FORMAT}
          disabledDate={disabledDate}
          minDate={dayjs()}
          maxDate={dayjs().add(1, "year")}
          onChange={(dateString) => (getDaysNumber(), getTerm(dateString))}
          defaultValue={getDefaultValue()}
        />
      </div>
      <ConfirmButton
        label="Забронировать"
        onClick={handleMakeOrder}
        disabled={!user}
      />
      {user ? (
        <div className={styles.subtitle}>Пока вы ни за что не платите</div>
      ) : (
        <div className={styles.subtitle}>
          Чтобы оформить заказ <br />
          <Link to={ROUTES.LOGIN_PAGE} className={styles.link}>
            войдите
          </Link>
          или
          <Link to={ROUTES.SIGNUP_PAGE} className={styles.link}>
            зарегистрируйтесь
          </Link>
        </div>
      )}

      <div className={styles.price}>
        <div className={styles.underlined}>
          {getPriceWithCurrency(
            apartment.price.amount,
            apartment.price.currency
          )}
          {` x ${daysNumber} `}
          {daysNumber === 1 ? "ночь" : daysNumber < 5 ? "ночи" : "ночей"}
        </div>

        <div>
          {getPriceWithCurrency(
            daysNumber * Number(apartment.price.amount),
            apartment.price.currency
          )}
        </div>
      </div>
      <div className={styles.price}>
        <div className={styles.underlined}>Сервисный сбор BookApt</div>
        <div>
          {getPriceWithCurrency(
            Math.round(daysNumber * Number(apartment.price.amount) * 0.16),
            apartment.price.currency
          )}
        </div>
      </div>
      <div className={styles.priceFinal}>
        <div className={styles.total}>Всего (без учета налогов)</div>
        <div>
          {getPriceWithCurrency(
            Math.round(daysNumber * Number(apartment.price.amount) * 1.16),
            apartment.price.currency
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPannel;
