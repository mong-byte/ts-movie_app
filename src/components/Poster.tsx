import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface PosterPropsTypes {
  id: number;
  imageUrl?: string;
  title: string;
  rating?: number;
  year?: string;
  isMovie?: boolean;
}

const Poster: React.FC<PosterPropsTypes> = ({
  id,
  imageUrl,
  title,
  rating,
  year,
  isMovie = false,
}) => {
  return (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
      <Container>
        <ImageContainer>
          <Image bgUrl={`http://image.tmdb.org/t/p/w300${imageUrl}`} />
          <Rating>
            <span role="img" aria-label="rating">
              ⭐️
            </span>
            {rating}/10
          </Rating>
        </ImageContainer>
        <Title>
          {title.length > 18 ? `${title.substring(0, 18)}...` : title}
        </Title>
        <Year>{year}</Year>
      </Container>
    </Link>
  );
};

export default Poster;

interface ImagePropsTypes {
  bgUrl: string;
}

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div<ImagePropsTypes>`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1 linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(2555, 255, 255, 0.5);
`;
