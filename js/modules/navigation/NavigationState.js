import {Map} from 'immutable';

export type Tab =
    'home'
  | 'list'
  | 'profile'
  | 'map'
  | 'more';

const initialState = Map({
  tab: 'home'
})

// Actions
const SWITCH_TAB = 'NavigationState/SWITCH_TAB';

export function onTabSwitch(tab) {
  return {
    type: 'SWITCH_TAB',
    tab: tab
  }
}

// Reducer
export default function NavigationReducer(state = initialState, action) {
  switch (action.type) {
    case 'SWITCH_TAB':
      return state
        .set('tab', action.tab);
    default:
      return state;
  }
}

