import styled, { css } from "styled-components";

import { Button, Label } from "reactstrap";

import { FaCalendarAlt } from "react-icons/fa";

export const TitleStyles = css`
  display: block;
  font-weight: 700;
  margin: 20px 0;
`;

export const SubTitle = styled.span`
  ${TitleStyles}
  font-size: 15px;
`;

export const FormTitle = styled.span`
  font-weight: 700;
`;

export const Wrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ClearButton = styled(Button)`
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
`;

export const StyledButton = styled.div`
  background-color: white;
  border: solid 0.1em #cbd4c9;
  border-radius: 0.25em;
  padding: 0.3em 1.6em 0 1.6em;

  display: flex;
  justify-content: space-between;
`;

export const StyledLabel = styled(Label)`
  margin-right: 10px;
`;

export const DatePickerWrapper = styled.div`
  display: flex;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
`;

export const CalendarIcon = styled(FaCalendarAlt)`
  margin-left: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-tems: center;
`;

export const Format = styled.span`
  font-size: 15px;
  margin-left: 7px;
  display: flex;
  align-items: center;
`;
