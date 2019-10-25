export const EMAIL_VALIDATION_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const CONTAINS_LETTER = /(.*[a-zA-Z].*)/;
export const CONTAINS_NUMBER = /(.*[0-9].*)/;
export const CONTAINS_SPECIAL_CHARACTER = /(.*[-+_!@#$%^&*().,].*)/;
export const PHONE_NUMBER_FORMAT = /^(\d{3})(\d{3})(\d{4})$/;
export const WEBSITE_VALIDATION = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;