import { SearchCard, SearchImgWrapper } from "../../styled_css/common/SearchCard";
import { styled } from "styled-components"
import { StarIcon } from "../../styled_css/common/StarIcon";
import { useRef } from "react";
import { Link } from "react-router-dom";
const ShowCard = ({ id, name, summary, image, onStar, isStarred }) => {
  const summaryGrid = summary ?
    summary.split(' ').slice(0, 11).join(' ').replace(/<.+?>/g, '') + '...'
    : 'No Summary';
  const nativeHtmlEleRef = useRef();
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>
      <h1>{name}</h1>
      <p>{summaryGrid}</p>
      <ActionSection>
        <Link to={`/show/${id}`} target="_blank" rel="noreferrer">Read More</Link>
        <StarBtn ref={nativeHtmlEleRef} type="button" onClick={() => {
          onStar(id);
          if (!nativeHtmlEleRef) {
            return;
          }
          if (nativeHtmlEleRef) {
            if (isStarred) {
              nativeHtmlEleRef.current.classList.remove('animate');
            }
            else {
              nativeHtmlEleRef.current.classList.add('animate');
            }
          }
        }}
        // className={isStarred && 'animate'}
        >
          {/* {
              isStarred ? 'Unstar Me' : 'Star Me'
            } */}
          <StarIcon active={isStarred} />
        </StarBtn>
      </ActionSection>
    </SearchCard>
  )
}

export default ShowCard

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &.animate {
    ${StarIcon} {
      animation: increase 0.75s ease-in forwards;
      @keyframes increase {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(3) rotate(45deg);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;
