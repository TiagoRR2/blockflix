import styled from "styled-components";
import Button from "components/Button";
import { ReactComponent as Redirect } from "assets/svgs/redirect.svg";
import { ReactComponent as AddToCart } from "assets/svgs/addToShoppingCart.svg";
import { Link } from "react-router-dom";

const baseURL = process.env.REACT_APP_IMAGES_BASE_URL;
const imageWidth = "342";

const CardContainer = styled.section`
  width: 342px;
`;

const CardHeader = styled.div`
  height: 65px;
`;

const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MovieCard = ({ id, title, poster_path, vote_average }) => {
  return (
    <CardContainer>
      <CardHeader>
        <h2>{title}</h2>
      </CardHeader>
      <img
        src={`${baseURL}w${imageWidth}${poster_path}`}
        alt={`Pôster do filme ${title}`}
      />
      <CardActions>
        <Link to={`/movie/${id}`}>
          <Redirect />
        </Link>
        <Button>
          <AddToCart />
          {vote_average.toFixed(2)}
        </Button>
      </CardActions>
    </CardContainer>
  );
};

export default MovieCard;
