// noinspection SpellCheckingInspection
import products from './products.json'

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
    { id: 30, value: 'Cape Verde Central African Republic Central African Republic Central African Republic Central African Republic' },
    { id: 31, value: 'Central African Republic Central African Republic Central African Republic Central African Republic Central African Republic' },
    { id: 32, value: 'Chad' }
  ],

  /**
   * @returns {{}[]}
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
    { id: '6', person: 'Haleigh Kaylee', account: 396 },

    { id: '7', person: 'Esme Coleman', account: 985 },
    { id: '8', person: 'Michelle Morrison', account: 382 },
    { id: '9', person: 'Heather Hughes', account: 301 },
    { id: '10', person: 'Dewey Ellis', account: 672 },
    { id: '11', person: 'Gabriella Ryan', account: 290 },
    { id: '12', person: 'Taylor Stewart', account: 662 },

    { id: '13', person: 'Madison Arnold', account: 583 },
    { id: '14', person: 'Kevin Lawrence', account: 549 },
    { id: '15', person: 'Madison Lynch', account: 775 },
    { id: '16', person: 'Grover Robinson', account: 764 },
    { id: '17', person: 'Lois Cooper', account: 252 },
    { id: '18', person: 'Freya White', account: 693 },

    { id: '19', person: 'Madison Hamilton', account: 527 },
    { id: '20', person: 'Tommy Miller', account: 87 },
    { id: '21', person: 'Ella Patterson', account: 480 },
    { id: '22', person: 'Casey Lane', account: 636 },
    { id: '23', person: 'Fraser Dunn', account: 907 },
    { id: '24', person: 'Joshua Castillo', account: 418 },

    { id: '25', person: 'Elise Butler', account: 703 },
    { id: '26', person: 'Imogen Adams', account: 113 },
    { id: '27', person: 'Edward Rogers', account: 557 },
    { id: '28', person: 'Harrison Chapman', account: 668 },
    { id: '29', person: 'Katherine Berry', account: 783 },
    { id: '30', person: 'Nannie O\'Moore', account: 886 },

    { id: '31', person: 'Rebecca Lewis', account: 207 },
    { id: '32', person: 'Lloyd Simpson', account: 394 },
    { id: '33', person: 'Judith John', account: 178 },
    { id: '34', person: 'Mary Bentley', account: 756 },
    { id: '35', person: 'Sharon Wheeler', account: 337 },
    { id: '36', person: 'Barbara Barrett', account: 60 },

    { id: '37', person: 'Carol Holt', account: 16 },
    { id: '38', person: 'Nancy Cannon', account: 885 },
    { id: '39', person: 'Patricia Leon', account: 866 },
    { id: '40', person: 'Zahra Tate', account: 377 },
    { id: '41', person: 'Sienna Lin', account: 110 },
    { id: '42', person: 'Alfie Best', account: 900 },

    { id: '43', person: 'Charlotte Small', account: 394 },
    { id: '44', person: 'Tilly Kelly', account: 373 },
    { id: '45', person: 'Louisa Todd', account: 280 },
    { id: '46', person: 'Ebony Bowman', account: 324 },
    { id: '47', person: 'Hazel Richard', account: 941 },
    { id: '48', person: 'Rosa Lloyd', account: 263 }
  ],

  /**
   * @returns {{}[]}
   */
  getPersons: function() {
    return this.persons
  },

  /**
   * @returns {*[]}
   */
  getProducts: function() {
    return products
  }
}