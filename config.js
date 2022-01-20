const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "http://shikshaplatform.io/",
		"gaTrackingId": null
	},
	"header": {
		"logo": "",
		"logoLink": "http://shikshaplatform.io",
		"title": "Shiksha for Developers",
		"githubUrl": "https://github.com/shiksha-platform",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "Github", "link": "https://github.com/shiksha-platform" }
		],
		"search": {
			"enabled": false,
			"indexName": "DEV_shiksha",
			"algoliaAppId": "2Y9CZOBKNK",
			"algoliaSearchKey": "5c64c21b906ecb2f6ab59b78f119586a",
			"algoliaAdminKey": "4c10dd346708cec47e67cedbb2601eee"
		}
	},
	"sidebar": {
		"forcedNavOrder": [
            "/",
            "ReleaseHistory",
			"Core",
			"Core/Transaction Layer Specification",
			"Core/Infrastructure Layer Specification",
			"Mobility"
		],
		"links": [
			{ "text": "Code of sharing", "link": "http://shikshaplatform.io//code-of-sharing/" },
		],
		"frontline": false,
		"ignoreIndex": false,
	},
	"siteMetadata": {
		"title": "shiksha for Developers",
		"description": "Documentation for developers of the Shiksha Ecosystem",
		"ogImage": null,
		"docsLocation": "https://github.com/shiksha-platform",
		"favicon": "https://github.com/shiksha-platform/shiksha-marker.png",
		"logo" : ""
	},
};

module.exports = config;
