import { Action, List } from "../types/types";

export default function reducer(list: List, action: Action): List {
  switch (action.type) {
    case "set-items":
      return {
        ...list,
        items: action.payload
      }
    case "set-input":
      return {
        ...list,
        input: action.payload
      }
    case 'set-warning':
      return {
        ...list,
        warning: action.payload
      }
    case 'set-favorite':
      return {
        ...list,
        favorite: action.payload
      }
    case 'set-toast':
      return {
        ...list,
        toast: action.payload
      }
    case 'set-settings-dropdown':
      return {
        ...list,
        settingsDropdown: action.payload
      }
    case 'set-mode':
      return {
        ...list,
        mode: action.payload
      }
    case 'set-current-theme':
      return {
        ...list,
        currentTheme: action.payload
      }
    case 'set-profile-dropdown':
      return {
        ...list,
        profileDropdown: action.payload
      }
    case 'set-custom-profile':
      return {
        ...list,
        customProfile: action.payload
      }
    case 'set-only-checked':
      return {
        ...list,
        onlyChecked: action.payload
      }
    case 'set-clear-buttons':
      return {
        ...list,
        clearButtons: action.payload
      }
  }
}