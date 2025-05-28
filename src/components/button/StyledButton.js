import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const ColorButton = styled(Button)(() => ({
  color: green[500], // Изначально текст зеленый
  border: `1px solid ${green[500]}`, // Зеленая граница вокруг кнопки
  transition: 'all 0.3s ease-in-out', // Плавная анимация перехода состояний
  fontWeight: 'bold',
  borderRadius: 10,
  height: 50,
  '&:hover': {
    backgroundColor: green[700], // Фон становится темно-зеленым при наведении
    color: '#ffffff', // Текст становится белым при наведении
  },
}));

export default function StyledButton(props) {
  return <ColorButton {...props} />;
}