const ERRORS = {
  INVALID_PASSWORD: 'Не правильный пороль',
  EMAIL_NOT_FOUND: 'Пользователь с таким email не найден',
  auth: 'Пожалуйста войдите в систему',
}

export function error(code) {
  return ERRORS[code] ? ERRORS[code] : 'Неизвестная ошибка'
}
