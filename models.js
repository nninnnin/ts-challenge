class Todo {
  /**
   * @typedef Tags
   * @type {Object}
   * @property {number} id
   * @property {string} name
   */

  /**
   *
   * @param {number} id
   * @param {string} contents
   * @param {boolean} completed
   * @param {string} category
   * @param {Array.<Tags>} [tags]
   */
  constructor(id, contents, completed, category, tags) {}
}

export { Todo };
