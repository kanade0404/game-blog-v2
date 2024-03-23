"use client";
import { captureException, flush } from "@sentry/nextjs";
export default async function GlobalError({
	error,
	reset,
}: { error: Error; reset: () => void }) {
	captureException(error);
	await flush(2000);
	return (
		<div>
			<p>{error.message}</p>
			<button type="button" onClick={reset}>
				Reset
			</button>
		</div>
	);
}
