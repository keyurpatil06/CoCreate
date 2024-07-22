import CollaborativeRoom from "@/components/CollaborativeRoom"
import { getDocument } from "@/lib/actions/room.actions";
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

const Document = async ({ params: { id } }: SearchParamProps) => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect('/');

  const room = await getDocument({
    roomId: id,
    userId: clerkUser.emailAddresses[0].emailAddress,
  });

  if (!room) redirect('/');

  // TODO: Access the permission of the user to access the document

  return (
    <main className="flex w-full items-center ">
      <CollaborativeRoom
        roomId={id}
        roomMetadata={room.metadata}
      />
    </main>
  )
}

export default Document
