/* Patterns bundle configuration.
 *
 * This file is used to tell r.js which Patterns to load when it generates a
 * bundle. This is only used when generating a full Patterns bundle, or when
 * you want a simple way to include all patterns in your own project. If you
 * only want to use selected patterns you will need to pull in the patterns
 * directly in your RequireJS configuration.
 */
define([
    "jquery",
    "pat-registry",
    "modernizr",
    // "prefixfree",
    // "scroll-detection",
    "pat-ajax",
    "pat-autofocus",
    // "pat-autoscale",
    "pat-autosubmit",
    // "pat-autosuggest",
    // "pat-breadcrumbs",
    // "pat-bumper",
    // "pat-calendar",
    // "pat-carousel",
    "pat-checklist",
    // "pat-chosen",
    // "pat-clone",
    "pat-collapsible",
    // "pat-colour-picker",
    "pat-content-mirror",
    // "pat-date-picker",
    "pat-depends",
    "pat-display-time",
    "pat-equaliser",
    // "pat-expandable",
    "pat-focus",
    "pat-form-state",
    "pat-forward",
    // "pat-gallery",
    // "pat-image-crop",
    "pat-inject",
    "pat-input-change-events",
    // "pat-legend",
    "pat-markdown",
    "pat-menu",
    "pat-modal",
    "pat-navigation",
    "pat-notification",
    // "pat-masonry",
    // "pat-placeholder",
    "pat-scroll",
    "pat-scroll-box",
    "pat-selectbox",
    // "pat-slides",
    // "pat-slideshow-builder",
    // "pat-sortable",
    "pat-stacks",
    "pat-sticky",
    "pat-subform",
    "pat-switch",
    // "pat-syntax-highlight",
    // "pat-tabs",
    "pat-toggle",
    "pat-tooltip",
    // "pat-url",
    "pat-validation"
    // "pat-zoom"
], function($, registry) {
    // Since we are in a non-AMD env, register a few useful utilites
    var window = require("window");
    window.jQuery = $;
    require("imports-loader?this=>window!jquery.browser");

    $(function () {
        registry.init();
    });
    return registry;
});

