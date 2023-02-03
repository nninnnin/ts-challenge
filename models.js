class Todo {
  /**
   * @typedef Tags
   * @type {Object}
   * @property {number} id
   * @property {string} name
   */

  /**
   *
   * @param {number} id identifier
   * @param {string} contents contents of a todo item
   * @param {boolean} completed Whether todo is completed or not
   * @param {string} category Category of a todo item
   * @param {Array.<Tags>} [tags] Tags for a todo item
   */
  constructor(id, contents, completed, category, tags) {}
}

export { Todo };
