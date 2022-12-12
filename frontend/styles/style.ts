import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex: 1;
  background-color: #0a0903;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #ff0000;
  padding: 5px;
  font-size: 45px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  margin-top: 25px;
  padding: 14px;
  background-color: #ff0000;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

export const TextBottom = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 800;
`;

export const Label = styled.Text`
  font-size: 20px;
  color: #fff;
  align-self: flex-start;
  margin-bottom: 5px;
`;

export const Form = styled.View`
  padding-top: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 95%;
  height: 50%;
  align-items: center;
  justify-content: flex-start;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: #f8f8f8;
  margin-bottom: 20px;
`;
