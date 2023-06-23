import { readFile, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
const path = require("path");

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const filePath = path.resolve(process.cwd(), "app/data/submissions.json");

    let submissions: any = [];

    const fileData = await readFile(filePath, "utf8");
    submissions = JSON.parse(fileData);

    submissions.push(data);

    const newData = JSON.stringify(submissions, null, 2);
    await writeFile(filePath, newData, "utf8");

    return NextResponse.json({
      message: "This data has been succesfully sent",
    });
  } catch (error) {
    return NextResponse.error();
  }
}

// export async function GET() {
//   return NextResponse.json({
//     message: "Hello",
//   });
// }
