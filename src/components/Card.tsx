import React from "react";

interface CardProps {
  children?: React.ReactNode;
  special?: boolean;
}

interface CardImageProps {
  src?: string;
  alt?: string;
}

interface CardTitleProps {
  children: React.ReactNode;
}

interface CardContentProps {
  children: React.ReactNode;
}

interface CardButtonProps {
  href?: string;
  children: React.ReactNode;
}

const CardImage: React.FC<CardImageProps> = ({ alt = "Image cap" }) => (
  <div className="card-image">{alt}</div>
);

const CardTitle: React.FC<CardTitleProps> = ({ children }) => (
  <h3 className="card-title">{children}</h3>
);

const CardContent: React.FC<CardContentProps> = ({ children }) => (
  <p className="card-text">{children}</p>
);

const CardButton: React.FC<CardButtonProps> = ({ href, children }) =>
  href ? (
    <a href={href} className="btn">
      {children}
    </a>
  ) : (
    <button type="button" className="btn">
      {children}
    </button>
  );

const Card: React.FC<CardProps> & {
  Image: typeof CardImage;
  Title: typeof CardTitle;
  Content: typeof CardContent;
  Button: typeof CardButton;
} = ({ children, special = false }) => {
  return <div className={`card ${special ? "special" : ""}`}>{children}</div>;
};

Card.Image = CardImage;
Card.Title = CardTitle;
Card.Content = CardContent;
Card.Button = CardButton;

export default Card;
