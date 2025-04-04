/** @type {import('next').NextConfig} */
const { withSentryConfig } = require("@sentry/nextjs");
const withBundleAnalyzer =
	process.env.ANALYZE === "true"
		? require("@next/bundle-analyzer")({ enabled: true })
		: (config) => config;
const sentryWebpackPluginOptions = {
	// Additional config options for the Sentry webpack plugin. Keep in mind that
	// the following options are set automatically, and overriding them is not
	// recommended:
	//   release, url, configFile, stripPrefix, urlPrefix, include, ignore

	org: process.env.SENTRY_ORG,
	project: process.env.SENTRY_PROJECT,

	// An auth token is required for uploading source maps.
	authToken: process.env.SENTRY_AUTH_TOKEN,

	silent: false, // Suppresses all logs

	// For all available options, see:
	// https://github.com/getsentry/sentry-webpack-plugin#options.
};
const nextConfig = {
	reactStrictMode: true,
};
module.exports = process.env.SENTRY_AUTH_TOKEN
	? withBundleAnalyzer(withSentryConfig(nextConfig, sentryWebpackPluginOptions))
	: withBundleAnalyzer(nextConfig);
