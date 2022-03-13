//Import Images
import athlete from './img/athlete-small.png';
import goodtimes from './img/goodtimes-small.png';
import theracer from './img/theracer-small.png';
import athlete2 from './img/athlete2.png';
import goodtimes2 from './img/good-times2.jpg';
import theracer2 from './img/the-racer2.jpg';

export const MovieState = () => {
  return [
    {
      title: 'The Athlete',
      mainImg: athlete,
      secondaryImg: athlete2,
      url: '/work/the-athlete',
      awards: [
        {
          title: 'Truly a masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'A fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Heartracing.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'Good Times',
      mainImg: goodtimes,
      url: '/work/good-times',
      secondaryImg: goodtimes2,
      awards: [
        {
          title: 'Fantastic',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'A summer hit!',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'A new twist on young love.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'The Racer',
      mainImg: theracer,
      url: '/work/the-racer',
      secondaryImg: theracer2,
      awards: [
        {
          title: 'Hold on to your seats!',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Tokyo Drift this.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Pulse-pounding races at every turn!',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
  ];
};
