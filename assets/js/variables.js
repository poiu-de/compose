// global variables;
const doc = document.documentElement;
const toggleId = 'toggle';
const showId = 'show';
const menu = 'menu';
const active = 'active';
// root_url must end with '/' for relative URLs to work properly
let root_url = '{{ strings.TrimSuffix "/" .Site.BaseURL }}/';
root_url = root_url.startsWith('http') ? root_url : window.location.origin;


// defined in config.toml
const rootURL = '{{ absURL "" }}';

// defined in i18n / translation files
const quickLinks = '{{ T "quick_links" }}';
const searchResultsLabel = '{{ T "search_results_label" }}';
const shortSearchQuery = '{{ T "short_search_query" }}'
const typeToSearch = '{{ T "type_to_search" }}';
const noMatchesFound = '{{ T "no_matches" }}';
