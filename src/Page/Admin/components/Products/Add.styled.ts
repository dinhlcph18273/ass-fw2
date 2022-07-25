import styled from "styled-components";

export const Breadcrumb = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Upload = styled.div``;

export const UploadBtn = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 300px;
  background: #fff;
  display: flex;
  border-radius: 5px;
  cursor: pointer;
  flex-direction: column;
  gap: 30px;
  font-size: 22px;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  padding: 10px;
  background:none ;

  ::before {
    position: absolute;
    content: "";
    left: -20px;
    right: -20px;
    height: 1px;
    background: #acacac23;
    bottom: 0;
  }
`;

export const ImgPre = styled.img`
  width: 100%;
  object-fit: contain;
  padding: 10px;
  transform: scale(1) !important;
`;
