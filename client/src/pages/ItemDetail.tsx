import { styled } from 'styled-components';
import { Nav } from 'components/Nav';
import { LikeButton } from 'feature/LikeButton';
import { ReviewList } from 'feature/ReviewList';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

interface ImageProps {
  img: string;
}

export const ItemDetail = () => {
  const location = useLocation();
  const item = location.state;

  const [review, setReview] = useState('');

  const reviewHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setReview(e.currentTarget.value);
  };

  const SubmitReviewHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Nav />
      <Wrapper>
        <ItemWrapper>
          <Image img={item.url} />
          <ItemInfo>
            <h1 className="title">{item.title}</h1>
            <div className="price">10,000원</div>
            <div className="point">100포인트</div>
            <p className="detail">
              100% 천연 커피 점토만을 사용하여 만들어진 연필입니다 ! 100% 천연
              커피 점토만을 사용하여 만들어진 연필입니다 ! 100% 천연 커피
              점토만을 사용하여 만들어진 연필입니다 ! 100% 천연 커피 점토만을
              사용하여 만들어진 연필입니다 ! 100% 천연 커피 점토만을 사용하여
              만들어진 연필입니다 ! 100% 천연 커피 점토만을 사용하여 만들어진
              연필입니다 !100% 천연 커피 점토만을 사용하여 만들어진 연필입니다 !
              100% 천연 커피 점토만을 사용하여 만들어진 연필입니다 ! 100% 천연
              커피 점토만을 사용하여 만들어진 연필입니다 ! 100% 천연 커피
              점토만을 사용하여 만들어진 연필입니다 ! 100% 천연 커피 점토만을
              사용하여 만들어진 연필입니다 ! 100% 천연 커피 점토만을 사용하여
              만들어진 연필입니다 !100% 천연 커피 점토만을 사용하여 만들어진
              연필입니다 ! 100% 천연 커피 점토만을 사용하여 만들어진 연필입니다
              ! 100% 천연 커피 점토만을 사용하여 만들어진 연필입니다 ! 100% 천연
              커피 점토만을 사용하여 만들어진 연필입니다 ! 100% 천연 커피
              점토만을 사용하여 만들어진 연필입니다 ! 100% 천연 커피 점토만을
              사용하여 만들어진 연필입니다 !
            </p>
            <ButtonWrapper>
              <BuyButton onClick={() => window.open('https://www.naver.com/')}>
                구매하기
              </BuyButton>

              <div className="likebutton">
                <LikeButton
                  id={item.id}
                  title={item.title}
                  url={item.url}
                  heart={item.heart}
                />
              </div>
            </ButtonWrapper>
          </ItemInfo>
        </ItemWrapper>
        {/* 리뷰 표시 */}
        <ReviewWrapper>
          리뷰 2개
          <InputWrapper onSubmit={SubmitReviewHandler}>
            <Input
              maxRows={4}
              value={review}
              placeholder="리뷰를 작성해보세요!"
              onChange={reviewHandler}
            />
            <InputButton type="submit">등록</InputButton>
          </InputWrapper>
          <ReviewList />
        </ReviewWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  border: 0.1rem solid var(--green-100);
  border-radius: 0.5rem;
  background-color: var(--white);

  margin: 1rem;
  padding: 1rem;
`;

// item detail style
//
const ItemWrapper = styled.div`
  display: flex;

  border-bottom: 0.1rem solid var(--gray);
  padding: 2rem;
`;

const Image = styled.div<ImageProps>`
  width: 16rem;
  height: 13rem;
  flex-shrink: 0;

  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`;

const ItemInfo = styled.div`
  margin-left: 2rem;

  > * {
    margin-bottom: 0.5rem;
  }

  .title {
    font-weight: bold;
    font-size: 1.5rem;
  }

  .point {
    font-weight: bold;
    color: var(--green-300);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  .likebutton {
    position: relative;
    padding: 1rem;
    margin-left: 1rem;
  }
`;

const BuyButton = styled.button`
  cursor: pointer;

  background-color: var(--green-100);
  border: none;
  border-radius: 0.5rem;

  font-size: 1.25rem;
  color: var(--white);

  width: 100%;
  height: 3rem;

  &:hover {
    background-color: var(--green-200);
  }
`;

// review style
//
const ReviewWrapper = styled.div`
  padding: 2rem;
`;
const InputWrapper = styled.form`
  display: flex;
  align-items: center;

  margin: 1rem 0;
`;

const Input = styled(TextareaAutosize)`
  width: 90%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 4px;

  resize: none;

  &::placeholder {
    color: var(--gray);
  }
`;

const InputButton = styled.button`
  cursor: pointer;

  background-color: var(--green-100);
  border: none;
  border-radius: 0.5rem;

  font-size: 1.25rem;
  color: var(--white);

  width: 7rem;
  height: 3rem;
  margin-left: 1rem;

  &:hover {
    background-color: var(--green-200);
  }
`;
