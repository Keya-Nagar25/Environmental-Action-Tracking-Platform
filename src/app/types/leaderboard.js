/**
 * @typedef {Object} LeaderboardEntry
 * @property {number} rank
 * @property {import('../types').User} user
 * @property {number} score
 * @property {number} reach
 * @property {'up' | 'down' | 'same'} trend
 */

/**
 * @typedef {Object} LeaderboardData
 * @property {LeaderboardEntry[]} weekly
 * @property {LeaderboardEntry[]} monthly
 * @property {LeaderboardEntry[]} allTime
 */
