import * as Sentry from "@sentry/nextjs";

Sentry.init({
	dsn: "https://87b41b01b0c4c3f2f1e1477b7ad6542f@o4505703537115136.ingest.sentry.io/4506086713720832",
	// Adjust this value in production, or use tracesSampler for greater control
	tracesSampleRate: 0.5,
	// ...
	// Note: if you want to override the automatic release value, do not set a
	// `release` value here - use the environment variable `SENTRY_RELEASE`, so
	// that it will also get attached to your source maps
});
