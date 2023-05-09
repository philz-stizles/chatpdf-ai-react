import React, { PropsWithChildren, ReactNode } from "react";
import classes from "./Card.module.css";

type CardProps = {
  className?: string;
  title: string;
  icon: string;
  description: ReactNode;
};

const Card = ({
  className,
  title,
  description,
  icon,
}: PropsWithChildren<CardProps>) => {
  let cardClasses = `${classes.card}${className ? ` ${className}` : ""}`;
  return (
    <section className={cardClasses}>
      <div className={classes.header}>
        <h3 className={classes.title}>
          {title} {icon}
        </h3>
      </div>
      <div className={classes.body}>{description}</div>
    </section>
  );
};

export default Card;
