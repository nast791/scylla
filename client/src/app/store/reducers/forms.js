import {CHANGE_FORM} from "../../utils/actions";

const initialState = {
  login: {
    title: 'Войти',
    isFormValid: false,
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Введите корректный email',
        valid: false,
        touched: false,
        trim: true,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Пароль',
        errorMessage: 'Введите корректный пароль без пробелов',
        valid: false,
        touched: false,
        trim: true,
        validation: {
          required: true,
          minLength: 6,
          noSpaces: true
        }
      }
    }
  },
  register: {
    title: 'Зарегистрироваться',
    isFormValid: false,
    formControls: {
      nickname: {
        value: '',
        type: 'text',
        label: 'Уникальный никнейм',
        errorMessage: 'Введите не менее 3 и не более 20 символов без пробелов',
        valid: false,
        touched: false,
        trim: true,
        validation: {
          required: true,
          minLength: 3,
          maxLength: 20,
          noSpaces: true
        }
      },
      name: {
        value: '',
        type: 'text',
        label: 'Имя',
        errorMessage: 'Введите не менее 3 и не более 20 символов без пробелов',
        valid: false,
        touched: false,
        trim: true,
        validation: {
          required: true,
          minLength: 3,
          maxLength: 20,
          noSpaces: true
        }
      },
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Введите корректный email',
        valid: false,
        touched: false,
        trim: true,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Пароль',
        errorMessage: 'Введите не менее 6 символов без пробелов',
        valid: false,
        touched: false,
        trim: true,
        validation: {
          required: true,
          minLength: 6,
          noSpaces: true
        }
      },
      confirm: {
        value: '',
        type: 'password',
        label: 'Повторите пароль',
        errorMessage: 'Пароли должны совпадать (длина пароля не менее 6 символов)',
        valid: false,
        touched: false,
        trim: true,
        validation: {
          required: true,
          minLength: 6,
          confirm: true,
          noSpaces: true
        }
      }
    }
  },
  profile: {
    title: 'Профиль',
    isFormValid: false,
    formControls: {
      name: {
        value: '',
        type: 'text',
        label: 'Имя',
        errorMessage: 'Введите не менее 3 и не более 20 символов без пробелов',
        valid: false,
        touched: false,
        trim: true,
        validation: {
          required: true,
          minLength: 3,
          maxLength: 20,
          noSpaces: true
        }
      },
      surname: {
        value: '',
        type: 'text',
        label: 'Фамилия',
        errorMessage: 'Введите слово без пробелов',
        valid: false,
        touched: false,
        trim: true,
        validation: {
          noSpaces: true
        }
      },
      gender: { //переделать
        value: '',
        type: 'text',
        label: 'Пол',
        errorMessage: 'Введите не менее 3 символов без пробелов',
        valid: false,
        touched: false,
        trim: true,
        validation: {
          minLength: 3,
          noSpaces: true
        }
      },
      birthDate: {
        value: '',
        type: 'date',
        label: 'Дата рождения',
        errorMessage: 'Введите корректную дату',
        valid: false,
        touched: false,
        trim: true,
        validation: {
          minLength: 3,
          noSpaces: true,
          date: true
        }
      },
      city: {
        value: '',
        type: 'text',
        label: 'Родной город',
        errorMessage: '',
        valid: false,
        touched: false,
        trim: false
      },
      family: { //переделать
        value: '',
        type: 'text',
        label: 'Семейное положение',
        errorMessage: 'Введите не менее 3 символов без пробелов',
        valid: false,
        touched: false,
        trim: true,
        validation: {
          minLength: 3,
          noSpaces: true
        }
      },
      status: {
        value: '',
        type: 'text',
        label: 'Статус',
        errorMessage: '',
        valid: false,
        touched: false,
        trim: false
      },
      hobby: {
        value: '',
        type: 'text',
        label: 'Увлечения',
        errorMessage: '',
        valid: false,
        touched: false,
        trim: false
      },
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: '',
        valid: false,
        touched: false,
        trim: true,
        readonly: true
      }
    }
  },
};

export default function common(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return {
        ...state, [action.formName]: action.form
      };
    default:
      return state;
  }
}