export default class ApiError extends Error {
  status;
  errors?: any[] = [];
  constructor(status: number, message: string, errors: any[] = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizeError() {
    return new ApiError(401, 'Пользователь не авторизован');
  }

  static BadRequest(message: string, errors?: any[]) {
    return new ApiError(400, message, errors);
  }
}
