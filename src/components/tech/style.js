import styled from "styled-components";

export const Technology = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 796px;
  margin: 0 auto;
  h2 {
    color: white;
  }
  p {
    color: white;
  }
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img {
    cursor: pointer;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: var(--grey-3);
    padding: 22px;
  }
  li {
    background-color: var(--grey-4);
    border-radius: 4px;
    height: 49px;
    padding: 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  li > h2 {
    font-size: 15px;
  }
  li:hover {
    background-color: var(--grey-2);
  }
  .list-tech {
    display: flex;
    gap: 25px;
  }
  @media (max-width: 799px) {
    width: 100%;
    padding: 10px;
  }
  .not-tech {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--grey-3);
    padding: 40px;
    cursor: pointer;
  }
`;
