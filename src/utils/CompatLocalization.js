export const CompatLocalization = {

  locales: {
    'ru': 0
  },

  _locale: 'ru',
  _locale_number: 0,

  /**
   * @param {string} locale
   */
  define_locale: function(locale) {
    this._locale = locale
    this._locale_number = this.locales[locale]
  },

  /**
   * @param {number} month
   * @returns {string}
   */
  month_full: month => ({
    0: ['Январь'],
    1: ['Февраль'],
    2: ['Март'],
    3: ['Апрель'],
    4: ['Май'],
    5: ['Июнь'],
    6: ['Июль'],
    7: ['Август'],
    8: ['Сентябрь'],
    9: ['Октябрь'],
    10: ['Ноябрь'],
    11: ['Декабрь']
  })[month][CompatLocalization._locale_number],

  /**
   * @returns {string[]}
   */
  week_days: () => ({
    0: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение']
  })[CompatLocalization._locale_number],

  /**
   * @returns {string[]}
   */
  week_short_days: () => ({
    [CompatLocalization.locales['ru']]: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
  }[CompatLocalization._locale_number]),

  /**
   * @param {number} month
   * @param {number} year
   * @returns {number}
   */
  days_in_month: (year, month) => new Date(year, month + 1, 0).getDate(),

  /**
   * @param {number} year
   * @param {number} month
   * @param {number} date
   * @returns {number}
   */
  week_day_raw: (year, month, date) => new Date(year, month, date).getDay(),

  /**
   * @param {number} month
   * @param {number} year
   * @param {number} date
   * @returns {number}
   */
  week_day: (year, month, date) => ({
    [CompatLocalization.locales['ru']]: [6, 0, 1, 2, 3, 4, 5]
  })[CompatLocalization._locale_number][CompatLocalization.week_day_raw(year, month, date)],

  /**
   * @returns {number}
   */
  last_week_day: () => ({
    [CompatLocalization.locales['ru']]: 5
  })[CompatLocalization._locale_number],

  /**
   * @param {number} year
   * @param {number} month
   * @returns {number}
   */
  prev_month_year: (year, month) => month === 0 ? year - 1 : year,

  /**
   * @param {number} year
   * @param {number} month
   * @returns {number}
   */
  next_month_year: (year, month) => month === 11 ? year + 1 : year,

  /**
   * @param {number} month
   * @returns {number}
   */
  prev_month: month => month === 0 ? 11 : month - 1,

  /**
   * @param {number} month
   * @returns {*}
   */
  next_month: month => month === 11 ? 0 : month + 1
}