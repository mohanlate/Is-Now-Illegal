/* eslint-disable import/prefer-default-export */

import { SUBJECT_PATTERN_REJECT } from './constants';

export function removeIllegalCharacters(str) {
  // remove invalid characters and trim
  return str.replace(SUBJECT_PATTERN_REJECT, '').replace(/\s+/g, ' ').substr(0, 10);
}

export function formatSubject(str) {
  return removeIllegalCharacters(str).trim();
}
