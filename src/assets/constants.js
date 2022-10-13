import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';

export const genres = [
  { title: 'Rock', value: 'ROCK' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'Pop', value: 'POP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Alternative', value: 'ALTERNATIVE' },
  { title: 'Film', value: 'FILM_TV' },
  { title: 'K-Pop', value: 'K_POP' },
  { title: 'Soul', value: 'SOUL_RNB' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  { title: 'Country', value: 'COUNTRY' },
  { title: 'Worldwide', value: 'WORLDWIDE' },
  { title: 'House', value: 'HOUSE' },  
  { title: 'Latin', value: 'LATIN' },
];

export const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
];
