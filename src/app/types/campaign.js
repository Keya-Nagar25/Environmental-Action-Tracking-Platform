/**
 * @typedef {'Planting' | 'Cleanup' | 'Solar' | 'Education' | 'Recycling' | 'Other'} CampaignType
 */

/**
 * @typedef {Object} Campaign
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {import('../types').User} organizer
 * @property {CampaignType} type
 * @property {number} requiredMembers
 * @property {number} currentMembers
 * @property {string} image
 * @property {boolean} isClosed
 * @property {boolean} joined
 */
