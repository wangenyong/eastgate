import {Map} from 'immutable';

const initialState = Map({
items: [
    {
      key: 0,
      title: "apple",
      isFA: false,
      icon: "logo-apple",
      size: 54,
      color: "#ff856c"
    },
    {
      key: 1,
      title: "facebook",
      isFA: false,
      icon: "logo-facebook",
      size: 50,
      color: "#90bdc1"
    },
    {
      key: 2,
      title: "twitter",
      isFA: false,
      icon: "logo-twitter",
      size: 45,
      color: "#2aa2ef"
    },
    {
      key: 3,
      title: "whatsapp",
      isFA: false,
      icon: "logo-whatsapp",
      size: 45,
      color: "#cddc39"
    },
    {
      key: 4,
      title: "snapchat",
      isFA: false,
      icon: "logo-snapchat",
      size: 50,
      color: "#ffc107"
    },
    {
      key: 5,
      title: "skype",
      isFA: false,
      icon: "logo-skype",
      size: 50,
      color: "#ff4081"
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
