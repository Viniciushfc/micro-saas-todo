import { auth } from "@/service/auth"

export default async function Page() {

    const session = await auth()

    return <pre>{JSON.stringify(session?.user?.email, null, 1)}</pre>
}