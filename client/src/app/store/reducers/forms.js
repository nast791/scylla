import {FORM_CHANGE} from "../../utils/actions";

const initialState = {
  login: {
    title: 'Войти',
    isFormValid: false,
    isFormTouched: false,
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
    isFormTouched: false,
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
        errorMessage: 'Введите не менее 2 и не более 20 символов без пробелов',
        valid: false,
        touched: false,
        trim: true,
        validation: {
          required: true,
          minLength: 2,
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
    isFormValid: true,
    isFormTouched: false,
    formControls: {
      avatar: {
        value: '',
        type: 'file',
        label: 'Аватар',
        errorMessage: '',
        valid: true,
        touched: false,
        trim: false,
        formData: null
      },
      nickname: {
        value: '',
        type: 'text',
        label: 'Никнейм',
        errorMessage: '',
        valid: true,
        touched: false,
        trim: false,
        readonly: true
      },
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: '',
        valid: true,
        touched: false,
        trim: false,
        readonly: true
      },
      name: {
        value: '',
        type: 'text',
        label: 'Имя',
        data: 'true',
        errorMessage: 'Введите не менее 2 и не более 20 символов без пробелов',
        valid: true,
        touched: false,
        trim: true,
        validation: {
          required: true,
          minLength: 2,
          maxLength: 20,
          noSpaces: true
        }
      },
      surname: {
        value: '',
        type: 'text',
        label: 'Фамилия',
        errorMessage: 'Введите слово без пробелов',
        valid: true,
        touched: false,
        trim: true,
        validation: {
          noSpaces: true
        }
      },
      gender: {
        value: '',
        options: ['Мужской', 'Женский'],
        type: 'radio',
        label: 'Пол',
        errorMessage: '',
        valid: true,
        touched: false,
        trim: false
      },
      birthDate: {
        value: '',
        type: 'date',
        label: 'Дата рождения',
        errorMessage: '',
        valid: true,
        touched: false,
        trim: false
      },
      city: {
        value: '',
        type: 'text',
        label: 'Родной город',
        errorMessage: '',
        valid: true,
        touched: false,
        trim: false
      },
      family: {
        value: '',
        type: 'select',
        options: ['', 'В поиске', 'Есть вторая половинка', 'В браке', 'Все сложно'],
        label: 'Семейное положение',
        errorMessage: '',
        valid: true,
        touched: false,
        trim: false,
      },
      status: {
        value: '',
        type: 'text',
        label: 'Статус',
        errorMessage: '',
        valid: true,
        touched: false,
        trim: false
      },
      hobby: {
        value: '',
        type: 'text',
        label: 'Увлечения',
        errorMessage: '',
        valid: true,
        touched: false,
        trim: false
      }
    }
  },
};

export default function common(state = initialState, action) {
  switch (action.type) {
    case FORM_CHANGE:
      return {
        ...state, [action.formName]: action.form
      };
    default:
      return state;
  }
}