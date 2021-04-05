export const MainStorage = {

  countries: [
    { id: 1, value: 'Albania' },
    { id: 2, value: 'Algeria' },
    { id: 3, value: 'Andorra' },
    { id: 4, value: 'Angola' },
    { id: 5, value: 'Antigua and Barbuda' },
    { id: 6, value: 'Argentina' },
    { id: 7, value: 'Armenia' },
    { id: 8, value: 'Australia' },
    { id: 9, value: 'Austria' },
    { id: 10, value: 'Azerbaijan' },
    { id: 11, value: 'Bahrain' },
    { id: 12, value: 'Bangladesh' },
    { id: 13, value: 'Barbados' },
    { id: 14, value: 'Belarus' },
    { id: 15, value: 'Belgium' },
    { id: 16, value: 'Belize' },
    { id: 17, value: 'Benin' },
    { id: 18, value: 'Bhutan' },
    { id: 19, value: 'Bolivia' },
    { id: 20, value: 'Bosnia and Herzegovina' },
    { id: 21, value: 'Botswana' },
    { id: 22, value: 'Brazil' },
    { id: 23, value: 'Brunei' },
    { id: 24, value: 'Bulgaria' },
    { id: 25, value: 'Burkina Faso' },
    { id: 26, value: 'Burundi' },
    { id: 27, value: 'Cambodia' },
    { id: 28, value: 'Cameroon' },
    { id: 29, value: 'Canada' },
    { id: 30, value: 'Cape Verde' },
    { id: 31, value: 'Central African Republic' },
    { id: 32, value: 'Chad' }
  ],

  /**
   * @return {{}[]}
   */
  getCountries: function() {
    return this.countries
  },

  persons: [
    { id: '1', person: 'Mary Beth Brianna', account: 125 },
    { id: '2', person: 'Rhys Lyndsea', account: 132 },
    { id: '3', person: 'Bennie Cam', account: 754 },
    { id: '4', person: 'Victor Lana', account: 904 },
    { id: '5', person: 'Jacklyn Marlena', account: 623 },
    { id: '6', person: 'Haleigh Kaylee', account: 396 }
  ],

  /**
   * @return {{}[]}
   */
  getPersons: function() {
    return this.persons
  }
}