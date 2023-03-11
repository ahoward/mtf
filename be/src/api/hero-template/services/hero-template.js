'use strict';

/**
 * hero-template service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hero-template.hero-template');
