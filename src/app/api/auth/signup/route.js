import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { generateAccessToken, hashPassword } from "@/utils/auth";
import { roles } from "@/utils/constants";

export const POST = async (req, res) => {
  await connectToDB();
  const body = await req.json();
  const { name, email, phone, password } = body;

  //TODO: check validation

  const isUserExist = await UserModel.findOne({
    $or: [{ name }, { email }, { phone }],
  });

  if (isUserExist) {
    return Response.json(
      {
        message: "The username or email or phone is already exist!!!",
      },
      { status: 422 },
    );
  }

  const hashedPassword = await hashPassword(password);
  const accessToken = generateAccessToken({ name });

  const users = await UserModel.find({});

  await UserModel.create({
    name,
    email,
    phone,
    password: hashedPassword,
    role: users.length > 0 ? roles.USER : roles.ADMIN,
  });

  return Response.json(
    { message: "User signed up successfully!" },
    {
      status: 201,
      headers: { "Set-Cookie": `token:${accessToken};path:/;httpOnly:true` },
    },
  );
};
