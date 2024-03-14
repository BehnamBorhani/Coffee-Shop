import connectToDB from "@/configs/db";

export const GET = async (req, res) => {
  await connectToDB();

  return Response.json({ message: "Success Response" }, { status: 200 });
};
