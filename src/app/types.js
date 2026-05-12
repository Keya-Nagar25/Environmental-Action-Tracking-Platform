/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} username
 * @property {string} [name]
 * @property {string} avatar
 * @property {string} [bio]
 * @property {{ posts: number, followers: number, following: number, impactPoints: number }} [stats]
 * @property {string[]} [badges]
 */

/**
 * @typedef {Object} Post
 * @property {string} id
 * @property {string} userId
 * @property {User | { id: string, username: string, avatar: string }} user
 * @property {string} imageUrl
 * @property {string} caption
 * @property {number} likes
 * @property {number} comments
 * @property {string} timestamp
 * @property {string} category
 */

/**
 * @typedef {Object} Activity
 * @property {string} id
 * @property {'like' | 'comment' | 'follow'} type
 * @property {{ id: string, username: string, avatar: string }} user
 * @property {string} text
 * @property {string} timestamp
 * @property {string} [postImage]
 */
