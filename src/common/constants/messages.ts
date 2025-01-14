/* eslint-disable prettier/prettier */

/**
 * ! Exception Message Format :
 * ! ??x??????
 * ! The First 2 digits represent prefix type for exceptions
 * ! The last 6 digits represent the exception details
 */

/**
 * NOT_FOUND PREFIX 01x
 * UNAUTHORIZED PREFIX 02x
 * OTHER PREFIX 99x
 */

export enum MSG_EXCEPTION {
  NOT_FOUND_USER = '01x000001',
  NOT_FOUND_ROLE = '01x000002',
  NOT_FOUND_PERMISSION = '01x000003',
  NOT_FOUND_TOKEN = '01x000004',
  UNAUTHORIZED_USER = '02x000001',
  UNAUTHORIZED_TOKEN = '02x000002',
  UNAUTHORIZED_TOKEN_EXPIRED = '02x000003',
  UNAUTHORIZED_TOKEN_NOT_FOUND = '02x000004',
  UNAUTHORIZED_ROLE = '02x000005',
  UNAUTHORIZED_PERMISSIONS = '02x000006',
  OTHER_ALREADY_IN_USE_EMAIL = '99x000001',
  OTHER_BAD_PASSWORD = '99x000002',
}