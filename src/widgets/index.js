import Bestseller from './bestseller';
import Introduction from './introduction';
import NewArrival from './newArrival';

const widgets = [
  {
    id: 1,
    name: 'introduction',
    component: <Introduction />,
    isShown: true,
    title: null,
  },
  {
    id: 2,
    name: 'newArrival',
    component: <NewArrival />,
    isShown: true,
    title: 'New Arrival',
  },
  {
    id: 3,
    name: 'bestsellers',
    component: <Bestseller />,
    isShown: true,
    title: 'Bestseller',
  },
];

export default widgets;
