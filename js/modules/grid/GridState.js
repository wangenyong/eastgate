import {Map} from 'immutable';

const initialState = Map({
  items: [
    {
      key: 0,
      title: "apple",
      isFA: false,
      icon: "logo-apple",
      size: 34,
      color: "#ff856c"
    },
    {
      key: 1,
      title: "facebook",
      isFA: false,
      icon: "logo-facebook",
      size: 30,
      color: "#90bdc1"
    },
    {
      key: 2,
      title: "twitter",
      isFA: false,
      icon: "logo-twitter",
      size: 25,
      color: "#2aa2ef"
    },
    {
      key: 3,
      title: "whatsapp",
      isFA: false,
      icon: "logo-whatsapp",
      size: 25,
      color: "#cddc39"
    },
    {
      key: 4,
      title: "snapchat",
      isFA: false,
      icon: "logo-snapchat",
      size: 30,
      color: "#ffc107"
    },
    {
      key: 5,
      title: "skype",
      isFA: false,
      icon: "logo-skype",
      size: 30,
      color: "#ff4081"
    },
    {
      key: 6,
      title: "chrome",
      isFA: false,
      icon: "logo-chrome",
      size: 30,
      color: "green"
    },
    {
      key: 7,
      title: "github",
      isFA: false,
      icon: "logo-github",
      size: 30,
      color: "black"
    },
    {
      key: 8,
      title: "google",
      isFA: false,
      icon: "logo-google",
      size: 30,
      color: "#ff5722"
    },
    {
      key: 9,
      title: "xbox",
      isFA: false,
      icon: "logo-xbox",
      size: 30,
      color: "#607d8b"
    }
  ]
})

// Reducer
export default function GridReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
