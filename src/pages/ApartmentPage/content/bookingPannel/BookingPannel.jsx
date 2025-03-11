import React, { useState } from "react";
import { Button } from "@headlessui/react";
import { useParams } from "react-router-dom";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addOrder, openCart } from "../../../../features/cart/cartSlice";
import ConfirmButton from "../../../../components/confirmButton/ConfirmButton";

import getPriceWithCurrency from "../../../../utils/getPriceWithCurrency/getPriceWithCurrency";
import { DATE_FORMAT } from "../../../../const/dates";

import styles from "./BookingPannel.module.scss";

const CLOSEST_DAYS = 5;

const BookingPannel = ({ price, orders }) => {
  const { RangePicker } = DatePicker;

  const dispatch = useDispatch();

  const params = useParams();

  const getDefaultValue = () => {
    let startDate = dayjs();
    let endDate = startDate.add(CLOSEST_DAYS, "days");

    for (const element of orders) {
      const orderStartDate = dayjs(element.term.start);
      const orderEndDate = dayjs(element.term.end);

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

  const booked = orders.map((item) => {
    return {
      start: dayjs(item.term.start),
      end: dayjs(item.term.end),
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
        apartmentId: params.id,
        term: term.map((item) => dayjs(item).format(DATE_FORMAT)),
        length: daysNumber,
        price: getPriceWithCurrency(
          Math.round(daysNumber * Number(price.amount) * 1.16),
          price.currency
        ),
      })
    );
    dispatch(openCart());
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <span>{getPriceWithCurrency(price.amount, price.currency)}</span> ночь
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
        className={styles.bookingBtn}
        content="Забронировать"
        onClick={handleMakeOrder}
      />
      <div className={styles.subtitle}>Пока вы ни за что не платите</div>
      <div className={styles.price}>
        <div className={styles.underlined}>
          {getPriceWithCurrency(price.amount, price.currency)}
          {` x ${daysNumber} `}
          {daysNumber === 1 ? "ночь" : daysNumber < 5 ? "ночи" : "ночей"}
        </div>

        <div>
          {getPriceWithCurrency(
            daysNumber * Number(price.amount),
            price.currency
          )}
        </div>
      </div>
      <div className={styles.price}>
        <div className={styles.underlined}>Сервисный сбор BookApt</div>
        <div>
          {getPriceWithCurrency(
            Math.round(daysNumber * Number(price.amount) * 0.16),
            price.currency
          )}
        </div>
      </div>
      <div className={styles.priceFinal}>
        <div className={styles.total}>Всего (без учета налогов)</div>
        <div>
          {getPriceWithCurrency(
            Math.round(daysNumber * Number(price.amount) * 1.16),
            price.currency
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPannel;
