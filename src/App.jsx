import * as S from './Style.jsx'
import { Carousel } from 'nuka-carousel';
import cao1 from './assets/images/cao1.jpg'
import cao2 from './assets/images/cao2.jpg'
import cao3 from './assets/images/cao3.jpg'
import cao4 from './assets/images/cao4.jpg'
import cao5 from './assets/images/cao5.jpg'    

const App = () => {
  return (
    <Carousel autoplay showDots>
      <div className='S.Caixa'><S.Img src = {cao1} /> </div>
      <div className='S.Caixa'><S.Img src = {cao2} /> </div>
      <div className='S.Caixa'><S.Img src = {cao3} /> </div>
      <div className='S.Caixa'><S.Img src = {cao4} /> </div>
      <div className='S.Caixa'><S.Img src = {cao5} /> </div>
    </Carousel>
  );
};

export default App
