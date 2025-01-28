import React, { useState } from "react";
import { Button } from "@headlessui/react";
import { DatePicker } from "antd";
import dayjs from "dayjs";

import styles from "./BookingPannel.module.scss";

const BookingPannel = ({ price, orders }) => {
  const { RangePicker } = DatePicker;
  const getDefaultValue = () => {
    let result = [];

    if (!orders.length) {
      result.push(dayjs(), dayjs().add(5, "day"));
    }
    orders.map((item, i) => {
      if (i === 0) {
        if (dayjs(orders[i].term.start).diff(dayjs(), "days") > 5) {
          result.push(dayjs(), dayjs(orders[0].term.start));
        }
      }
      if (i < orders.length && orders[i + 1]) {
        if (
          dayjs(orders[i + 1].term.start).diff(
            dayjs(orders[i].term.end),
            "day"
          ) > 5
        ) {
          result.push(
            dayjs(orders[i].term.end),
            dayjs(orders[i].term.end).add(5, "day")
          );
        }
      }
      if (i === orders.length - 1) {
        result.push(dayjs(item.term.end), dayjs(item.term.end).add(5, "day"));
      }
    });

    return result;
  };
  const defaultValue = getDefaultValue().slice(0, 2);
  const [chosenDates, setChosenDates] = useState(
    dayjs(defaultValue[1]).diff(dayjs(defaultValue[0]), "day")
  );
  const dateFormat = "DD.MM.YYYY";

  const getDates = (value) => {
    if (!value) {
      return setChosenDates(1);
    }
    setChosenDates(value[1].diff(value[0], "day"));
  };

  const totalAmount = chosenDates * Number(price.amount);
  const serviceFee = Math.round(totalAmount * 0.16);

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

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <span>{price.currency}</span> <span>{price.amount}</span> ночь
      </div>
      <div className={styles.chooseWrapper}>
        <RangePicker
          placeholder={["Прибытие", "Выезд"]}
          className={styles.picker}
          size="large"
          format={dateFormat}
          disabledDate={disabledDate}
          minDate={dayjs()}
          maxDate={dayjs().add(1, "year")}
          onChange={getDates}
          defaultValue={defaultValue}
        />
      </div>
      <Button className={styles.bookingBtn}>Забронировать</Button>
      <div className={styles.subtitle}>Пока вы ни за что не платите</div>
      <div className={styles.price}>
        <div className={styles.underlined}>
          {`${price.currency}${price.amount} x ${chosenDates} `}
          {chosenDates === 1 ? "ночь" : chosenDates < 5 ? "ночи" : "ночей"}
        </div>

        <div>{`${price.currency}${totalAmount}`}</div>
      </div>
      <div className={styles.price}>
        <div className={styles.underlined}>Сервисный сбор Airbnb</div>
        <div>{`${price.currency}${serviceFee}`}</div>
      </div>
      <div className={styles.priceFinal}>
        <div className={styles.total}>Всего (без учета налогов)</div>
        <div>{`${price.currency}${totalAmount + serviceFee}`}</div>
      </div>
    </div>
  );
};

export default BookingPannel;
