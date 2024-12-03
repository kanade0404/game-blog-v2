import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const secret = searchParams.get("secret");
	const recordID = searchParams.get("id");
	if (
		!process.env.DRAFT_MODE_TOKEN ||
		secret !== (process.env.DRAFT_MODE_TOKEN as string)
	) {
		return new Response("Invalid secret", { status: 401 });
	}
	if (!recordID) {
		return new Response("No slug provided", { status: 400 });
	}
	(await draftMode()).enable();
	return redirect(`/article/${recordID}`);
}
